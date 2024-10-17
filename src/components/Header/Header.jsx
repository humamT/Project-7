import './Header.scss';
import Logo from '../../assets/images/LOGO.svg'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <div className="Header">
      <h1>
        <img src={Logo} alt="kasa, location d'appartements" />
      </h1>
      <Navbar />
    </div>
  );
}

export default Header;