// this will be the main inventory list
import "./Inventories.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InventoryList from "./InventoryList";
import search from "../../assets/icons/search-24px.svg";

export function Inventories() {
  const { REACT_APP_API_BASE_PATH } = process.env;
  const [inventoryList, setInventoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInventoryList = async () => {
    try {
  
      const res = await axios.get("http://localhost:8080/inventories");
      setInventoryList(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInventoryList();
  }, []);

  return (
    <>
         <section className="section__large">
        <div className="large">
        <h1 className="large__title">Inventory</h1>

        <div className="large__box">
          <input className="large__search" placeholder="search..."/>
          <Link to="/inventory-list/add">
                <button className="large__add">Add New Item</button>
              </Link>
              </div>
          </div>
      </section>

      {!loading && inventoryList && inventoryList.length > 0 && (
            <InventoryList inventoryList={inventoryList} isWarehouse = {false} warehouseId={null}/>
          )}
    </>
  );
}

export default Inventories;
