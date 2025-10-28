// Small animation after loading the page
document.addEventListener("DOMContentLoaded", () => {
  const thankyouBox = document.querySelector(".thankyou-container");
  thankyouBox.style.opacity = 0;
  thankyouBox.style.transform = "translateY(20px)";

  setTimeout(() => {
    thankyouBox.style.transition = "all 0.6s ease";
    thankyouBox.style.opacity = 1;
    thankyouBox.style.transform = "translateY(0)";
  }, 200);
});
