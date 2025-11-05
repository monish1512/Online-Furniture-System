document.addEventListener("DOMContentLoaded", () => {
  const whyItems = document.querySelectorAll(".why-item");

  // Subtle floating animation on hover
  whyItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-8px)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)";
    });
  });
});
