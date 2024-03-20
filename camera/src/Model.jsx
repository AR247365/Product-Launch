import { useGLTF, useScroll } from "@react-three/drei"
import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { useFrame } from "@react-three/fiber"

function Model() {
  const camera = useGLTF("./src/assets/camera.glb")
  const ref = useRef()
  const tl = useRef()
  const scroll = useScroll()
  console.log(scroll)

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline()
    tl.current.to(ref.current.rotation, { duration: 2, y: -4 })
    tl.current.to(ref.current.position, { y: -4 })
    tl.current.to(ref.current.position, { y: 0 })
  })
  return (
    <>
      <primitive
        ref={ref}
        object={camera.scene}
        scale={2}
        rotation={[0, 2, 0]}
      />
    </>
  )
}

export default Model
// useGLTF.preload("./src/assets/camera.glb")
