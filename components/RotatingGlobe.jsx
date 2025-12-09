"use client";

import React, { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

// Convert lat/lon to 3D coordinates
function latLonToXYZ(lat, lon, radius = 1) {
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;

  const x = radius * Math.cos(latRad) * Math.cos(lonRad);
  const y = radius * Math.sin(latRad);
  const z = radius * Math.cos(latRad) * Math.sin(lonRad);

  return [x, y, z];
}

export default function RotatingGlobe({ textureUrl = "/earth.jpg" }) {
  const texture = useTexture(textureUrl);

  // Generate deterministic (NOT random) points → avoids hydration error
  const points = useMemo(() => {
    const count = 80;
    const arr = [];

    for (let i = 0; i < count; i++) {
      const seed = i * 17.37; // deterministic pseudo-random
      const lat = -60 + (seed % 120);
      const lon = -180 + (seed % 360);
      const [x, y, z] = latLonToXYZ(lat, lon, 1.02);
      arr.push({ id: i, position: [x, y, z] });
    }

    return arr;
  }, []);

  // Auto rotation
  useFrame((state) => {
    state.scene.rotation.y += 0.002;
  });

  return (
    <group>
      {/* Earth sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* Points on the globe */}
{points.map((p) => (
  <mesh key={p.id} position={p.position}>
    <sphereGeometry args={[0.02, 16, 16]} />
    <meshStandardMaterial color="#bf130a" />
  </mesh>
))}

    </group>
  );
}
