"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import RotatingGlobe from "./RotatingGlobe"; 

export default function Globe3D() {
  return (
    <div className="w-full h-[420px] md:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden ">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />

        <Suspense fallback={null}>
          <RotatingGlobe textureUrl="/earth.jpg" />
          <Stars radius={50} depth={30} count={300} factor={6} fade />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
