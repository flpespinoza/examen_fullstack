const API_CONFIG = {
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
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
    
    if(!response.ok){
      throw new Error(response.statusText);
    }

    const responseData = await response.json();
    return responseData
  } catch (error) {
      console.error(error);
  }
}