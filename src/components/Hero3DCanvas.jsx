import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      return; // WebGL not supported, fallback to CSS
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfff0dc, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffecd0, 2.0);
    dirLight1.position.set(5, 8, 7);
    scene.add(dirLight1);

    const goldRimLight = new THREE.DirectionalLight(0xd4af37, 2.5);
    goldRimLight.position.set(-6, -4, 4);
    scene.add(goldRimLight);

    const caramelFill = new THREE.PointLight(0xc9782b, 2.0, 20);
    caramelFill.position.set(0, 2, 5);
    scene.add(caramelFill);

    // Materials
    const darkChocMat = new THREE.MeshStandardMaterial({
      color: 0x220c04,
      roughness: 0.28,
      metalness: 0.12,
    });

    const milkChocMat = new THREE.MeshStandardMaterial({
      color: 0x482210,
      roughness: 0.35,
      metalness: 0.08,
    });

    const almondMat = new THREE.MeshStandardMaterial({
      color: 0xb57843,
      roughness: 0.65,
      metalness: 0.05,
    });

    const pistachioMat = new THREE.MeshStandardMaterial({
      color: 0x8db255,
      roughness: 0.55,
      metalness: 0.05,
    });

    const shellMat = new THREE.MeshStandardMaterial({
      color: 0xe0c8a8,
      roughness: 0.75,
      metalness: 0.02,
    });

    // Object Group
    const floatGroup = new THREE.Group();
    scene.add(floatGroup);

    // 1. Chocolate Bar in center-right
    const barGroup = new THREE.Group();
    const barBaseGeo = new THREE.BoxGeometry(3.2, 4.4, 0.45);
    const barMesh = new THREE.Mesh(barBaseGeo, darkChocMat);
    barGroup.add(barMesh);

    // Indented squares on the chocolate bar (2x3 grid)
    for (let x = -0.75; x <= 0.75; x += 1.5) {
      for (let y = -1.3; y <= 1.3; y += 1.3) {
        const sqGeo = new THREE.BoxGeometry(1.15, 1.0, 0.15);
        const sqMesh = new THREE.Mesh(sqGeo, milkChocMat);
        sqMesh.position.set(x, y, 0.25);
        barGroup.add(sqMesh);
      }
    }
    barGroup.position.set(4.2, 0.2, -1);
    barGroup.rotation.set(0.3, -0.4, 0.15);
    floatGroup.add(barGroup);

    // 2. Chocolate Chunks
    const chunks = [];
    const chunkGeo1 = new THREE.DodecahedronGeometry(0.7, 0);
    const chunkGeo2 = new THREE.BoxGeometry(0.9, 0.9, 0.6);

    const chunk1 = new THREE.Mesh(chunkGeo1, darkChocMat);
    chunk1.position.set(-4.5, 2.2, 1);
    floatGroup.add(chunk1);
    chunks.push({ mesh: chunk1, speedX: 0.008, speedY: 0.012, bobOffset: 0 });

    const chunk2 = new THREE.Mesh(chunkGeo2, milkChocMat);
    chunk2.position.set(3.0, -2.8, 1.5);
    chunk2.rotation.set(0.4, 0.6, 0.2);
    floatGroup.add(chunk2);
    chunks.push({ mesh: chunk2, speedX: -0.01, speedY: 0.009, bobOffset: 1.5 });

    const chunk3 = new THREE.Mesh(chunkGeo1, darkChocMat);
    chunk3.position.set(-3.2, -2.5, 0.5);
    chunk3.scale.set(0.65, 0.65, 0.65);
    floatGroup.add(chunk3);
    chunks.push({ mesh: chunk3, speedX: 0.007, speedY: -0.01, bobOffset: 3.0 });

    // 3. Almonds (elongated ellipsoids)
    const almondGeo = new THREE.SphereGeometry(0.5, 16, 16);
    almondGeo.scale(1.5, 0.7, 0.6);

    const almond1 = new THREE.Mesh(almondGeo, almondMat);
    almond1.position.set(-4.0, -0.2, 2.0);
    almond1.rotation.set(0.8, 0.4, 0.3);
    floatGroup.add(almond1);
    chunks.push({ mesh: almond1, speedX: 0.015, speedY: 0.008, bobOffset: 0.8 });

    const almond2 = new THREE.Mesh(almondGeo, almondMat);
    almond2.position.set(2.2, 3.0, 0.5);
    almond2.scale.set(0.8, 0.8, 0.8);
    almond2.rotation.set(-0.5, 0.8, 0.6);
    floatGroup.add(almond2);
    chunks.push({ mesh: almond2, speedX: -0.012, speedY: 0.014, bobOffset: 2.2 });

    // 4. Pistachios (green core with open shell half)
    const pistGeo = new THREE.SphereGeometry(0.42, 16, 16);
    pistGeo.scale(1.2, 0.8, 0.75);

    const pist1 = new THREE.Mesh(pistGeo, pistachioMat);
    pist1.position.set(-2.2, 3.2, 1.8);
    pist1.rotation.set(0.4, -0.6, 0.8);
    floatGroup.add(pist1);
    chunks.push({ mesh: pist1, speedX: 0.014, speedY: -0.012, bobOffset: 1.2 });

    const pist2 = new THREE.Mesh(pistGeo, pistachioMat);
    pist2.position.set(5.2, -1.8, 0.8);
    pist2.scale.set(0.9, 0.9, 0.9);
    pist2.rotation.set(0.6, 0.3, -0.4);
    floatGroup.add(pist2);
    chunks.push({ mesh: pist2, speedX: -0.009, speedY: -0.009, bobOffset: 2.7 });

    // Mouse & Tilt interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    const onDeviceOrientation = (e) => {
      if (e.gamma !== null && e.beta !== null) {
        targetX = (e.gamma / 45) * 0.8;
        targetY = ((e.beta - 45) / 45) * 0.8;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('deviceorientation', onDeviceOrientation);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);

      // Adjust camera zoom on mobile vs desktop
      if (newW < 768) {
        camera.position.z = 18;
      } else {
        camera.position.z = 14;
      }
    };
    onResize();
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / group tilt based on mouse
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      floatGroup.rotation.y = mouseX * 0.4;
      floatGroup.rotation.x = -mouseY * 0.3;

      // Chocolate bar subtle float
      barGroup.rotation.y = -0.4 + Math.sin(elapsedTime * 0.8) * 0.1 + mouseX * 0.3;
      barGroup.rotation.x = 0.3 + Math.cos(elapsedTime * 0.7) * 0.08 - mouseY * 0.2;
      barGroup.position.y = 0.2 + Math.sin(elapsedTime * 1.2) * 0.25;

      // Floating chunks & nuts
      chunks.forEach((item) => {
        item.mesh.rotation.x += item.speedX;
        item.mesh.rotation.y += item.speedY;
        item.mesh.position.y += Math.sin(elapsedTime * 1.5 + item.bobOffset) * 0.003;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('deviceorientation', onDeviceOrientation);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
      aria-hidden="true"
    />
  );
};
