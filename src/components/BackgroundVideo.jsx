import React, { useEffect, useRef, useState } from 'react';
import landingVideo from '../assets/designarena_video_j971d9jo.mp4';

/**
 * BackgroundVideo component
 * - Plays in the background of landing page contents
 * - Completely muted (no audio)
 * - Only starts playing when user scrolls or taps/clicks in the site
 */
export const BackgroundVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force muted
    video.muted = true;
    video.defaultMuted = true;

    let triggered = false;

    const handleUserInteraction = () => {
      if (triggered) return;
      triggered = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn('Playback deferred:', err);
          });
      }

      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('scroll', handleUserInteraction);
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };

    // Attach interaction triggers
    window.addEventListener('scroll', handleUserInteraction, { passive: true, once: true });
    window.addEventListener('wheel', handleUserInteraction, { passive: true, once: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true, once: true });
    window.addEventListener('pointerdown', handleUserInteraction, { passive: true, once: true });
    window.addEventListener('click', handleUserInteraction, { passive: true, once: true });
    window.addEventListener('keydown', handleUserInteraction, { passive: true, once: true });
    document.addEventListener('scroll', handleUserInteraction, { passive: true, once: true });
    document.addEventListener('click', handleUserInteraction, { passive: true, once: true });

    return cleanupListeners;
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#1A0A04]"
      aria-hidden="true"
    >
      {/* Video Element: Vivid & clearly visible */}
      <video
        ref={videoRef}
        src={landingVideo}
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover object-center opacity-75 filter brightness-95 contrast-105 transition-opacity duration-700"
      />

      {/* Gentle vignette and soft chocolate gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0A04]/40 via-transparent to-[#1A0A04]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#1A0A04_95%)] opacity-70 pointer-events-none" />
    </div>
  );
};
