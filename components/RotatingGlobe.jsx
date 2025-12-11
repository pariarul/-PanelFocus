





"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

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
  const globeRef = useRef();

  // Deterministic points
  const points = useMemo(() => {
    const count = 80;
    const arr = [];
    for (let i = 0; i < count; i++) {
      const seed = i * 17.37;
      const lat = -60 + (seed % 120);
      const lon = -180 + (seed % 360);
      const [x, y, z] = latLonToXYZ(lat, lon, 1.02);
      arr.push({ id: i, position: [x, y, z], seed });
    }
    return arr;
  }, []);

  useFrame((state) => {
    // Rotate globe
    globeRef.current.rotation.y += 0.002;

    // Animate points (pulse)
    points.forEach((p, i) => {
      const mesh = globeRef.current.children[i + 1]; // first child is globe
      mesh.scale.setScalar(1 + 0.3 * Math.sin(state.clock.elapsedTime * 3 + p.seed));
    });
  });

  return (
    <group ref={globeRef}>
      {/* Earth Sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {/* Atmosphere glow */}
      <mesh>
        <sphereGeometry args={[1.05, 64, 64]} />
        <meshStandardMaterial
          color="#00aaff"
          transparent
          opacity={0.2}
          emissive="#00aaff"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Points */}
      {points.map((p) => (
        <mesh key={p.id} position={p.position}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshStandardMaterial color="#bf130a" emissive="#ff3f3f" emissiveIntensity={0.7} />
        </mesh>
      ))}

      {/* Optional orbiting satellites */}
      {[...Array(10)].map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        return (
          <mesh
            key={`sat-${i}`}
            position={[
              1.3 * Math.cos(angle),
              0.2 * Math.sin(angle * 3),
              1.3 * Math.sin(angle),
            ]}
          >
            <sphereGeometry args={[0.015, 12, 12]} />
            <meshStandardMaterial color="#ffffffff" emissive="#ffffffff" />
          </mesh>
        );
      })}
    </group>
  );
}
