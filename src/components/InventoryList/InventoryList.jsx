// import searchIcon from "../../assets/icons/search-24px.svg";
// import arrowDropDown from "../../assets/icons/arrow_drop_down-24px.svg";
// import arrowBack from "../../assets/icons/arrow_back-24px.svg";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router";
import "./InventoryList.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronRightIcon from "../../assets/icons/chevron_right-24px.svg";

function InventoryList() {
  return (
    <main>
      <div className="container">
        <div className="inventory">
          <div className="inventory-tablet">
            <ul className="inventory__row-tablet inventory__titles-wrapper">
              <li className="inventory__title-container">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">INVENTORY ITEM</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>

              <li className="inventory__title-container">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">CATEGORY</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>

              <li className="inventory__title-container">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">STATUS</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>

              <li className="inventory__title-container">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">QUANTITY</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>

              <li className="inventory__title-container">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">WAREHOUSE</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>

              <li className="inventory__title-container">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">ACTIONS</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>
            </ul>

            <ul className="inventory__row-tablet inventory__item-tablet">
              <li className="inventory__info-tablet">
                <p className="inventory__detail-tablet inventory__detail--link-tablet">
                  Television
                </p>
              </li>

              <li className="inventory__info-tablet">
                <p className="inventory__detail-tablet">Electronics</p>
              </li>

              

              <li className="inventory__info-tablet inventory__info-tag-tablet">
                <p className="inventory__detail-tablet   inventory__detail-tag-tablet">
                  IN STOCK
                </p>
              </li>

              <li className="inventory__info-tablet">
                <p className="inventory__detail-tablet">500</p>
              </li>
              <li className="inventory__info-tablet">
                <p className="inventory__detail-tablet">Washington</p>
              </li>

              <li className="inventory__info-tablet inventory__actions-tablet">
                <div className="inventory__del-wrapper-tablet">
                  <img
                    className="invenory__del-tablet"
                    src={deleteIcon}
                    alt="drop down"
                  />
                </div>
                <div className="inventory__edit-wrapper-tablet">
                  <img className="invenory__edit-tablet" src={editIcon} />
                </div>
              </li>
            </ul>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="inventory__container">
            <section className="inventory__list">
              <ul className="inventory__item">
                <div className="inventory__left">
                  <li className="inventory__info">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">INVENTORY ITEM</h4>
                    </div>
                    {/* <div className="inventory__detail-wrapper"> */}
                    <div className="inventory__detail-content">
                      <p className="inventory__detail inventory__detail--link">
                        Television
                      </p>
                    </div>
                    {/* <div className="inventory__detail-content">
              <img className="inventory__detail" src={chevronRightIcon} alt="sort"/>
            </div> */}
                    {/* </div> */}
                  </li>

                  <li className="inventory__info">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">CATEGORY</h4>
                    </div>
                    <div className="inventory__detail-wrapper">
                      <p className="inventory__detail">Electronics</p>
                    </div>
                  </li>
                </div>

                <div className="inventory__right">
                  <li className="inventory__info inventory__info-tag">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">STATUS</h4>
                    </div>
                    <div className="inventory__detail-wrapper">
                      <p className="inventory__detail   inventory__detail-tag">
                        IN STOCK
                      </p>
                    </div>
                  </li>

                  <li className="inventory__info">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">QTY</h4>
                    </div>
                    <div className="inventory__detail-wrapper">
                      <p className="inventory__detail">500</p>
                    </div>
                  </li>

                  <li className="inventory__info">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">WAREHOUSE</h4>
                    </div>
                    <div className="inventory__detail-wrapper">
                      <p className="inventory__detail">Manhattan</p>
                    </div>
                  </li>
                </div>
              </ul>

              <div className="inventory__actions">
                <div className="inventory__del-wrapper">
                  <img
                    className="invenory__del"
                    src={deleteIcon}
                    alt="drop down"
                  />
                </div>
                <div className="inventory__edit-wrapper">
                  <img className="invenory__edit" src={editIcon} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default InventoryList;
