// ================= DOM READY =================
document.addEventListener("DOMContentLoaded", function () {

  /* ================= NAVBAR MOBILE TOGGLE ================= */
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  const navbar = document.querySelector(".navbar .nav-container");
  if (navbar) navbar.appendChild(menuToggle);

  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });

  /* ================= TINY SLIDER INITIALIZATION ================= */
  if (typeof tns === "function" && document.querySelector(".testimonial-slider")) {
    tns({
      container: ".testimonial-slider",
      items: 1,
      slideBy: "page",
      autoplay: true,
      autoplayTimeout: 4000,
      controls: false,
      nav: true,
      navPosition: "bottom",
      speed: 600,
      autoplayButtonOutput: false
    });
  }

  /* ================= NEWSLETTER FORM ================= */
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector("input[type='email']").value.trim();

      if (email === "") {
        alert("⚠️ Please enter a valid email address.");
        return;
      }

      alert(`✅ Thank you for subscribing, ${email}!`);
      this.reset();
    });
  }

  /* ================= FADE-IN ANIMATION ON SCROLL ================= */
  const fadeEls = document.querySelectorAll(
    ".hero-text, .product-item, .why-text, .interior-text, .feature, .blog-item"
  );
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  fadeEls.forEach((el) => fadeObserver.observe(el));
});

/* ================= SIMPLE ANIMATION STYLES ================= */
const style = document.createElement("style");
style.textContent = `
  .hero-text, .product-item, .why-text, .interior-text, .feature, .blog-item {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }
  .visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  .menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-left: 1rem;
  }
  .menu-toggle span {
    background: #fff;
    height: 3px;
    width: 25px;
    margin: 4px 0;
    border-radius: 2px;
  }
  .menu-toggle.open span:nth-child(1) {
    transform: rotate(45deg) translateY(8px);
  }
  .menu-toggle.open span:nth-child(2) {
    opacity: 0;
  }
  .menu-toggle.open span:nth-child(3) {
    transform: rotate(-45deg) translateY(-8px);
  }
  @media (max-width: 768px) {
    .menu-toggle { display: flex; }
    .nav-links {
      display: none;
      flex-direction: column;
      background: #000;
      position: absolute;
      top: 65px;
      right: 0;
      width: 100%;
      text-align: center;
      padding: 1rem 0;
      gap: 1rem;
      transition: 0.3s;
    }
    .nav-links.active {
      display: flex;
    }
  }
`;
document.head.appendChild(style);
