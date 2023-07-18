// navbar.js
// import using the ?raw a vite function to import the html file as a string
import heroTpl from "./heroLayout.html?raw";
import featureTpl from "./featureLayout.html?raw";
import callToActionTpl from "./callToActionLayout.html?raw";
import footerTpl from "./footerLayout.html?raw";
import {loadTpl} from "../helper.js";
customElements.define('hero-layout', loadTpl(heroTpl));
customElements.define('feature-layout', loadTpl(featureTpl));
customElements.define('call-to-action-layout', loadTpl(callToActionTpl));
customElements.define('footer-layout', loadTpl(footerTpl));
