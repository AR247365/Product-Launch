import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { Environment, OrbitControls } from "@react-three/drei"
import Overlay from "./Overlay"
import Model from "./Model"
import { Canvas } from "@react-three/fiber"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <>
      <main className="">
        <div className="h-screen w-full fixed top-0 z-10  ">
          <Canvas
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [0, 3, 6],
            }}
          >
            {/* <OrbitControls
              makeDefault
              enableZoom={false}
              enableRotate={false}
              enablePan={false}
            /> */}

            <Environment files="./src/assets/environment.hdr" />

            <Model />
          </Canvas>
        </div>

        <Overlay />
      </main>
    </>
  )
}
