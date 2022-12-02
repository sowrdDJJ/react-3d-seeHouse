import Experience from "./components/Experience"
import { Canvas } from "@react-three/fiber"
import './App.css'
import { ContactContextProvider, useContextContactCon } from "./contexts/ContactContext";
import  Dialog from "./components/Dialog";



function App() {
  return (
    <>
      <ContactContextProvider>
        <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
          <Experience />
        </Canvas>
        <Dialog />
      </ContactContextProvider>
    </>
  )
}

export default App
