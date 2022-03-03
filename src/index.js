import React from "react"
import ReactDOM from "react-dom"
import {App as App} from "./App"
import "./styles.css"

ReactDOM.render(<App />,document.getElementById("root"))


const checkbox = document.getElementById("checkbox")
const nav = document.getElementById("nav")
checkbox.addEventListener('change',()=>{
    document.body.classList.toggle("light-mode")
    nav.classList.toggle("light-mode")
})