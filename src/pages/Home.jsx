import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Loader from '../components/Loader'; // Adjusted Loader import path
import Navbar from '../components/Navbar';
import RobotSharkModel from '../components/RobotSharkModel'; // Import your model component

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      
      
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}
      >
        {/* Basic lighting */}
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <Suspense fallback={<Loader />}>
          {/* Render the RobotSharkModel within Suspense */}
          <RobotSharkModel />
        </Suspense>

        {/* Enable interactive controls */}
        <OrbitControls />
      </Canvas>
    </section>
  );
};

export default Home;
