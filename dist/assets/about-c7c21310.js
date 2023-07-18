(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function l(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(n){if(n.ep)return;n.ep=!0;const e=l(n);fetch(n.href,e)}})();const o=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Burger Shop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/menu/">Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/locations/">Locations</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about/">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact/">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;function i(r){return class extends HTMLElement{constructor(){super(),this.innerHTML=r}}}customElements.define("navbar-component",i(o));export{i as l};
