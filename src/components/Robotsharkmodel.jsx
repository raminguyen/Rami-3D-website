import React from 'react';
import { useGLTF } from '@react-three/drei';

const RobotSharkModel = () => {
  // Load the model
  const { scene } = useGLTF('./robot_kitchen.gltf'); // Path to your .gltf file in the public directory

  return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
};

export default RobotSharkModel;
