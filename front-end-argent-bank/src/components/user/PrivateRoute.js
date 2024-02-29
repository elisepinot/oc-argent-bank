import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

//Composant qui permet de restreindre l'accès à la route user (passée en props dans le composant App) si l'utilisateur est authentifié et connecté. Si ce n'est pas le cas, il est redirigé vers la page de connexion
//prop children : permet à un composant de ne pas avoir besoin de savoir ce qu'il va contenir à l'avance
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to='/signin' />;
};

export default PrivateRoute;

//PropTypes : mécanisme qui permet de vérifier les types des props passées à un composant. Utile pour s'assurer que le composant reçoit les données dans le format attendu --> évite les bugs et les comportements imprévus
//PropTypes.node est utilisé pour tout ce qui est "rendable", donc type approprié pour la prop children, car celle-ci peut contenir n'importe quel élément ou composant React.
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
