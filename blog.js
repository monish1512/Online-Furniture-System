document.addEventListener("DOMContentLoaded", () => {
  // ===== Read More =====
  document.querySelectorAll(".read-more").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Full blog post coming soon!");
    });
  });

  // ===== Testimonial Slider =====
  const testimonials = document.querySelectorAll(".testimonial");
  let current = 0;

  const showTestimonial = (index) => {
    testimonials.forEach((t) => t.classList.remove("active"));
    testimonials[index].classList.add("active");
  };

  document.getElementById("next").addEventListener("click", () => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  });

  document.getElementById("prev").addEventListener("click", () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
  });

  setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 5000);
});
