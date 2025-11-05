document.addEventListener("DOMContentLoaded", () => {

  // ===== Contact Form Validation =====
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    contactForm.reset();
  });
});
