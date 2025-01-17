// Manejar el formulario
document.getElementById("create-category-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const categoryName = document.getElementById("category").value;

  const response = await Api('POST',`categories`, { name: categoryName });
  if (response) {
      document.getElementById("message_success").classList.remove("hidden");
  }
});