// Simple interaction for read-more links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".read-more");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      alert("This will redirect to the full blog post page (coming soon).");
    });
  });
});
