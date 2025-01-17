const API_CONFIG = {
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

/**
 * Funcion para realizar las peticiones a la API
 * @param {string} httpMethod
 * @param {string} endpoint
 * @param {object} data
 */
const Api = async(httpMethod, endpoint, data = null) =>{
  // Configurar el request
  const requestOpts = {
    method: httpMethod.toUpperCase(),
    headers: API_CONFIG.headers,
  }

  // Realizar la peticion
  try {
    const url = `${API_CONFIG.baseURL}/${endpoint}`;
    if(httpMethod !== 'GET' && data){
      requestOpts.body = JSON.stringify(data);
    }
    const response = await fetch(url, requestOpts);

    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) {
      const errorData = await response.json(); // Obtener datos del error
      const errorMessage = errorData.message || 'Ocurrió un error inesperado.';
      alert(`Error: ${errorMessage}`);
      throw new Error(errorMessage); // Lanza el error para detener el flujo
    }


    const responseData = await response.json();

    console.log(responseData);

    return responseData
  } catch (error) {
      console.log(error);
      throw new Error(errorMessage);
  }
}