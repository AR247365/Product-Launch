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
      x: -3.05,
      y: 0,
      z: 0.5,
      scrollTrigger: {
        trigger: "#perf-sec",
        start: "top bottom",
        end: "top center",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })
    tl.to(ref.current.rotation, {
      x: -0.64,
      y: 2.82,
      z: 0,
      scrollTrigger: {
        trigger: "#perf-sec",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })

    //FROM PERFORMANCE TO POWER
    tl.to(ref.current.rotation, {
      x: 0.36,
      y: 2.3,
      z: 0,
      scrollTrigger: {
        trigger: "#pow-sec",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })
    tl.to(ref.current.position, {
      x: 0.35,
      y: -0.75,
      z: -0.75,
      scrollTrigger: {
        trigger: "#pow-sec",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })

    //FROM POWER TO SMART
    tl.to(ref.current.position, {
      x: -0.65,
      y: -3,
      z: -2.15,
      scrollTrigger: {
        trigger: "#smart-sec",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })
    tl.to(ref.current.rotation, {
      x: -0.65,
      y: 0.64,
      z: 0,
      scrollTrigger: {
        trigger: "#smart-sec",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })

    //FROM SMART TO GALLERY
    tl.to(ref.current.position, {
      x: -2,
      y: 0.85,
      z: 1.2,
      scrollTrigger: {
        trigger: "#gallery",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })
    tl.to(ref.current.rotation, {
      x: -0.36,
      y: 3.36,
      z: 0,
      scrollTrigger: {
        trigger: "#gallery",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        markers: false,
      },
    })
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
