// Ajout d'une fonction utilitaire pour les requêtes fetch
async function makeFetchRequest(url, method, headers = {}, body = null) {
    const config = {
      method,
      headers,
    };
    if (body) {
      config.body = JSON.stringify(body);
    }
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
  
  // Utilisation de la fonction utilitaire dans logUser
  export async function logUser(email, password) {
    const userToken = await makeFetchRequest(`${process.env.REACT_APP_API_URL}/user/login`, "POST", {
      "Content-Type": "application/json",
    }, { email, password });
    return userToken.body.token;
  }
  
  // Appliquer des modifications similaires pour fetchUserProfil et changeUsername
  export async function fetchUserProfil(token) {
    const userProfile = await makeFetchRequest(`${process.env.REACT_APP_API_URL}/user/profile`, "POST", {
      "Authorization": `Bearer ${token}`,
    });
    return userProfile.body;
  }
  
  export async function changeUsername(newUserName, token) {
    const updatedUser = await makeFetchRequest(`${process.env.REACT_APP_API_URL}/user/profile`, "PUT", {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }, { userName: newUserName });
    return updatedUser;
  }