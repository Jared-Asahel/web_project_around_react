import logo from "../../imagenes/Vector.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logotipo" className="header__logo" />
      <div className="header__line"></div>
    </header>
  );
};

export default Header;
