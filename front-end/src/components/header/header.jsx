
import logo from './../../../designs/img/argentBankLogo.png';
import './header.scss';



const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <img src={logo} alt="Argent Bank Logo" className="header__logo" />
        <h1 className="header__title">Argent Bank   class header </h1>
      </div>
    </header>
  );
}
export default Header;
