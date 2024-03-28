import { useState } from "react"

export default function Overlay({
  updateModel,
  setEnablePresentationControls,
}) {
  const [isViewing3D, setIsViewing3D] = useState(true)

  const handleClick = () => {
    setIsViewing3D((prev) => !prev)

    const newPosition = isViewing3D
      ? { x: 0, y: 0, z: 0 }
      : { x: -2, y: 0.85, z: 1.2 }

    updateModel(newPosition)
    setEnablePresentationControls((toggle) => !toggle)
    document.body.classList.toggle("overflow-hidden")
  }

  return (
    <>
      <div className="px-14 py-10">
        {/* HERO SECTION */}

        <section className="h-screen">
          <div className="flex flex-row">
            <div className="flex flex-col basis-5/12 ">
              <img src="./logo.png" alt="logo" width="150vw" height="auto" />
              <h1 className="text-9xl font-semibold ">Pro</h1>
              <p className="font-normal text-2xl tracking-tighter pt-2 pl-2">
                Discover our most advanced camera and lens series yet: blazing
                fast AF, incredible low light performance, superb image
                stabilization, sharp image quality, and so much more
              </p>
            </div>
            <div></div>
          </div>
        </section>

        {/* PERFORMANCE SECTION */}
        <section id="perf-sec" className=" h-screen">
          <div className="flex flex-row">
            <div className="basis-2/3"> </div>
            <div className="flex flex-col basis-1/3 ">
              <h1 className="text-7xl font-semibold text-red-700">
                Performance
              </h1>
              <p className="font-normal text-2xl tracking-tighter pt-7">
                The EOS R10 is perfect for content creators looking to take
                their creativity to the next level. Featuring a high-speed
                shooting 15 FPS mechanical shutter1,2, a 24.2 Megapixel CMOS
                (APS-C) sensor, and lightning fast autofocus, the EOS R10 camera
                brings some of the best features from the growing EOS R Series
                to a sleek, lightweight design
              </p>
            </div>
          </div>
        </section>

        {/* POWER SECTION */}
        <section id="pow-sec" className="h-screen">
          <div className="flex flex-row">
            <div className="flex flex-col basis-5/12 ">
              <h1 className="text-7xl font-semibold text-red-700">Power</h1>
              <p className="font-normal text-2xl tracking-tighter ">
                The easy-to-carry EOS R10 packs advanced features into a
                lightweight, compact design. Pair with a Canon RF-S/RF lens for
                a high-performance setup that fits easily and comfortably in
                your hand.
              </p>
            </div>
            <div className="basis-5/12"></div>
            <div className="basis-2/12">
              <img src="./features.png" alt="features" />
            </div>
          </div>
        </section>

        {/* SMART SECTION */}
        <section id="smart-sec" className="h-screen">
          <div className="flex flex-col ">
            <div className="basis-1/3 flex flex-col ">
              <h1 className="text-7xl font-semibold m-auto ">
                Smart <span className="text-red-700">autofocus</span>
              </h1>
              <p className="font-normal text-2xl tracking-tighter  m-auto text-center">
                Canon's Dual Pixel CMOS AF technology with people, animal, and
                vehicle subject detection lets you keep your eye on the action
                while it keeps your subject in crystal clear focus.
              </p>
            </div>
            <div className="basis-2/3"></div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="h-screen relative">
          <div className="h-screen flex flex-row justify-evenly ">
            <div className="basis-1/2"></div>

            <div
              className={`z-50 flex flex-col ${
                isViewing3D ? "" : "absolute bottom-0"
              }`}
            >
              <button className="my-auto" onClick={handleClick}>
                <h1 className="text-7xl font-semibold  text-center mx-auto my-auto">
                  {isViewing3D ? "View " : "Exit "}{" "}
                  <span className="text-red-700">3D</span>
                </h1>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
