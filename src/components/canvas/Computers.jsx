import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  MeshReflectorMaterial,
  Preload,
  useGLTF,
  Float,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // <mesh>
    //   <hemisphereLight intensity={1} groundColor='black' />
    //   <spotLight
    //     position={[-20, 50, 10]}
    //     angle={0.12}
    //     penumbra={1}
    //     intensity={1}
    //     castShadow
    //     shadow-mapSize={1024}
    //   />
    //   <pointLight intensity={1} />
    //   <primitive
    //     object={computer.scene}
    //     scale={isMobile ? 0.7 : 0.75}
    //     position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
    //     rotation={[-0.01, -0.2, -0.1]}
    //   />
    // </mesh>
    <Float floatIntensity={2}>
      <mesh>
        <ambientLight intensity={1000} />
        <hemisphereLight
          intensity={900}
          groundColor='black'
          position={[0, 300, 0]}
        />
        <spotLight
          position={[0, 0, 20]}
          angle={1}
          penumbra={1}
          intensity={700}
          color={"#F40EFF"}
        />
        <pointLight
          intensity={1}
          position={[10, 0, 0]}
          scale={7}
          rotation={[-0.01, -1.5, -0.2]}
        />

        <directionalLight
          position={[75, 300, -75]}
          intensity={6000}
          color={"#1DFFBE"}
        />
        <directionalLight
          position={[0, 0, 0.05]}
          intensity={6000}
          color={"#1DFFBE"}
        />

        <primitive
          object={computer.scene}
          scale={isMobile ? 3 : 4}
          position={isMobile ? [0, -3.5, -0.4] : [0, -5.55, -1.5]}
          rotation={[-0.22, -1.5, -0.2]}
        />
      </mesh>
    </Float>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listenerr when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* REact- loader to be there while model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          // Allows us to rotate it only around a specific angle
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
