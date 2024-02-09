import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/InStock-Logo.svg";

export function Header() {
  
  const currentPage = window.location.pathname;

  //TODO: isActive is not working on the new routes. Need to fix
  const isActive = (page) => currentPage === page;
 
  return (
    <header className="header">
      <nav className="header__nav">
        <img className="header__logo" src={logo} alt="instock logo" />
        <div className="header__box">
          <NavLink
            to="/"
            className={`header__button ${
              isActive("/warehouses") ? "active" : ""
            }`}
          >
            Warehouses
          </NavLink>
          <NavLink
            to="/inventory-list"
            className={`header__button ${
              isActive("/inventory") ? "active" : ""
            }`}
          >
            Inventory
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
