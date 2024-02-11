import { useState } from "react";
import "./InventoryItemDetails.scss";
import axios from "axios";
import { useEffect } from "react";
import edit from "../../assets/icons/edit-24px.svg";
import { Link, useParams } from "react-router-dom";

export const InventoryItemDetails = () => {

  // const REACT_APP_API_BASE_PATH = process.env

  // const {inventoryId} = useParams()
  // console.log("Inventory ID:", inventoryId)

  // const [warehouseName, setWarehouseName] = useState(null)
  // const [inventory, setInventory] = useState(null)

  // useEffect(() => {
  //   const getItemAndWarehouse = async () => {
  //     try {
  //       const inventoryResponse = await axios.get(`http://localhost:8080/inventories/${inventoryId}`)
  //       const inventoryData = inventoryResponse.data
  //       console.log(inventoryData)
  //       setInventory(inventoryData)

  //       if (inventoryData && inventoryData.warehouse_id) {
  //         const warehouseResponse = await axios.get(`http://localhost:8080/warehouses/${inventoryData.warehouse_id}`)
  //         const warehouseData = warehouseResponse.data
  //         console.log('Warehouse data: ', warehouseData)
  //         setWarehouseName(warehouseData.warehouse_name)
  //       }

  //       } catch (error) {
  //         console.error('Error finding inventory item you are looking for', error)
  //       }
  //     }
  //     getItemAndWarehouse()
  //   }, [inventoryId])

  //   if(!inventory || !warehouseName) {
  //     return <div>Item not found...</div>
  //   }
  
  // *************************************************************


  // const { REACT_APP_API_BASE_PATH } = process.env;
  // const {inventoryId} = useParams()
  // console.log("Params: ", inventoryId)

  // const [inventoryDetails, setInventoryDetails] = useState({})

  // useEffect(() => {
  //   const getInventoryDetails = async () => {
  //     try {
  //       if (inventoryId) {
  //         const res = await axios.get(`http://localhost:8080/inventories/${inventoryId}`)
  //         console.log("respsonse", res.data)
  //         setInventoryDetails(res.data)
  //       }
  //     } catch (error) {
  //       console.error("Error getting Inventory Item", error)
  //     }
  //   }
  //   console.log("Fetching inventory detaisl from ID", inventoryDetails)
  //   getInventoryDetails()
  // }, [inventoryId])

  const { inventoryId } = useParams();
  const [inventoryDetails, setInventoryDetails] = useState(null);

  useEffect(() => {
    const fetchInventoryDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/inventories/${inventoryId}`);
        setInventoryDetails(response.data);
      } catch (error) {
        console.error('Error fetching inventory details:', error);
      }
    };

    fetchInventoryDetails();
  }, [inventoryId]);

  if (!inventoryDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>

      {inventoryDetails && (
        <> 
        <h1 className="">{inventoryDetails.item_name}</h1>
        <Link to={`/inventory-list/${inventoryId}/edit`}><button><img className="" src={edit} alt="">{}</img></button></Link>
        <div className="">
          <div className="">
            <h2 className="">ITEM DESCRIPTION</h2>
              <p className="">{inventoryDetails?.description}</p>
          </div>  
          
          <div className="">
            <h2 className="">CATEGORY</h2>
              <p className="">{inventoryDetails?.category}</p>
          </div>

          <div className="">
            <h2 className="">STATUS</h2>
              <p className="">{inventoryDetails?.status}</p>
          </div>

          <div className="">
            <h2 className="">QUANTITY</h2>
              <p className="">{inventoryDetails?.quantity}</p>
          </div>

          <div className="">
            <h2 className="">WAREHOUSE</h2>
              <p className="">{inventoryDetails?.warehouse_name}</p>
          </div>

        </div>
    </>
      )}
    </>
      
  )
}
