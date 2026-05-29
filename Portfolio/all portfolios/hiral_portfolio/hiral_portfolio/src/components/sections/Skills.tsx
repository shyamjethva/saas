import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useTexture } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { motion } from "framer-motion";

// Asset imports
import imgReact from "../../assets/images/react2.webp";
import imgNode from "../../assets/images/node2.webp";
import imgExpress from "../../assets/images/express.webp";
import imgMongo from "../../assets/images/mongo.webp";
import imgMysql from "../../assets/images/mysql.webp";
import imgTypescript from "../../assets/images/typescript.webp";
import imgJavascript from "../../assets/images/javascript.webp";
import imgPython from "../../assets/images/python.png";
import imgNext from "../../assets/images/next2.webp";
import imgAntigravity from "../../assets/images/antigravity.png";
import imgClaude from "../../assets/images/claude.png";
import imgN8n from "../../assets/images/n8n.png";

const imageUrls = [
  imgReact, imgNode, imgExpress, imgMongo, imgMysql, imgTypescript,
  imgJavascript, imgPython, imgNext, imgAntigravity, imgClaude, imgN8n
];

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);
const spheres = [...Array(30)].map(() => ({
  scale: [0.7, 0.9, 1, 1.2][Math.floor(Math.random() * 4)],
}));

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
      position={[THREE.MathUtils.randFloatSpread(20), THREE.MathUtils.randFloatSpread(20) - 20, THREE.MathUtils.randFloatSpread(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <mesh scale={scale * 0.95} geometry={sphereGeometry} material={material} />
      <mesh scale={scale} geometry={sphereGeometry}>
        <meshStandardMaterial
          color="#111"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.3}
          envMapIntensity={2}
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
  const textures = useTexture(imageUrls);

  const materials = useMemo(
    () =>
      textures.map(
        (texture) =>
          new THREE.MeshStandardMaterial({
            map: texture,
            color: "#ffffff",
            metalness: 0.6,
            roughness: 0.2,
            emissive: "#ffffff",
            emissiveIntensity: 0.05,
          })
      ),
    [textures]
  );

  return (
    <>
      <ambientLight intensity={1.5} />
      <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" />
      <directionalLight position={[0, 5, -4]} intensity={2} />
      <Physics gravity={[0, 0, 0]}>
        <Pointer isActive={isActive} />
        {spheres.map((props, i) => (
          <SphereGeo
            key={i}
            {...props}
            scale={props.scale * (isMobile ? 0.6 : 1)}
            material={materials[i % materials.length]}
            isActive={isActive}
          />
        ))}
      </Physics>
      <Environment preset="night" />
      <EffectComposer enableNormalPass={false}>
        <N8AO color="#ffffff" aoRadius={2} intensity={2} />
      </EffectComposer>
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
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      {/* 1. Background Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas
          shadows={false}
          gl={{
            alpha: true,
            antialias: true,
            precision: 'highp',
            powerPreference: 'high-performance'
          }}
          camera={{ position: [0, 0, 20], fov: 35 }}
          className="h-full w-full"
        >
          <Scene isActive={isActive} isMobile={isMobile} />
        </Canvas>
      </div>

      {/* 2. Foreground Text Content Layer */}
      {/* items-center and text-center move content to the middle */}
      <div className="relative z-10 h-full flex flex-col items-center justify-start text-center pointer-events-none px-6 py-8">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
          >
            Technical Skills
          </motion.h2>

        </div>
      </div>
    </section>
  );
};







{/* hiral portfolio*/ }