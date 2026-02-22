import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

interface ThreeDBackgroundProps {
  isMobile: boolean;
}

// Individual image tile component
const ImageTile = ({
  url,
  position,
  rotation,
}: {
  url: string;
  position: [number, number, number];
  rotation: [number, number, number];
}) => {
  const texture = useTexture(url);

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[1.8, 1.2]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

// Scene component with mouse tracking
const Scene = ({
  mouseRef,
}: {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // Image URLs
  const imageUrls = Array.from(
    { length: 13 },
    (_, i) => `/tiny_images/${i + 1}.jpg`,
  );

  // Pre-defined positions - adjust these to your liking
  const positions: [number, number, number][] = [
    [-4, 3, -2],
    [-1.5, 3, -1],
    [1.5, 3, -1.5],
    [4, 3, -2.5],
    [-3.5, 0.5, 0],
    [-0.5, 0.5, 1],
    [2, 0.5, 0.5],
    [4.5, 0.5, -1],
    [-3, -2, 1],
    [0, -2, 2],
    [3, -2, 1.5],
    [-2, -0.5, 3],
    [2, 1, 2.5],
  ];

  // Pre-defined rotations
  const rotations: [number, number, number][] = [
    [0.1, 0.2, 0],
    [-0.1, -0.1, 0.1],
    [0.1, -0.2, -0.1],
    [-0.1, 0.1, 0.1],
    [0, 0.3, 0.1],
    [0.1, -0.1, 0],
    [-0.1, 0.2, -0.1],
    [0.1, -0.2, 0.1],
    [0, 0.1, 0.2],
    [-0.1, -0.1, -0.1],
    [0.1, 0, 0.1],
    [0.2, 0.4, 0.1],
    [-0.2, -0.3, 0],
  ];

  useFrame(() => {
    if (groupRef.current) {
      // Smoothly interpolate rotation based on mouse position
      // This creates a gentle following effect
      const targetY = mouseRef.current.x * 0.3;
      const targetX = mouseRef.current.y * 0.1;

      groupRef.current.rotation.y +=
        (targetY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x +=
        (targetX - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {imageUrls.map((url, index) => (
        <ImageTile
          key={index}
          url={url}
          position={positions[index] || [0, 0, 0]}
          rotation={rotations[index] || [0, 0, 0]}
        />
      ))}
    </group>
  );
};

export const ThreeDBackground = ({ isMobile }: ThreeDBackgroundProps) => {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Track mouse movement on the entire window, not just the canvas
    const handleMouseMove = (e: MouseEvent) => {
      // Convert mouse position to normalized coordinates (-1 to 1)
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none", // This allows scrolling through the canvas!
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, isMobile ? 14 : 10],
          fov: 30,
        }}
        style={{
          background: "transparent",
          pointerEvents: "none", // Also set on canvas to be safe
        }}
      >
        <Scene mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
};
