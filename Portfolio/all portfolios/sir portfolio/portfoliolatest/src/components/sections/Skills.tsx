import * as THREE from "three";
import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useTexture } from "@react-three/drei";

import {
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";
import React from "react";

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// Asset imports


const skillIconMap: { [key: string]: string } = {
  "Python": "https://img.icons8.com/color/144/python.png",
  "React": "https://img.icons8.com/color/144/react-native.png",
  "Node.js": "https://img.icons8.com/color/144/nodejs.png",
  "MongoDB": "https://img.icons8.com/color/144/mongodb.png",
  "HTML": "https://img.icons8.com/color/144/html-5.png",
  "CSS": "https://img.icons8.com/color/144/css3.png",
  "JavaScript": "https://img.icons8.com/color/144/javascript.png",
  "ASP.NET": "https://img.icons8.com/color/144/net-framework.png",
  "MySQL": "https://img.icons8.com/color/144/mysql-logo.png",
  "Figma": "https://img.icons8.com/color/144/figma.png",
  "Photoshop": "https://img.icons8.com/color/144/adobe-photoshop.png",
  "Canva": "https://img.icons8.com/color/144/canva.png",
  "AI Agents": "https://img.icons8.com/fluency/144/bot.png",
  "Automation Workflows": "https://img.icons8.com/color/144/workflow.png",
  "LangGraph": "https://img.icons8.com/color/144/mind-map.png",
  "SEO Tools": "https://img.icons8.com/color/144/seo.png",
  "Analytics": "https://img.icons8.com/color/144/google-analytics.png",
  "Meta Ads": "https://img.icons8.com/color/144/facebook-new.png"
};

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

function SphereGeo({ vec = new THREE.Vector3(), scale, material, isActive }: any) {
  const api = useRef<any>(null);

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(new THREE.Vector3(-60 * delta * scale, -150 * delta * scale, -60 * delta * scale));
    api.current.applyImpulse(impulse, true);

    api.current.applyTorqueImpulse(
      {
        x: (Math.random() - 0.5) * 0.02 * scale,
        y: (Math.random() - 0.5) * 0.02 * scale,
        z: (Math.random() - 0.5) * 0.02 * scale,
      },
      true
    );
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[
        THREE.MathUtils.randFloatSpread(40),
        THREE.MathUtils.randFloatSpread(20),
        THREE.MathUtils.randFloatSpread(10)
      ]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <mesh scale={scale * 0.95} geometry={sphereGeometry} material={material} />
      <mesh scale={scale} geometry={sphereGeometry}>
        <meshStandardMaterial
          color="#fff"
          metalness={1}
          roughness={0}
          transparent
          opacity={0.15}
          envMapIntensity={1}
        />
      </mesh>
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3(), isActive }: any) {
  const ref = useRef<any>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;
    const target = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current.setNextKinematicTranslation(target);
  });

  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2.5]} />
    </RigidBody>
  );
}

function Scene({ isActive, isMobile }: { isActive: boolean; isMobile: boolean }) {
  const skillIcons = useMemo(() => {
    // Collect all tools from all categories
    const allTools = portfolioData.skills.categories.flatMap(cat => cat.tools);
    return allTools.map(skill => skillIconMap[skill] || "https://img.icons8.com/color/144/rocket.png");
  }, []);

  const textures = useTexture(skillIcons);

  const materials = useMemo(
    () =>
      textures.map(
        (texture) =>
          new THREE.MeshStandardMaterial({
            map: texture,
            color: "#ffffff",
            transparent: true,
            metalness: 0.2,
            roughness: 0.8,
            emissive: "#ffffff",
            emissiveIntensity: 0.15,
          })
      ),
    [textures]
  );

  const dynamicSpheres = useMemo(() => {
    const totalSpheres = isMobile ? 15 : 50;
    return [...Array(totalSpheres)].map((_, i) => ({
      scale: [0.7, 0.9, 1, 1.2][Math.floor(Math.random() * 4)],
      materialIndex: i % materials.length
    }));
  }, [materials.length, isMobile]);

  return (
    <>
      <ambientLight intensity={1.5} />
      <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" />
      <directionalLight position={[0, 5, -4]} intensity={2} />
      <Physics gravity={[0, 0, 0]}>
        <Pointer isActive={isActive} />
        {dynamicSpheres.map((props, i) => (
          <SphereGeo
            key={i}
            scale={props.scale * (isMobile ? 0.6 : 1)}
            material={materials[props.materialIndex]}
            isActive={isActive}
          />
        ))}
      </Physics>
      <Environment preset="night" />
    </>
  );
}

export const Skills = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden py-32"
    >
      {/* Background Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas
          dpr={isMobile ? 1 : [1, 2]}
          shadows={false}
          gl={{
            alpha: true,
            antialias: false,
            precision: isMobile ? 'mediump' : 'highp',
            powerPreference: 'high-performance'
          }}
          camera={{ position: [0, 0, 20], fov: 35 }}
          className="h-full w-full"
        >
          <Suspense fallback={null}>
            <ErrorBoundary>
              <Scene isActive={isActive} isMobile={isMobile} />
            </ErrorBoundary>
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="container relative z-10 mx-auto px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-4">
            {portfolioData.skills.heading}
          </h2>
          {/* <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Our Technology Stack
          </h3> */}
        </motion.div>
      </div>
    </section>
  );
};