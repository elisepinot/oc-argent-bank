import { NavLink } from 'react-router-dom';
import logoArgentBank from '../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <nav className='main-nav'>
        <NavLink className='main-nav-logo' to='/'>
          <img className='main-nav-logo-image' src={logoArgentBank} alt='Argent Bank Logo' />
          <h1 className='sr-only'>Argent Bank</h1>
        </NavLink>
        <div className='login'>
          <NavLink className='main-nav-item' to='/signin'>
            <FontAwesomeIcon icon={faUserCircle} className='fa fa-user-circle' />
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
