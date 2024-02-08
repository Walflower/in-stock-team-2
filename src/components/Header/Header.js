import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/InStock-Logo.svg";

export function Header() {
  // Get the current page path or use any other method to determine the current page
  const currentPage = window.location.pathname;

  // Function to determine if a button should have active styles
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
