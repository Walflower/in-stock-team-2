import "./Header.scss";
import logo from "../../assets/logo/InStock-Logo.svg";

export function Header() {
  //TODO: buttons are not linked to pages
  return (
    <header className="header">
      <nav className="header__nav">
        <img className="header__logo" src={logo} alt="instock logo" />
        <div className="header__box">
          <button className="header__button">Warehouses</button>
          <button className="header__button">Inventory</button>
        </div>
      </nav>
    </header>
  );
}
