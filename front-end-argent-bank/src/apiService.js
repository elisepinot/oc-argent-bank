//Api service : on traite les fonctions de connexion à la BDD dans un autre fichier / fichier à part

const BASE_URL = 'http://localhost:3001/api/v1';

//API call to authenticate the user
export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/user/login`, {
    //La requête est une requête POST. Si rien de spécifié, méthode GET par défaut. Pour tout autre requête, il faut indiquer son type dans les options
    method: 'POST',
    headers: {
      //J'indique au serveur que les données envoyées sont en JSON
      'Content-Type': 'application/json',
    },
    //Dans le body, j'indique les données à envoyer
    //J'utilise la méthode stringify pour convertir l'objet en une chaine de caractères JSON
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(`Login failed: user not found. Status code: ${response.status}`);
  }

  //J'utilise la méthode json pour convertir la chaine de caractères JSON en objet JavaScript
  const data = await response.json();
  return data;
};

//API call to fetch user profile: returns id, email, firstName, lastName, createdAt, updatedAt
export const fetchUserProfile = async (token) => {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Problème de connexion');
  }
  const data = await response.json();
  return data;
};

//API call to update user profile: firstName and lastName
export const updateUserProfile = async (token, firstName, lastName) => {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ firstName, lastName }),
  });
  if (!response.ok) {
    throw new Error(`Les données n'ont pas pu être mises à jour.`);
  }
  const data = await response.json();
  return data;
};
