import './Footer.scss';
import Logo from '../../assets/images/white logo.svg'

function Footer() {
  return (
    <div className="Footer">
      <img src={Logo} alt="kasa logo" />
      <h3>© 2020 Kasa. All rights reserved</h3>
    </div>
  );
}

export default Footer;
