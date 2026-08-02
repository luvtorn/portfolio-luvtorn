"use client";

import { Icosahedron } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

function Shape() {
  const mesh = useRef<React.ComponentRef<typeof Icosahedron>>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.06;
    mesh.current.rotation.y += delta * 0.08;
  });

  return (
    <Icosahedron ref={mesh} args={[3, 1]}>
      <meshStandardMaterial color="#5d5d5d" wireframe />
    </Icosahedron>
  );
}

export default function IcosahedronScene() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(desktop.matches && !reduced.matches);
    update();
    desktop.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      dpr={[1, 1.5]}
      frameloop="always"
      gl={{ antialias: false, powerPreference: "low-power" }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[4, 0, 5]} />
      <Shape />
    </Canvas>
  );
}
