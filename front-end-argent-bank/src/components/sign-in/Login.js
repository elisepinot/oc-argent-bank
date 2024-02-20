import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/authSlice';
import { redirect } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectUser, setRedirectUser] = useState(false); // État pour la redirection
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envoyer une requête POST à l'API de login avec fetch
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // Gérer les cas où la requête échoue (par exemple, problème de réseau ou d'authentification)
        throw new Error('Erreur lors de la connexion');
      }

      const data = await response.json();

      // Si la requête est réussie, mettre à jour l'état d'authentification dans Redux
      dispatch(login(data.token));

      // Rediriger l'utilisateur vers la page User
      setRedirectUser(true);
    } catch (error) {
      // Gérer les erreurs de requête
      console.error('Erreur lors de la soumission du formulaire de connexion :', error);
      // Afficher un message d'erreur à l'utilisateur si nécessaire
    }

    // Si l'état de redirection est vrai, rediriger l'utilisateur vers la page User
    if (redirectUser) {
      return redirect('/user');
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Envoyer une action Redux pour tenter de se connecter
  //   dispatch(login({ username, password }));
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     // Envoyer une requête POST à l'API de login
  //     const response = await axios.post('http://localhost:3001/api/v1/user/login', {
  //       email,
  //       password,
  //     });

  //     // Si la requête est réussie, mettre à jour l'état d'authentification dans Redux
  //     dispatch(login(response.data.token));

  //     // Rediriger l'utilisateur vers la page User (vous devez implémenter cette fonctionnalité)
  //     // history.push('/user');
  //   } catch (error) {
  //     // Gérer les erreurs de requête
  //     console.error('Erreur lors de la soumission du formulaire de connexion :', error);
  //     // Afficher un message d'erreur à l'utilisateur si nécessaire
  //   }
  // };

  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <FontAwesomeIcon
          icon={faUserCircle}
          className='fa fa-user-circle sign-in-icon'
        ></FontAwesomeIcon>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='input-remember'>
            <input type='checkbox' id='remember-me' />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          {/* <a href='./user.html' className='sign-in-button'>
            Sign In
          </a> */}
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          <button type='submit' className='sign-in-button'>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
