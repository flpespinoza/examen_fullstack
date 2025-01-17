document.addEventListener("DOMContentLoaded", async () => {
  // Obtener el ID del producto desde la URL
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');

  if (!productId) {
      alert("No se especificó un producto para editar.");
      window.location.href = "index.html"; // Redirige si no hay ID
      return;
  }

  // Precargar información del producto (opcional)
  const product = await Api(`GET`, `products/${productId}`);
  if (product) {
      document.getElementById("product_id").value = product.id;
      document.getElementById("product_name").value = product.name;
      document.getElementById("product_stock").value = product.stock; // Mostrar el stock actual
      document.getElementById("product_category").value = product.category;
  }
});

// Manejar el formulario
document.getElementById("edit-stock-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const productId = document.getElementById("product_id").value;
  const newStock = document.getElementById("product_stock").value;

  const response = await Api('PUT',`products/${productId}`, { stock: newStock });
  if (response) {
      alert("Stock actualizado correctamente.");
      window.location.href = "index.html"; // Redirige a la página principal
  }
});