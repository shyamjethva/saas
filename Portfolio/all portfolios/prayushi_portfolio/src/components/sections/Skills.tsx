import * as THREE from "three";
import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useTexture } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

// ── Local PNG assets ──────────────────────────────────────────────────────────
import imgGemini from "../../assets/images/gemini.png";
import imgLinkedIn from "../../assets/images/ln.png";
import imgApollo from "../../assets/images/apollo.png";
import imgExcel from "../../assets/images/excel.png";

// ── Skills that use local images ─────────────────────────────────────────────
// key must match portfolioData.skills.all exactly
const localImageMap: { [key: string]: string } = {
  "Apollo.io":         imgApollo,
  "LinkedIn Outreach": imgLinkedIn,
  "Gemini AI":         imgGemini,
  "MS Excel":          imgExcel,
};

// ── Canvas-generated gradient colors for skills without a local image ─────────
const skillColors: { [key: string]: [string, string] } = {
  "Business Development": ["#0ea5e9", "#6366f1"],
  "Lead Generation":      ["#f59e0b", "#ef4444"],
  "CRM":                  ["#22c55e", "#14b8a6"],
  "Negotiation":          ["#f97316", "#facc15"],
  "Market Research":      ["#10b981", "#3b82f6"],
  "Communication":        ["#7c3aed", "#a855f7"],
};
const defaultColors: [string, string] = ["#6366f1", "#8b5cf6"];

function createSkillTexture(skill: string): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const [color1, color2] = skillColors[skill] ?? defaultColors;

  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, color1);
  grad.addColorStop(1, color2);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();

  // Inner glow ring
  ctx.strokeStyle = "rgba(255,255,255,0.25)";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 10, 0, Math.PI * 2);
  ctx.stroke();

  // Skill name text
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const words = skill.split(" ");
  if (words.length === 1) {
    ctx.font = "bold 36px Arial";
    ctx.fillText(skill, size / 2, size / 2);
  } else if (words.length === 2) {
    ctx.font = "bold 30px Arial";
    ctx.fillText(words[0], size / 2, size / 2 - 20);
    ctx.fillText(words[1], size / 2, size / 2 + 22);
  } else {
    ctx.font = "bold 24px Arial";
    const line1 = words.slice(0, Math.ceil(words.length / 2)).join(" ");
    const line2 = words.slice(Math.ceil(words.length / 2)).join(" ");
    ctx.fillText(line1, size / 2, size / 2 - 18);
    ctx.fillText(line2, size / 2, size / 2 + 18);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// ── Sphere geometry (shared) ──────────────────────────────────────────────────
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
        THREE.MathUtils.randFloatSpread(20),
        THREE.MathUtils.randFloatSpread(20) - 20,
        THREE.MathUtils.randFloatSpread(20) - 10,
      ]}
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

// ── Scene loads local textures via useTexture (suspends safely) ───────────────
function Scene({ isActive, isMobile }: { isActive: boolean; isMobile: boolean }) {
  const techSkills = useMemo(() => portfolioData.skills.all, []);

  // useTexture for the 4 local PNGs — Vite resolves these to proper bitmap URLs
  const [texApollo, texLinkedIn, texGemini, texExcel] = useTexture([
    imgApollo,
    imgLinkedIn,
    imgGemini,
    imgExcel,
  ]);

  const localTextureMap: { [key: string]: THREE.Texture } = useMemo(
    () => ({
      "Apollo.io":         texApollo,
      "LinkedIn Outreach": texLinkedIn,
      "Gemini AI":         texGemini,
      "MS Excel":          texExcel,
    }),
    [texApollo, texLinkedIn, texGemini, texExcel]
  );

  // Build one material per skill
  const materials = useMemo(() => {
    return techSkills.map((skill) => {
      const texture = localTextureMap[skill] ?? createSkillTexture(skill);
      return new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.4,
        roughness: 0.3,
        emissiveMap: texture,
        emissive: new THREE.Color(1, 1, 1),
        emissiveIntensity: 0.06,
      });
    });
  }, [techSkills, localTextureMap]);

  // 30 spheres cycling through skill materials
  const dynamicSpheres = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      scale: [0.7, 0.9, 1, 1.2][Math.floor(Math.random() * 4)],
      materialIndex: i % materials.length,
    }));
  }, [materials.length]);

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
      <EffectComposer enableNormalPass={false}>
        <N8AO color="#ffffff" aoRadius={2} intensity={2} />
      </EffectComposer>
    </>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export const Skills = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      window.removeEventListener("resize", checkMobile);
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      {/* Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas
          shadows={false}
          gl={{
            alpha: true,
            antialias: true,
            precision: "highp",
            powerPreference: "high-performance",
          }}
          camera={{ position: [0, 0, 20], fov: 35 }}
          className="h-full w-full"
        >
          <Suspense fallback={null}>
            <Scene isActive={isActive} isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Text */}
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