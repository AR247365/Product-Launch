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
  const [enableZoom, setEnableZoom] = useState(false)
  const [enableRotate, setEnableRotate] = useState(false)

  const toggleZoomAndRotate = () => {
    setEnableZoom((prev) => !prev)
    setEnableRotate((prev) => !prev)
  }

  return (
    <>
      <main className="">
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
              {/* Pass state variables as props to OrbitControls */}
              <OrbitControls
                enableZoom={enableZoom}
                enableRotate={enableRotate}
                enablePan={false}
              />

              <Environment files="./src/assets/environment.hdr" />
              <Model />
            </Canvas>
          </Suspense>
        </div>

        <Overlay toggleZoomAndRotate={toggleZoomAndRotate} />
      </main>
    </>
  )
}

// import gsap from "gsap"
// import ScrollTrigger from "gsap/dist/ScrollTrigger"
// import { Environment, Loader, OrbitControls } from "@react-three/drei"
// import Overlay from "./Overlay"
// import Model from "./Model"
// import { Canvas } from "@react-three/fiber"
// import { Suspense } from "react"

// gsap.registerPlugin(ScrollTrigger)

// export default function App() {
//   return (
//     <>
//       <main className="">
//         <div className="h-screen w-full fixed top-0 z-10  ">
//           <Suspense fallback={<Loader />}>
//             <Canvas
//               camera={{
//                 fov: 45,
//                 near: 0.1,
//                 far: 200,
//                 position: [0, 3, 6],
//               }}
//             >
//               <OrbitControls
//                 makeDefault
//                 enableZoom={false}
//                 enableRotate={false}
//                 enablePan={false}
//               />

//               <Environment files="./src/assets/environment.hdr" />
//               <Model />
//             </Canvas>
//           </Suspense>
//         </div>

//         <Overlay />
//       </main>
//     </>
//   )
// }
