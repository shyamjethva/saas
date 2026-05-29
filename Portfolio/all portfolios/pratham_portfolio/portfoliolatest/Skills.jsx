import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
} from "@react-three/rapier";
import { motion } from "framer-motion";

// ─── Vite asset imports ────────────────────────────────────────────────────────
import imgReact from "../assets/images/react2.webp";
import imgNode from "../assets/images/node2.webp";
import imgExpress from "../assets/images/express.webp";
import imgMongo from "../assets/images/mongo.webp";
import imgMysql from "../assets/images/mysql.webp";
import imgTypescript from "../assets/images/typescript.webp";
import imgJavascript from "../assets/images/javascript.webp";
import imgPython from "../assets/images/python.png";
import imgNext from "../assets/images/next2.webp";
import imgAntigravity from "../assets/images/antigravity.png";
import imgClaude from "../assets/images/claude.png";
import imgN8n from "../assets/images/n8n.png";

const imageUrls = [
  imgReact,
  imgNode,
  imgExpress,
  imgMongo,
  imgMysql,
  imgTypescript,
  imgJavascript,
  imgPython,
  imgNext,
  imgAntigravity,
  imgClaude,
  imgN8n,
];

// ─── Texture + geometry setup (module-level, created once) ────────────────────
const textureLoader = new THREE.TextureLoader();
const textures = imageUrls.map((url) => textureLoader.load(url));
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);
const spheres = [...Array(28)].map(() => ({
  scale: [0.65, 0.8, 0.9, 1, 1.1][Math.floor(Math.random() * 5)],
}));

// ─── SphereGeo ────────────────────────────────────────────────────────────────
function SphereGeo({ vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, material, isActive }) {
  const api = useRef(null);

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(new THREE.Vector3(-50 * delta * scale, -150 * delta * scale, -50 * delta * scale));
    api.current.applyImpulse(impulse, true);

    // Gentle random rotation so logos are visible from all sides
    api.current.applyTorqueImpulse(
      {
        x: (Math.random() - 0.5) * 0.01 * scale,
        y: (Math.random() - 0.5) * 0.01 * scale,
        z: (Math.random() - 0.5) * 0.01 * scale,
      },
      true
    );
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      {/* Inner Logo Sphere */}
      <mesh
        scale={scale * 0.95}
        geometry={sphereGeometry}
        material={material}
      />
      {/* Outer Metallic Glass Shell */}
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
      >
        <meshStandardMaterial 
          color="#000000" 
          metalness={1} 
          roughness={0} 
          transparent 
          opacity={0.2} 
          envMapIntensity={2}
        />
      </mesh>
    </RigidBody>
  );
}

// ─── Pointer ──────────────────────────────────────────────────────────────────
function Pointer({ vec = new THREE.Vector3(), isActive }) {
  const ref = useRef(null);

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
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

// ─── Scene (R3F tree) ─────────────────────────────────────────────────────────
function Scene({ isActive }) {
  const materials = useMemo(
    () =>
      textures.map(
        (texture) =>
          new THREE.MeshStandardMaterial({
            map: texture,
            color: "#000000", // Pure black
            metalness: 0.7,
            roughness: 0.1,
            emissive: "#ffffff",
            emissiveMap: texture,
            emissiveIntensity: 0.15,
            envMapIntensity: 1.5, // High reflections for light theme
          })
      ),
    []
  );

  return (
    <>
      <ambientLight intensity={0.8} />
      <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" />
      <directionalLight position={[0, 5, -4]} intensity={2} />
      <Physics gravity={[0, 0, 0]}>
        <Pointer isActive={isActive} />
        {spheres.map((props, i) => (
          <SphereGeo
            key={i}
            {...props}
            material={materials[i % materials.length]}
            isActive={isActive}
          />
        ))}
      </Physics>
      <Environment preset="city" environmentIntensity={1} />
      <EffectComposer enableNormalPass={false}>
        <N8AO color="#000000" aoRadius={2} intensity={1.5} />
      </EffectComposer>
    </>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────
function Skills() {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative bg-white text-gray-900 overflow-hidden"
      style={{ height: "100svh" }}
    >
      {/* Canvas fills the entire section */}
      <Canvas
        shadows={false}
        gl={{
          alpha: true,
          stencil: false,
          depth: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => {
          state.gl.toneMappingExposure = 1.5;
        }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <Scene isActive={isActive} />
      </Canvas>

      {/* Header overlaid on top of the balls */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-start pt-20 sm:pt-28 lg:pt-32 px-4 sm:px-6 pointer-events-none"
      >
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-yellow-600 bg-clip-text text-transparent">
            Technical Stack
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Tools and technologies I use to bring powerful digital ideas to life.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
