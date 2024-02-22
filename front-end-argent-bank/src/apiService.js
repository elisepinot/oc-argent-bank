const BASE_URL = 'http://localhost:3001/api/v1';

export const fetchUserLogin = async (email, password) => {
  const response = await fetch(`${BASE_URL}/user/login`, {
    //La requête est une requête POST. Si rien de spécifier, méthode GET par défaut. Pour tout autre requête, il faut indiquer son type dans les options
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
    throw new Error('Problème de connexion');
  }

  const data = await response.json();
  return data;
};

export const logout = () => {
  // La logique de déconnexion peut être gérée ici si nécessaire
  // Par exemple, appeler une API de déconnexion, etc.
};
