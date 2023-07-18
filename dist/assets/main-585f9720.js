(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function c(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(n){if(n.ep)return;n.ep=!0;const e=c(n);fetch(n.href,e)}})();const l=`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
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
`;function s(i){return class extends HTMLElement{constructor(){super(),this.innerHTML=i}}}customElements.define("navbar-component",s(l));const o=`<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h1>Welcome to Burger Shop</h1>
                <p>Delicious, mouthwatering burgers made with love.</p>
                <a href="/menu/" class="btn btn-secondary">View Menu</a>
            </div>
        </div>
    </div>
</section>
<!-- End of Hero Section -->
`,d=`<!-- Featured Products Section -->
<section class="featured-section my-4">
    <div class="container">
        <h2 class="section-heading">Featured Products</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <img alt="Burger 1"
                         class="card-img-top" src="https://th.bing.com/th/id/OIP.T61kA6G-YyOAF0U30QaJZgHaE8?pid=ImgDet&rs=1">
                    <div class="card-body">
                        <h5 class="card-title">Classic Cheeseburger</h5>
                        <p class="card-text">Our classic cheeseburger made with fresh ingredients.</p>
                        <a class="btn btn-outline-secondary" href="#">Order Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img alt="Burger 1"
                         class="card-img-top" src="https://th.bing.com/th/id/OIP.T61kA6G-YyOAF0U30QaJZgHaE8?pid=ImgDet&rs=1">
                    <div class="card-body">
                        <h5 class="card-title">Classic Cheeseburger</h5>
                        <p class="card-text">Our classic cheeseburger made with fresh ingredients.</p>
                        <a class="btn btn-outline-secondary" href="#">Order Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img alt="Burger 1"
                         class="card-img-top" src="https://th.bing.com/th/id/OIP.T61kA6G-YyOAF0U30QaJZgHaE8?pid=ImgDet&rs=1">
                    <div class="card-body">
                        <h5 class="card-title">Classic Cheeseburger</h5>
                        <p class="card-text">Our classic cheeseburger made with fresh ingredients.</p>
                        <a class="btn btn-outline-secondary" href="#">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`,u=`<!-- Call-to-Action Section -->
<section class="cta-section">
    <div class="container bg-danger text-white py-4 px-4">
        <div class="row">
            <div class="col-md-6">
                <h2>Order Now and Get 20% Off!</h2>
                <p>Use code BURGER20 at checkout for your first order.</p>
            </div>
            <div class="col-md-6">
                <a href="#" class="btn btn-warning btn-lg">Order Now</a>
            </div>
        </div>
    </div>
</section>
`,v=`<!-- Footer -->
<footer class="footer mt-auto py-4 bg-dark text-light">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h5>About Us</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a felis at nulla placerat commodo ac nec odio.</p>
      </div>
      <div class="col-md-4">
        <h5>Opening Hours</h5>
        <ul class="list-unstyled">
          <li>Monday - Friday: 9:00 AM - 10:00 PM</li>
          <li>Saturday - Sunday: 10:00 AM - 11:00 PM</li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5>Contact Us</h5>
        <ul class="list-unstyled">
          <li>Email: info@burgershop.com</li>
          <li>Phone: +1 123-456-7890</li>
          <li>Address: 1234 Burger Street, City, Country</li>
        </ul>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <!-- Add social media icons or links here -->
      </div>
      <div class="col-md-6">
        <p class="text-end">© 2023 Burger Shop. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
`;customElements.define("hero-layout",s(o));customElements.define("feature-layout",s(d));customElements.define("call-to-action-layout",s(u));customElements.define("footer-layout",s(v));
