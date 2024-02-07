import "./Header.scss";
import logo from "../../assets/logo/InStock-Logo.svg";

function Header() {
  //TODO: buttons are not linked to pages
  return (
    <header className="header">
      <nav className="header__nav">
        <img className="header__logo" src={logo} alt="instock logo" />
        <div>
          <button className="header__button">Warehouses</button>
          <button className="header__button">Inventory</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
