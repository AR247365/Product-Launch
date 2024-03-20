import { Scroll } from "@react-three/drei"

export default function Overlay() {
  return (
    <>
      <Scroll html>
        <div className="px-14 py-12">
          {/* HERO SECTION */}

          <section className="h-screen">
            <div className="flex flex-row">
              <div className="flex flex-col basis-5/12 ">
                <img
                  src="./src/assets/logo.png"
                  alt="logo"
                  width="150vw"
                  height="auto"
                />
                <h1 className="text-9xl font-semibold ">Pro</h1>
                <p className="font-normal text-lg tracking-tighter pt-3">
                  Discover our most advanced camera and lens series yet: blazing
                  fast AF, incredible low light performance, superb image
                  stabilization, sharp image quality, and so much more
                </p>
              </div>
              <div></div>
            </div>
          </section>

          {/* PERFORMANCE SECTION */}
          <section className="h-screen">
            <h1>PERFORMANCE</h1>
          </section>

          {/* POWER SECTION */}
          <section className="h-screen">
            <h1>POWER</h1>
          </section>

          {/* SMART SECTION */}
          <section className="h-screen">
            <h1>SMART</h1>
          </section>

          {/* GALLERY SECTION */}
          <section className="h-screen">
            <h1>GALLERY</h1>
          </section>
        </div>
      </Scroll>
    </>
  )
}
