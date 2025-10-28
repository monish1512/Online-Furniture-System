// Initialize Tiny Slider for testimonials
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".testimonial-slider")) {
    tns({
      container: ".testimonial-slider",
      items: 1,
      axis: "horizontal",
      controls: false,
      nav: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 3000,
      speed: 600,
    });
  }
});
