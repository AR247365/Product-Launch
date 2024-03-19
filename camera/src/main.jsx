import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { Canvas } from "@react-three/fiber"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [0, 3, 6],
    }}
  >
    <App />
  </Canvas>
)
