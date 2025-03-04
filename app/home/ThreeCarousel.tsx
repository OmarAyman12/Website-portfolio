"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image5.png",
];

function Carousel() {
  const groupRef = useRef<THREE.Group>(null);
  const textures = useMemo(() => {
    return images.map((src) => {
      const texture = new THREE.TextureLoader().load(src);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    });
  }, []);

  useEffect(() => {
    if (!groupRef.current) return;
    gsap.to(groupRef.current.rotation, {
      y: Math.PI * 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <group ref={groupRef}>
      {textures.map((texture, index) => {
        const angle = (index / images.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        return (
          <mesh key={index} position={[x, 0, z]} rotation={[0, -angle, 0]}>
            <planeGeometry args={[1.5, 2]} />
            <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1.2} />
      <Carousel />
    </Canvas>
  );
}
