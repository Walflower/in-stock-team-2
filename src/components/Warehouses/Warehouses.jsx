
import "./Warehouses.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import sortIcon from "../../assets/icons/sort-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

export function Warehouses() {
  const { REACT_APP_API_BASE_PATH } = process.env;
  const [warehouseList, setWarehouseList] = useState([]);
  const [loading, setLoading] = useState(true);
const {warehouseId}= useParams()

  const fetchWarehouseList = async () => {
    try {
      const res = await axios.get("http://localhost:8080/warehouses");
      console.log(res.data);
      setWarehouseList(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchWarehouseList();
  }, []);

  return (
    <>
      <section className="section__large">
        <div className="large">
        <h1 className="large__title">Warehouses</h1>

        <div className="large__box">
          <input className="large__search" placeholder="search..."/>
          <Link to="/warehouse-add">
                <button className="large__add">Add New Warehouse</button>
              </Link>
              </div>
          </div>
      </section>

  

          {/**.................................. */}

          <main>
      <div className="inventory-container">
        <div className="inventory">
          <div className="inventory-tablet">
            <ul className="inventory__row-tablet inventory__titles-wrapper">
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
                  <h4 className="inventory__title">ADDRESS</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>

              <li className="inventory__title-container inventory__title-status">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">CONTACT NAME</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>

              <li className="inventory__title-container">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">CONTACT INFORMATION</h4>
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

{/*............................LIST..........................................*/}
            {warehouseList.map((warehouse) => {
              return(<ul key={warehouse.id} className="inventory__row-tablet inventory__item-tablet">
              <li className="inventory__info-tablet">
                <Link to={`/${warehouse.id}`} className="inventory__detail-tablet inventory__detail--link-tablet">
                  {warehouse.warehouse_name}
                </Link>
              </li>

              <li className="warehouse__list-address inventory__info-tablet">
                <p className="inventory__detail-tablet">{warehouse.address}</p>
                <p className="inventory__detail-tablet">{warehouse.city}, {warehouse.country}</p> 
               
              </li>
              

              <li className="inventory__info-tablet inventory__info-tag-tablet">

              <p className="inventory__detail-tablet">{warehouse.contact_name}</p>
               
              </li>

              <li className="warehouse__list-contact inventory__info-tablet">
                <p className="inventory__detail-tablet">{warehouse.contact_phone}</p>
                <p className="inventory__detail-tablet">{warehouse.contact_email}</p> 
               
              </li>

             

              <li className="inventory__info-tablet inventory__actions-tablet">
                <Link  to={`/${warehouse.id}/delete-warehouse`}  className="inventory__del-wrapper-tablet">
                  <img
                    className="invenory__del-tablet"
                    src={deleteIcon}
                    alt="drop down"
                  />
                </Link>
                <Link  to={`/${warehouse.id}/edit`}  className="inventory__edit-wrapper-tablet">
                  <img className="invenory__edit-tablet" src={editIcon} />
                </Link>
              </li>
            </ul>
            );
          })}
        </div>
{/**..................................................................................... */}
        {/* mobile */}
        <div className="inventory__container">
        {warehouseList.map((warehouse) => {
            return (<section key={warehouse.id} className="inventory__list">
              <ul className="inventory__item inventory__item--mobile">
                <div className="inventory__left">
                  <li className="inventory__info">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">WAREHOUSE</h4>
                    </div>
                    <div className="inventory__detail-content">
                    <Link to={`/${warehouse.id}`} className="inventory__detail inventory__detail--link">
                      {warehouse.warehouse_name}
                      </Link>
                    </div>
                  </li>

                  <li className="inventory__info">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">ADDRESS</h4>
                    </div>
                    <div className="inventory__detail-wrapper">
                      <p className="inventory__detail">{warehouse.address}, </p>
                      <p className="inventory__detail">{warehouse.city}, {warehouse.country}</p> 
                    </div>
                  </li>
                </div>

                <div className="inventory__right">
                  <li className="inventory__info inventory__info-tag">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">CONTACT NAME</h4>
                    </div>
                    <div className="inventory__detail-wrapper">
                    <p className="inventory__detail">{warehouse.contact_name}</p>
                    </div>
                  </li>

                  <li className="inventory__info">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">CONTACT INFORMATION</h4>
                    </div>
                    <div className="inventory__detail-wrapper">
                      <p className="inventory__detail">{warehouse.contact_phone}</p>
                      <p className="inventory__detail">{warehouse.contact_email}</p>
                    </div>
                  </li>
                 
                </div>
              </ul>

              <div className="inventory__actions">
                <Link  to={`/${warehouse.id}/delete-warehouse`} className="inventory__del-wrapper">
                  <img
                    className="invenory__del"
                    src={deleteIcon}
                    alt="drop down"
                  />
                </Link>
                <Link to={`/${warehouse.id}/edit`}  className="inventory__edit-wrapper">
                  <img className="invenory__edit" src={editIcon} />
                </Link>
              </div>
            </section>
             );
            })}
          </div>
        </div>
</div>
</main>
</>
)
}
