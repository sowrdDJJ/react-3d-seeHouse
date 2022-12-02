import React, { Suspense} from 'react'
import { Preload, OrbitControls,Html } from '@react-three/drei'
import Portals from './Portals'
import Contact from './Contact'

const Experience = () => {

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
      <Suspense fallback={null}>
        <Preload all />
        <Portals />
        {/* <mesh position={[10, 0, -15]}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color="white" />
        </mesh> */}
        <Contact />
      </Suspense>
    </>
  );
};

export default Experience;
