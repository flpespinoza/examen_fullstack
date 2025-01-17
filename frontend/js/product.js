// Listener para cuando se cargue la página
document.addEventListener('DOMContentLoaded', async() => {
  const categorySelect = document.getElementById('category');
  
  // Función para mostrar un producto en la tabla
  const renderCategory = (category) => {
    return `
      <option value="${category.id}">${category.name}</option>
    `;
  };

  // Función para cargar y mostrar los productos
  const loadCategories = async () => {
    try {
      // Obtener productos de la API
      const response = await Api('GET', 'categories');
      if (response.success && response.data) {
        // Si hay productos, renderizarlos
        if (response.data.length > 0) 
        {
          const categoriesHtml = response.data.map(category => renderCategory(category)).join('');
          categorySelect.innerHTML = categoriesHtml;
        }
      } 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Cargar productos al iniciar
  await loadCategories();
});

// Manejar el formulario
document.getElementById("create-product-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const productName = document.getElementById("product_name").value;
  const productStock = document.getElementById("product_stock").value;
  const categoryId = document.getElementById("category").value;

  const response = await Api('POST',`products`, { name: productName, stock: productStock, category_id: categoryId });
  if (response) {
      alert("Producto creado correctamente.");
  }
});