import "./TablesInventory.scss";
import searchIcon from "../../assets/icons/search-24px";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router";

function TablesInventory() {
  
  return (
    <main>
      <div className="container">
    <div className="search">
      <div className="search__content">
        <form className="search__form">
          <div className="search__box-wrapper">
            <input className="serach__box" placeholder="Search..."></input>
            <img src={searchIcon} alt="search"/>
          </div>
          <div className="search__btn-wrapper">
            <button>+Add New Item</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </main>
  );
}

export default TablesInventory;