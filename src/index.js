import React from "react";
import {createRoot} from "react-dom"
import App from "./App";
import "./index.css"
const el = document.getElementById("root")
const root = createRoot(el)

root.render(
    <App />
)