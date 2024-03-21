import { useGLTF } from "@react-three/drei"
import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"

import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

function Model() {
  const camera = useGLTF("./src/assets/camera.glb")

  const ref = useRef()
  const tl = gsap.timeline()

  useLayoutEffect(() => {
    new ScrollTrigger({})

    //FROM HERO TO PERFORMANCE
    tl.to(ref.current.position, {
      x: -2.9,
      y: 0.5,
      z: 0.8,
      scrollTrigger: {
        trigger: "#perf-sec",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: true,
      },
    })
    tl.to(
      ref.current.rotation,
      {
        x: 0.5,
        y: 2.9,
        scrollTrigger: {
          trigger: "#perf-sec",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          markers: true,
        },
      },
      0
    )
  }, [])

  return (
    <>
      <primitive
        ref={ref}
        object={camera.scene}
        scale={2}
        position={[1.5, 0, 0]}
        rotation={[-0.3, 2.1, 0]}
      />
    </>
  )
}

export default Model
// useGLTF.preload("./src/assets/camera.glb")
