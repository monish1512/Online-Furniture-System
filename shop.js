// Example Add to Cart interaction
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Item added to cart!");
    });
  });
});
