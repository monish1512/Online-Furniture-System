document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("testimonial-track");
  const slides = document.querySelectorAll(".testimonial");
  const dotsContainer = document.getElementById("slider-dots");

  let current = 0;
  const total = slides.length;

  // Create navigation dots
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function goToSlide(index) {
    current = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  function nextSlide() {
    current = (current + 1) % total;
    goToSlide(current);
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  }

  setInterval(nextSlide, 4000);
});
