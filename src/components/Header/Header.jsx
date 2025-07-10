import logo from "../../../images/logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Titulo" className="header__image" />
      <img src="./images/Line.png" alt="Linea" className="header__image-line" />
    </header>
  );
}

export default Header;
