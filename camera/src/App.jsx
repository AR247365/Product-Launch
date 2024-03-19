import {
  Environment,
  OrbitControls,
  ScrollControls,
  useGLTF,
} from "@react-three/drei"
import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"

function App() {
  const camera = useGLTF("./src/assets/camera.glb")
  const ref = useRef()
  const tl = useRef()

  useLayoutEffect(() => {
    tl.current = gsap.timeline()

    tl.current.to(ref.current.rotation, { duration: 2, y: -4 })
  }, [])
  return (
    <>
      <OrbitControls makeDefault enableZoom={false} />
      <Environment files="./src/assets/environment.hdr" />

      <directionalLight intensity={5} position={[-0.5, 0.1, 0]} />
      <ambientLight intensity={5} />

      <ScrollControls pages={5} damping={0.25}>
        <primitive
          ref={ref}
          object={camera.scene}
          scale={2}
          rotation={[0, 2, 0]}
        />
      </ScrollControls>
    </>
  )
}

export default App
// useGLTF.preload("./src/assets/camera.glb")
