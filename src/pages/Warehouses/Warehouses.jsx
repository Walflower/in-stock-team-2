// home page, houseing the warehouse list
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import "./Warehouses.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Warehouses() {
  const warehouseId = 2;

  const { REACT_APP_API_BASE_PATH } = process.env;
  const [warehouseList, setWarehouseList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWarehouseList = async () => {
    try {
      // const res = await axios.get(`${REACT_APP_API_BASE_PATH}/inventories`);
      const res = await axios.get("http://localhost:8000/warehouses");
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
    <main className="main">
      <div className="main__container">
        <section>
          <h1>Warehouses</h1>

          <input></input>
          <button></button>
        </section>
        {!loading && warehouseList && warehouseList.length > 0 && (
          <>
            {warehouseList.map((warehouse) => (
              <div key={warehouse.id}>
                <Link to={`/${warehouse.id}`}>
                  <p>{warehouse.warehouse_name}</p>
                </Link>
                <p>{warehouse.address}</p>
                <p>{warehouse.city}</p>
                <p>{warehouse.country}</p>
                <p>{warehouse.contact_name}</p>
                <p>{warehouse.contact__phone}</p>
                <p>{warehouse.contact__email}</p>
              </div>
            ))}
            <WarehouseDetails warehouseId={warehouseId} />
          </>
        )}
      </div>
    </main>
  );
}


import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList"; // Import your WarehouseInventoryList component
import InventoryList from "../../components/InventoryList/InventoryList"; // Import your regular InventoryList component

export function Warehouses() {
  const [warehouseList, setWarehouseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isWarehouseInventory, setIsWarehouseInventory] = useState(false); // State to determine if it's a warehouse inventory list

  const fetchWarehouseList = async () => {
    try {
      const res = await axios.get("http://localhost:8000/warehouses");
      setWarehouseList(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWarehouseList();
  }, []);

  const handleWarehouseClick = (warehouseId) => {
    // Update state to indicate that a warehouse inventory list should be displayed
    setIsWarehouseInventory(true);
  };

  return (
    <main className="main">
      <div className="main__container">
        <section>
          <h1>Warehouses</h1>
          <input></input>
          <button></button>
        </section>
        {!loading && warehouseList && warehouseList.length > 0 && (
          <>
            {warehouseList.map((warehouse) => (
              <div key={warehouse.id}>
                <Link to={`/${warehouse.id}`} onClick={() => handleWarehouseClick(warehouse.id)}>
                  <p>{warehouse.warehouse_name}</p>
                </Link>
                <p>{warehouse.address}</p>
                <p>{warehouse.city}</p>
                <p>{warehouse.country}</p>
                <p>{warehouse.contact_name}</p>
                <p>{warehouse.contact__phone}</p>
                <p>{warehouse.contact__email}</p>
              </div>
            ))}
            {/* Conditional rendering based on isWarehouseInventory */}
            {isWarehouseInventory ? (
              <InventoryList isWarehouse={true} warehouseId={warehouse.Id} />
            ) : (
              <InventoryList isWarehouse={false} warehouseId=""/>
            )}
          </>
        )}
      </div>
    </main>
  );
}
