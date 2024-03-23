import { PresentationControls, useGLTF } from "@react-three/drei"
import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

function Model({ position, enablePresentationControls }) {
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
      <PresentationControls
        enabled={enablePresentationControls}
        global={true}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
        polar={[-Math.PI, Math.PI]}
        azimuth={[-Math.PI, Math.PI]}
        speed={2.3}
      >
        <primitive
          ref={ref}
          object={camera.scene}
          scale={2}
          position={[position.x, position.y, position.z]}
          rotation={[-0.3, 2.1, 0]}
        />
      </PresentationControls>
    </>
  )
}

export default Model
// useGLTF.preload("./src/assets/camera.glb")
