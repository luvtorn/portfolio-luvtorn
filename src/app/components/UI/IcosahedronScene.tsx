"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Icosahedron } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function Shape() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    mesh.current.rotation.x += 0.001
    mesh.current.rotation.y += 0.001
  })

  return (
    <Icosahedron ref={mesh} args={[3, 1]}>
      <meshStandardMaterial color="#595959" wireframe />
    </Icosahedron>
  )
}

export default function IcosahedronScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[4, 0, 5]} />
      <Shape />
    </Canvas>
  )
}