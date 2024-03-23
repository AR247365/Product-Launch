import React, { useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { Environment, Loader, OrbitControls } from "@react-three/drei"
import Overlay from "./Overlay"
import Model from "./Model"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [modelPosition, setModelPosition] = useState({ x: 1.5, y: 0, z: 0 }) // Initial position
  const [enablePresentationControls, setEnablePresentationControls] =
    useState(false)

  // Function to update the position
  const updateModel = (newPosition) => {
    setModelPosition(newPosition)
  }

  return (
    <>
      <main>
        <div className="h-screen w-full fixed top-0 z-10 ">
          <Suspense fallback={<Loader />}>
            <Canvas
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [0, 3, 6],
              }}
            >
              <Environment files="./src/assets/environment.hdr" />
              <Model
                position={modelPosition}
                enablePresentationControls={enablePresentationControls}
              />
            </Canvas>
          </Suspense>
        </div>

        <Overlay
          updateModel={updateModel}
          setEnablePresentationControls={setEnablePresentationControls}
        />
      </main>
    </>
  )
}
