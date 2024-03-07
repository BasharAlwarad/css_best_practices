import '../styles/components/header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.gif';

function Header() {
  return (
    <header className='hero'>
      <Link to={'/'}>
        <img src={logo} alt='Logo' className='logo' width='40' height='40' />
      </Link>
      <h1>Welcome to Hannover</h1>
    </header>
  );
}

export default Header;
