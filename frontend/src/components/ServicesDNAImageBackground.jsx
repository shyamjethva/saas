import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function ServicesDNAImageBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0xffffff, 0);
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.45);
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(8, 10, 12);
    const fillLight = new THREE.DirectionalLight(0xb6e4ff, 1.15);
    fillLight.position.set(-10, 3, 10);
    const rimLight = new THREE.PointLight(0x2ea8ff, 10, 40, 2);
    rimLight.position.set(-6, 5, 8);
    const warmLight = new THREE.PointLight(0xffc14d, 8, 32, 2);
    warmLight.position.set(7, -4, 7);

    scene.add(ambientLight, keyLight, fillLight, rimLight, warmLight);

    const leftGroup = new THREE.Group();
    const rightGroup = new THREE.Group();
    scene.add(leftGroup, rightGroup);

    let leftModel = null;
    let rightModel = null;
    let rafId = 0;
    let destroyed = false;
    const targetProgress = { value: 0 };
    const currentProgress = { value: 0 };

    const applyMaterialTuning = object => {
      object.traverse(child => {
        if (!child.isMesh || !child.material) return;
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach(material => {
          if ('metalness' in material) material.metalness = Math.max(material.metalness ?? 0, 0.72);
          if ('roughness' in material) material.roughness = Math.min(material.roughness ?? 1, 0.34);
          if ('envMapIntensity' in material) material.envMapIntensity = 1.2;
          material.needsUpdate = true;
        });
      });
    };

    const setLayout = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      if (!leftModel || !rightModel) return;

      const mobile = width < 768;
      const scale = mobile ? 2.4 : 3.6;

      leftModel.scale.setScalar(scale);
      rightModel.scale.setScalar(scale);

      // Slash (/) pattern: Bottom-Left and Top-Right (Adjusted Y to prevent cutting)
      leftGroup.position.set(mobile ? -4.5 : -6.5, mobile ? -2.5 : -3.2, 0);
      rightGroup.position.set(mobile ? 4.5 : 6.5, mobile ? 3.0 : 4.0, 0);
    };

    const updateTransforms = () => {
      if (!leftModel || !rightModel) return;

      currentProgress.value += (targetProgress.value - currentProgress.value) * 0.09;
      const progress = currentProgress.value;

      leftGroup.rotation.z = -0.34;
      leftGroup.rotation.y = -0.82 + progress * 1.05;
      leftGroup.rotation.x = 0.18 - progress * 0.18;
      leftGroup.position.x = (window.innerWidth < 768 ? -4.5 : -6.5) + progress * 0.55;
      leftGroup.position.y = (window.innerWidth < 768 ? -2.5 : -3.2) - progress * 0.42;

      rightGroup.rotation.z = -0.34;
      rightGroup.rotation.y = 0.88 - progress * 1.05;
      rightGroup.rotation.x = -0.16 + progress * 0.18;
      rightGroup.position.x = (window.innerWidth < 768 ? 4.5 : 6.5) - progress * 0.62;
      rightGroup.position.y = (window.innerWidth < 768 ? 3.0 : 4.0) + progress * 0.44;
    };

    const animate = () => {
      if (destroyed) return;
      updateTransforms();
      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      const scrollRange = window.innerHeight * 1.4;
      targetProgress.value = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);

      // Fade out the DNA element as it reaches the footer area
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Start fading out when within 800px of the bottom
        const distanceToBottom = documentHeight - (scrollY + windowHeight);

        if (distanceToBottom < 800) {
          containerRef.current.style.opacity = Math.max(0, (distanceToBottom / 800) * 0.95);
        } else {
          containerRef.current.style.opacity = 0.95;
        }
      }
    };

    const loader = new GLTFLoader();
    loader.load(
      '/models/dna-helix.glb',
      gltf => {
        if (destroyed) return;

        leftModel = gltf.scene;
        rightModel = gltf.scene.clone(true);

        applyMaterialTuning(leftModel);
        applyMaterialTuning(rightModel);

        leftGroup.add(leftModel);
        rightGroup.add(rightModel);

        setLayout();
        handleScroll();
        animate();
      },
      undefined,
      error => {
        console.error('Failed to load DNA model:', error);
      }
    );

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      destroyed = true;
      window.removeEventListener('resize', setLayout);
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);

      scene.traverse(object => {
        if (!object.isMesh) return;
        object.geometry?.dispose?.();
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material?.dispose?.());
        } else {
          object.material?.dispose?.();
        }
      });

      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
      aria-hidden="true"
    />
  );
}

export default ServicesDNAImageBackground;
