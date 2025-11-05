document.addEventListener("DOMContentLoaded", () => {
  // Handle product clicks
  const products = document.querySelectorAll(".product-item");

  products.forEach((item) => {
    item.addEventListener("click", () => {
      const product = {
        title: item.querySelector(".product-title").textContent,
        price: item.querySelector(".product-price").textContent,
        image: item.querySelector(".product-img").getAttribute("src")
      };

      // Save product to localStorage (so cart.html can use it)
      localStorage.setItem("selectedProduct", JSON.stringify(product));

      // Redirect to cart page
      window.location.href = "cart.html";
    });
  });
});
