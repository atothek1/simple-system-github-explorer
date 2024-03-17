import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./components"

const rootNode = document.getElementById("root")!;
createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
