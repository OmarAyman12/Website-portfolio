"use client";
import { useRef, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Plane, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image5.png"
];

function Carousel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 35 }}
      style={{ width: "100vw", height: "100vh", background: "black" }} // Debugging: Add background color
    >
      <ambientLight intensity={0.8} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <directionalLight position={[-5, 5, 5]} intensity={0.8} />

      <ImageCarousel />
      <TextRibbon />
    </Canvas>
  );
}

function ImageCarousel() {
  const groupRef = useRef<THREE.Group>(null);
  const [textures, setTextures] = useState<(THREE.Texture | null)[]>([]);

  useEffect(() => {
    async function loadTextures() {
      try {
        const loadedTextures = await Promise.all(
          images.map(async (img) => {
            const texture = await new THREE.TextureLoader().loadAsync(img);
            return texture;
          })
        );
        setTextures(loadedTextures);
      } catch (error) {
        console.error("Error loading textures:", error);
      }
    }
    loadTextures();
  }, []);

  const positions = useMemo(() => {
    const radius = 4;
    return images.map((_, index) => {
      const angle = ((index - images.length / 2) / images.length) * Math.PI;
      return {
        position: [
          Math.sin(angle) * radius,
          Math.cos(angle) * radius * 0.4,
          Math.cos(angle) * radius * 1.5, // Adjusted for visibility
        ],
        rotation: [0, -angle, 0],
      };
    });
  }, []);

  useEffect(() => {
    if (!groupRef.current) return;

    gsap.to(groupRef.current.rotation, {
      y: "+=1",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    gsap.to(groupRef.current.position, {
      y: "+=0.5",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <group ref={groupRef}>
      {textures.map((texture, index) => (
        texture && (
          <Plane
            key={index}
            args={[1.5, 2]}
            position={positions[index].position}
            rotation={positions[index].rotation}
          >
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
          </Plane>
        )
      ))}
    </group>
  );
}

function TextRibbon() {
  return (
    <Text
      position={[0, 2.8, -1]}
      fontSize={0.5}
      color="white"
      maxWidth={10}
      font="/fonts/Inter-Bold.woff"
    >
      WORK WORK WORK ✦ WORK WORK WORK ✦ WORK WORK WORK
    </Text>
  );
}

export default Carousel;
