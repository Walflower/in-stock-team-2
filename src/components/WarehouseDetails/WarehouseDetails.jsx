import { useParams } from "react-router";
import "./WarehouseDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export function WarehouseDetails() {
  const warehouseId = useParams();
  if(!warehouseId){
    console.log("warehouse id is", warehouseId);
  }

  const { REACT_APP_API_BASE_PATH } = process.env;
  const [warehouse, setWarehouse] = useState([]);
  const fetchWarehouse = async () => {
    try {
      // const res = await axios.get(`${REACT_APP_API_BASE_PATH}/inventories`);
      const res = await axios.get(`http://localhost:8000/warehouses/${warehouseId}`);
      setWarehouse(res.data);
      console.log("warehouse data", res.data)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchWarehouse();
  }, []);

  return (
    <main>
        <div className="container">
      <section className="warehouse">
        <div className="warehouse__left info">
          <div className="info__tile-wrapper">
            <h4 className="info__title">WAREHOUSE ADDRESS</h4>
          </div>
          <div className="info__detail-wrapper info__address-wrapper">
            <p className="info__detail">300 Pearl Street Sw,</p>
            <p className="info__detail info__city"> <span>Washington, </span> <span>USA</span></p>
          </div>
        </div>

        <ul className="warehouse__right info">
          <li className="info__wrapper info__wrapper-name">
            <div className="info__tile-wrapper">
              <h4 className="info__title">CONTACT NAME</h4>
            </div>
            <div className="info__detail-wrapper">
              <div className="info__more">
                <p className="info__detail">Graeme Lyone</p>
                <p className="info__detail">Warehouse Manager</p>
              </div>
            </div>
          </li>

          <li className="info__wrapper">
            <div className="info__tile-wrapper">
              <h4 className="info__title">CONTACT INFORMATION</h4>
            </div>
            <div className="info__detail-wrapper">
              <div className="info__more">
                <p className="info__detail">+1 (647) 504-0911</p>
                <p className="info__detail">glyon@instock.com</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      </div>

      <h2> WAREHOUSE INEVENTORY LIST placeholder</h2>
    </main>
  );
}

export default WarehouseDetails;
