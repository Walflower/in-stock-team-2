import { useParams } from "react-router";
import "./WarehouseDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import InventoryList from "../InventoryList/InventoryList";

export function WarehouseDetails() {
  const {warehouseId} = useParams();

  const { REACT_APP_API_BASE_PATH } = process.env;
  const [warehouse, setWarehouse] = useState([]);
  const [warehouseInventoryList, setWarehouseInventoryList] = useState([]);


  const fetchWarehouse = async () => {
    try {
      // const res = await axios.get(`${REACT_APP_API_BASE_PATH}/inventories`);
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
      <h2> WAREHOUSE INEVENTORY LIST placeholder</h2>
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


// import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList"; // Import your WarehouseInventoryList component
// import InventoryList from "../../components/InventoryList/InventoryList"; // Import your regular InventoryList component

// export function Warehouses() {
//   const [warehouseList, setWarehouseList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isWarehouseInventory, setIsWarehouseInventory] = useState(false); // State to determine if it's a warehouse inventory list

//   const fetchWarehouseList = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/warehouses");
//       setWarehouseList(res.data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchWarehouseList();
//   }, []);

//   const handleWarehouseClick = (warehouseId) => {
//     // Update state to indicate that a warehouse inventory list should be displayed
//     setIsWarehouseInventory(true);
//   };

//   return (
//     <main className="main">
//       <div className="main__container">
//         <section>
//           <h1>Warehouses</h1>
//           <input></input>
//           <button></button>
//         </section>
//         {!loading && warehouseList && warehouseList.length > 0 && (
//           <>
//             {warehouseList.map((warehouse) => (
//               <div key={warehouse.id}>
//                 <Link to={`/${warehouse.id}`} onClick={() => handleWarehouseClick(warehouse.id)}>
//                   <p>{warehouse.warehouse_name}</p>
//                 </Link>
//                 <p>{warehouse.address}</p>
//                 <p>{warehouse.city}</p>
//                 <p>{warehouse.country}</p>
//                 <p>{warehouse.contact_name}</p>
//                 <p>{warehouse.contact__phone}</p>
//                 <p>{warehouse.contact__email}</p>
//               </div>
//             ))}
//             {/* Conditional rendering based on isWarehouseInventory */}
//             {isWarehouseInventory ? (
//               <InventoryList isWarehouse={true} inventoryList={warehouse.inventory_list} warehouseId={warehouse.Id} />
//             ) : (
//               <InventoryList isWarehouse={false} warehouseId=""/>
//             )}
//           </>
//         )}
//       </div>
//     </main>
//   );
// }
