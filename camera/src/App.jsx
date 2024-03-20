import Model from "./Model"
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei"
import Overlay from "./Overlay"

export default function App() {
  return (
    <>
      <OrbitControls makeDefault enableZoom={false} />

      <Environment files="./src/assets/environment.hdr" />
      <directionalLight intensity={5} position={[-0.5, 0, 0]} />
      <ambientLight intensity={5} />

      <ScrollControls pages={5} damping={0.25}>
        <Model />
        <Overlay />
      </ScrollControls>
    </>
  )
}
