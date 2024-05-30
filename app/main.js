// Import our custom CSS
import "../src/scss/style.scss"
import { App } from "./App"

// Import all of Bootstrap's JS

import * as bootstrap from "bootstrap"

document.addEventListener("DOMContentLoaded", App)
window.addEventListener("hashchange", App)
