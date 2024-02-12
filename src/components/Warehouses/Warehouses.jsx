
import "./Warehouses.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Warehouses() {
  const { REACT_APP_API_BASE_PATH } = process.env;
  const [warehouseList, setWarehouseList] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <section>
        <h1>Warehouses</h1>

        <input></input>
        <Link to="/warehouse-add">
              <button className="inventorylist__add">Add New Warehouse</button>
            </Link>
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




        </>
      )}
    </>
  );
}
