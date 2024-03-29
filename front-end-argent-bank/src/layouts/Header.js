import { NavLink } from 'react-router-dom';
import logoArgentBank from '../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/authSlice';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userFirstName = useSelector((state) => state.userProfile.firstName);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/');
  };

  return (
    <header>
      <nav className='main-nav'>
        <NavLink className='main-nav-logo' to='/'>
          <img className='main-nav-logo-image' src={logoArgentBank} alt='Argent Bank Logo' />
          <h1 className='sr-only'>Argent Bank</h1>
        </NavLink>
        <div className='login'>
          {isAuthenticated ? (
            <>
              <NavLink className='main-nav-item user' to='/user'>
                <FontAwesomeIcon icon={faUserCircle} className='fa fa-user-circle' />
                {userFirstName}
              </NavLink>
              <NavLink className='main-nav-item' to='/signin' onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} /> SignOut
              </NavLink>
            </>
          ) : (
            <NavLink className='main-nav-item' to='/signin'>
              <FontAwesomeIcon icon={faUserCircle} className='fa fa-user-circle' />
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
