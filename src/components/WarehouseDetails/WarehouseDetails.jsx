import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./WarehouseDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import InventoryList from "../InventoryList/InventoryList";
import returnArrow from "../../assets/icons/arrow_back-24px.svg";

export function WarehouseDetails() {
  const {warehouseId} = useParams();

  const { REACT_APP_API_BASE_PATH } = process.env;
  const [warehouse, setWarehouse] = useState([]);
  const [warehouseInventoryList, setWarehouseInventoryList] = useState([]);


  const fetchWarehouse = async () => {
    try {
    
      const res = await axios.get(`http://localhost:8080/warehouses/${warehouseId}`);
      console.log("warehouse: ", res.data)
      setWarehouse(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchWarehouse();
  }, []);

  const fecthWarehouseInventoryList = async () =>{
    try {
      const res = await axios.get(`http://localhost:8080/warehouses/${warehouseId}/inventories`);
      setWarehouseInventoryList(res.data);
      console.log("inventory of the warehouse: ", res.data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fecthWarehouseInventoryList();
  }, []);


  return (
    <>
    {warehouseId  && (
    
    <main>
      <div className="Big">
      <h1 className="Big"><img className="Big__icon" src={returnArrow} alt="return icon"></img> {warehouse.warehouse_name}</h1>
      <Link to={`/${warehouseId}/edit`}><button className="Big__editbutton"><p className="Big__text">Edit</p></button></Link>
      </div>
      
        <div className="container">
      <section className="warehouse">
        <div className="warehouse__left info">
          <div className="info__tile-wrapper">
            <h4 className="info__title">WAREHOUSE ADDRESS</h4>
          </div>
          <div className="info__detail-wrapper info__address-wrapper">
            <p className="info__detail">{warehouse.address}</p>
            <p className="info__detail info__city"> <span>{warehouse.city}, </span> <span>{warehouse.country}</span></p>
          </div>
        </div>

        <ul className="warehouse__right info">
          <li className="info__wrapper info__wrapper-name">
            <div className="info__tile-wrapper">
              <h4 className="info__title">CONTACT NAME</h4>
            </div>
            <div className="info__detail-wrapper">
              <div className="info__more">
                <p className="info__detail">{warehouse.contact_name}</p>
                <p className="info__detail">{warehouse.contact_position}</p>
              </div>
            </div>
          </li>

          <li className="info__wrapper">
            <div className="info__tile-wrapper">
              <h4 className="info__title">CONTACT INFORMATION</h4>
            </div>
            <div className="info__detail-wrapper">
              <div className="info__more">
                <p className="info__detail">{warehouse.contact_phone}</p>
                <p className="info__detail">{warehouse.contact_email}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      </div>
      <InventoryList inventoryList={warehouseInventoryList} isWarehouse = {true} warehouseId={warehouseId}/>
      
    </main>
    )}
    </>
  );
}

export default WarehouseDetails;
