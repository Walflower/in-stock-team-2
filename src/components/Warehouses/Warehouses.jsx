// home page, houseing the warehouse list
import WarehouseDetails from "../WarehouseDetails/WarehouseDetails";
import "./Warehouses.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

export function Warehouses() {
  const { REACT_APP_API_BASE_PATH } = process.env;
  const [warehouseList, setWarehouseList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWarehouseList = async () => {
    try {
      // const res = await axios.get(`${REACT_APP_API_BASE_PATH}/inventories`);
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
      <section className="warehouses__header--landing">
        <h1>Warehouses</h1>

        <input className="warehouses__input" placeholder="Search..."></input>
        <Link to="/warehouse-add">
              <button className="inventorylist__add">Add New Warehouse</button>
            </Link>
      </section>

      {!loading && warehouseList && warehouseList.length > 0 && (
        <>
          {warehouseList.map((warehouse) => (
            <div className="warehouses__container--landing" key={warehouse.id}>
              <Link to={`/${warehouse.id}`}>
                <p className="inventory__detail-tablet inventory__detail--link-tablet">{warehouse.warehouse_name}</p>
              </Link>
              <div className="warehouses__subcontainer--landing">
                <div>
                  <p className="info__detail">{warehouse.address}</p>
                  <p className="info__detail">{warehouse.city}</p>
                  <p className="info__detail">{warehouse.country}</p>
                </div>

                <div>
                  <p className="info__detail">{warehouse.contact_name}</p>
                </div>

                <div>
                  <p className="info__detail">{warehouse.contact__phone}</p>
                  <p className="info__detail">{warehouse.contact__email}</p>
                </div>

                <div>
                  <img className="" src={deleteIcon} alt=""></img>
                  <img className="" src={editIcon} alt=""></img>
                </div>

              </div>
            
            </div>
          ))}
        </>
      )}
    </>
  );
}
