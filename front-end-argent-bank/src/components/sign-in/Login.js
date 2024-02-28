import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../features/authThunk';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/user');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Trigger le thunk qui gère le call API pour vérifier les identifiants
      dispatch(loginThunk({ email, password }));
    } catch (error) {
      // Gérer les erreurs de requête
      console.error('Erreur lors de la soumission du formulaire de connexion :', error);
    }
  };

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
