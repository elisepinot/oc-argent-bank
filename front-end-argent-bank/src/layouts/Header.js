import { NavLink } from 'react-router-dom';
import logoArgentBank from '../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/authSlice';
import { fetchUserThunk } from '../features/userProfileThunk';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.user);
  const userFirstName = useSelector((state) => state.userProfile.firstName);
  const userToken = useSelector((state) => state.auth.token);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/signin');
  };
  const fetchData = () => {
    dispatch(fetchUserThunk(userToken));
    console.log(userFirstName);
  };
  // console.log(currentUser);
  return (
    <header>
      <nav className='main-nav'>
        <NavLink className='main-nav-logo' to='/'>
          <img className='main-nav-logo-image' src={logoArgentBank} alt='Argent Bank Logo' />
          <h1 className='sr-only'>Argent Bank</h1>
        </NavLink>
        <button onClick={fetchData}>Récupérer les données</button>
        <div className='login'>
          {currentUser ? (
            <>
              <NavLink className='main-nav-item user' to='/user'>
                <FontAwesomeIcon icon={faUserCircle} className='fa fa-user-circle' />
                {userFirstName}

                {/* {userData && userData.firstName} */}
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
