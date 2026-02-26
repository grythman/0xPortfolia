
"use client"

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ThreeBackground Component
 * Renders an optimized 3D mesh gradient background using Three.js.
 * Performance optimized with requestAnimationFrame and proper cleanup.
 */
export const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Geometry creation
    const geometry = new THREE.PlaneGeometry(50, 50, 40, 40);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2.5;
    scene.add(plane);

    camera.position.z = 15;
    camera.position.y = 5;

    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;
      const positions = geometry.attributes.position;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        // Optimized wave calculation
        const z = Math.sin(x * 0.5 + time) * 0.5 + Math.cos(y * 0.5 + time) * 0.5;
        positions.setZ(i, z);
      }
      positions.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      // Memory cleanup
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0d4a3e] via-[#1A2522] to-[#2EA07D]"
      aria-hidden="true"
    />
  );
};
