import React, { useEffect, useRef, useState } from 'react';

/**
 * TransparentVideo
 * High-performance WebGL / Canvas player that automatically removes
 * any black background (luma keying) in real-time with smooth
 * anti-aliased edge blending, guaranteeing the video subject floats
 * seamlessly on any page background with ZERO black box or borders.
 */
export const TransparentVideo = ({
  src,
  className = '',
  isMuted = true,
  threshold = 0.05, // Cutoff threshold for pitch black
  smoothing = 0.05, // Feathering range for smooth edge antialiasing
}) => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Sync muted state to video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    let animId = null;
    let gl = null;
    let program = null;
    let texture = null;
    let isCancelled = false;

    // Try WebGL first for 60/120fps GPU accelerated transparency
    try {
      gl =
        canvas.getContext('webgl', {
          alpha: true,
          premultipliedAlpha: false,
          preserveDrawingBuffer: false,
          powerPreference: 'high-performance',
        }) ||
        canvas.getContext('experimental-webgl', {
          alpha: true,
          premultipliedAlpha: false,
        });
    } catch {
      gl = null;
    }

    let fallback2d = !gl;

    if (gl) {
      const vsSource = `
        attribute vec2 a_pos;
        attribute vec2 a_tex;
        varying vec2 v_tex;
        void main() {
          gl_Position = vec4(a_pos, 0.0, 1.0);
          v_tex = a_tex;
        }
      `;

      const fsSource = `
        precision mediump float;
        uniform sampler2D u_sampler;
        uniform float u_threshold;
        uniform float u_smoothing;
        varying vec2 v_tex;
        void main() {
          vec4 color = texture2D(u_sampler, v_tex);
          
          // If the browser already decoded WebM native alpha
          if (color.a < 0.96) {
            gl_FragColor = vec4(color.rgb * color.a, color.a);
            return;
          }
          
          // Real-time luma keying for black backgrounds:
          float brightness = max(color.r, max(color.g, color.b));
          float alpha = smoothstep(u_threshold, u_threshold + u_smoothing, brightness);
          
          gl_FragColor = vec4(color.rgb * alpha, alpha);
        }
      `;

      function createShader(glCtx, type, source) {
        const shader = glCtx.createShader(type);
        glCtx.shaderSource(shader, source);
        glCtx.compileShader(shader);
        if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
          glCtx.deleteShader(shader);
          return null;
        }
        return shader;
      }

      const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

      if (!vs || !fs) {
        fallback2d = true;
      } else {
        program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          fallback2d = true;
        } else {
          gl.useProgram(program);

          // Geometry quad
          const posBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
          gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
              -1, -1,
               1, -1,
              -1,  1,
              -1,  1,
               1, -1,
               1,  1,
            ]),
            gl.STATIC_DRAW
          );

          const aPosLoc = gl.getAttribLocation(program, 'a_pos');
          gl.enableVertexAttribArray(aPosLoc);
          gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

          // Texture coords (flip Y for video mapping)
          const texBuffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
          gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
              0, 1,
              1, 1,
              0, 0,
              0, 0,
              1, 1,
              1, 0,
            ]),
            gl.STATIC_DRAW
          );

          const aTexLoc = gl.getAttribLocation(program, 'a_tex');
          gl.enableVertexAttribArray(aTexLoc);
          gl.vertexAttribPointer(aTexLoc, 2, gl.FLOAT, false, 0, 0);

          texture = gl.createTexture();
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

          const uThreshLoc = gl.getUniformLocation(program, 'u_threshold');
          const uSmoothLoc = gl.getUniformLocation(program, 'u_smoothing');
          gl.uniform1f(uThreshLoc, threshold);
          gl.uniform1f(uSmoothLoc, smoothing);
        }
      }
    }

    const ctx2d = fallback2d ? canvas.getContext('2d', { willReadFrequently: true }) : null;

    // Start video playback cleanly
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (!isCancelled) setHasStarted(true);
        })
        .catch(() => {
          // Autoplay policy or mute requirement
          video.muted = true;
          video.play().then(() => {
            if (!isCancelled) setHasStarted(true);
          }).catch(() => {});
        });
    }

    function renderFrame() {
      if (isCancelled) return;

      if (video.readyState >= 2 && video.videoWidth > 0) {
        if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }

        if (!fallback2d && gl && program) {
          gl.viewport(0, 0, canvas.width, canvas.height);
          gl.clearColor(0, 0, 0, 0);
          gl.clear(gl.COLOR_BUFFER_BIT);

          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
        } else if (ctx2d && canvas.width > 0) {
          ctx2d.clearRect(0, 0, canvas.width, canvas.height);
          ctx2d.drawImage(video, 0, 0, canvas.width, canvas.height);
          const frame = ctx2d.getImageData(0, 0, canvas.width, canvas.height);
          const d = frame.data;
          const thresh = threshold * 255;
          const smooth = smoothing * 255;
          for (let i = 0; i < d.length; i += 4) {
            const maxVal = Math.max(d[i], d[i + 1], d[i + 2]);
            if (maxVal < thresh) {
              d[i + 3] = 0;
            } else if (maxVal < thresh + smooth) {
              d[i + 3] = Math.round(((maxVal - thresh) / smooth) * d[i + 3]);
            }
          }
          ctx2d.putImageData(frame, 0, 0);
        }
      }

      animId = requestAnimationFrame(renderFrame);
    }

    animId = requestAnimationFrame(renderFrame);

    return () => {
      isCancelled = true;
      if (animId) cancelAnimationFrame(animId);
      if (gl && texture) {
        gl.deleteTexture(texture);
      }
      if (gl && program) {
        gl.deleteProgram(program);
      }
    };
  }, [src, threshold, smoothing]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Hidden offscreen HTML5 video that decodes the media stream and plays sound */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        crossOrigin="anonymous"
        className="sr-only pointer-events-none"
      />

      {/* Real-time transparent canvas with black background completely eliminated */}
      <canvas
        ref={canvasRef}
        className={`w-full h-auto max-h-[460px] object-contain transition-all duration-700 pointer-events-auto bg-transparent ${
          hasStarted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      />
    </div>
  );
};
export default TransparentVideo;
