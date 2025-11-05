document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("#cartItems tr");
  const subtotalElement = document.getElementById("subtotal");

  function updateTotal() {
    let subtotal = 0;
    rows.forEach(row => {
      const price = parseFloat(row.cells[1].textContent.replace("$", ""));
      const qty = parseInt(row.querySelector(".qty").value);
      const total = price * qty;
      row.querySelector(".total").textContent = `$${total.toFixed(2)}`;
      subtotal += total;
    });
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  }

  // Quantity change
  document.querySelectorAll(".qty").forEach(input => {
    input.addEventListener("input", updateTotal);
  });

  // Remove item
  document.querySelectorAll(".remove").forEach(btn => {
    btn.addEventListener("click", e => {
      e.target.closest("tr").remove();
      updateTotal();
    });
  });
});
