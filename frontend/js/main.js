// Listener para cuando se cargue la página
document.addEventListener('DOMContentLoaded', async() => {
  const productTableBody = document.querySelector('table tbody');
  
  // Función para mostrar un producto en la tabla
  const renderProduct = (product) => {
    return `
      <tr class="bg-white border-b hover:bg-gray-50">
        <th scope="row" class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap">
          ${product.name}
        </th>
        <td class="px-6 py-4">
          ${product.stock}
        </td>
        <td class="px-6 py-4">
          ${product.category}
        </td>
        <td class="px-6 py-4 text-right">
          <div class="flex items-center space-x-3 justify-end">
            <a href="#" class="hover:text-blue-600" 
               data-product-id="${product.id}"
               onclick="editProduct(${product.id})"
               aria-label="Editar stock">&#9998;</a>
            <a href="#" class="hover:text-red-600"
               data-product-id="${product.id}"
               onclick="deleteProduct(${product.id})"
               aria-label="Eliminar producto">&#10006;</a>
          </div>
        </td>
      </tr>
    `;
  };

  // Función para mostrar mensaje de error o tabla vacía
  const renderEmptyOrError = (message) => {
    return `
      <tr class="bg-white border-b">
        <td colspan="4" class="px-6 py-4 text-center text-gray-500">
          ${message}
        </td>
      </tr>
    `;
  };

  // Función para cargar y mostrar los productos
  const loadProducts = async () => {
    try {
      // Obtener productos de la API
      const response = await Api('GET', 'products');
      if (response.success && response.data) {
        // Si hay productos, renderizarlos
        if (response.data.length > 0) 
        {
          const productsHtml = response.data.map(product => renderProduct(product)).join('');
          productTableBody.innerHTML = productsHtml;
        } 
        else {
          // Si no hay productos, mostrar mensaje
          productTableBody.innerHTML = renderEmptyOrError('No hay productos disponibles');
        }
      } 
      else {
        productTableBody.innerHTML = renderEmptyOrError('Error al cargar los productos');
      }
    } catch (error) {
      console.error('Error:', error);
      productTableBody.innerHTML = renderEmptyOrError('Error al cargar los productos');
    }
  };

  // Cargar productos al iniciar
  await loadProducts();
});