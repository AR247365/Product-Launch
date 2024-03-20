import Model from "./Model"
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei"

export default function App() {
  return (
    <>
      <OrbitControls makeDefault enableZoom={false} />

      <Environment files="./src/assets/environment.hdr" />

      <ScrollControls pages={5} damping={0.25}>
        <Model />
      </ScrollControls>
    </>
  )
}
