// this will be the main inventory list
import "./Inventories.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InventoryList from "./InventoryList";

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
          <div className="inventorylist__box">
            <h1 className="inventorylist__title">Iventory List</h1>
            <input></input>
            <Link to="/inventory-list/add">
              <button className="inventorylist__add">Add New Item</button>
            </Link>
            </div>
         
          {!loading && inventoryList && inventoryList.length > 0 && (
            <InventoryList inventoryList={inventoryList} isWarehouse = {false} warehouseId={null}/>
          )}
     
    </>
  );
}

export default Inventories;
