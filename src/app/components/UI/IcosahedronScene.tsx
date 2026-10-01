"use client";

import { Icosahedron } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

function Shape({ position, speed }: { position: [number, number, number]; speed: number }) {
  const mesh = useRef<React.ComponentRef<typeof Icosahedron>>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * speed;
    mesh.current.rotation.y += delta * speed * 1.3;
  });

  return (
    <Icosahedron ref={mesh} args={[2.2, 1]} position={position}>
      <meshStandardMaterial color="#5d5d5d" wireframe />
    </Icosahedron>
  );
}

export default function IcosahedronScene() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const intersectingRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateVisibility = () => {
      setVisible(intersectingRef.current && document.visibilityState === "visible");
    };
    const observer = new IntersectionObserver(([entry]) => {
      intersectingRef.current = entry.isIntersecting;
      updateVisibility();
    });
    observer.observe(container);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        dpr={[1, 1.25]}
        frameloop={visible ? "always" : "never"}
        gl={{ antialias: false, powerPreference: "low-power" }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[4, 0, 5]} />
        <Shape position={[-5, 1.8, 0]} speed={0.045} />
        <Shape position={[5, -1, 0]} speed={0.055} />
      </Canvas>
    </div>
  );
}
