import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from './Loader'; // Adjusted Loader import path

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>

          {/* Place 3D components or elements here */}

            


            











        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
