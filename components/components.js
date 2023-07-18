// navbar.js
// import using the ?raw a vite function to import the html file as a string
import navTpl from "./navbarComponent.html?raw";
import {loadTpl} from "../helper.js";
customElements.define('navbar-component', loadTpl(navTpl));
