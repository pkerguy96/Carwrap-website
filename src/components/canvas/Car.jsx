import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Car = ({ ismobile }) => {
  const computer = useGLTF("./audi_car/scene.gltf");
  return (
    <mesh>
      <hemisphereLight
        intensity={0.3}
        skyColor="#ffffff"
        groundColor="#000000"
      />

      <directionalLight
        intensity={1}
        position={[5, 10, -5]}
        castShadow
        shadow-mapSize={1024}
        shadow-bias={-0.001}
        shadow-radius={4}
        shadow-camera-near={0.1}
        shadow-camera-far={40}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <spotLight
        intensity={0.8}
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={0.1}
        castShadow
        shadow-mapSize={1024}
        shadow-bias={-0.001}
        shadow-radius={4}
        shadow-camera-near={0.1}
        shadow-camera-far={40}
      />
      <primitive
        object={computer.scene}
        scale={ismobile ? 2.5 : 4}
        position={ismobile ? [0, -3, -2.2] : [0, -5.25, -1.5]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};
const CarCanvas = () => {
  const [ismobile, setIsMobile] = useState(false);
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

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [0, 0, 20], fov: 60 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Car ismobile={ismobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default CarCanvas;
