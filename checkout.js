// Simulate form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkoutForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!name || !email || !address) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Thank you for your purchase, " + name + "! Redirecting to the thank you page...");
    window.location.href = "thankyou.html";
  });
});
