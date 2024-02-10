import { useState } from "react";
import "./InventoryItemDetails.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import edit from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

export const InventoryItemDetails = ({inventoryId}) => {

  const REACT_APP_API_BASE_PATH = process.env

  const [item, setItem] = useState(null)
  const [warehouseName, setWarehouseName] = useState(null)

  useEffect(() => {
    const getItemAndWarehouse = async () => {
      try {
        const inventoryResponse = await axios.get(`http://localhost:8080/inventories/${inventoryId}`)
        const inventoryData = inventoryResponse.data
        console.log(inventoryData)
        setItem(inventoryData)

        if (inventoryData && inventoryData.warehouse_id) {
          const warehouseResponse = await axios.get(`http://localhost:8080/warehouses/${inventoryData.warehouse_id}`)
          const warehouseData = warehouseResponse.data
          console.log('Warehouse data: ', warehouseData)
          setWarehouseName(warehouseData.warehouse_name)
        }
        
        } catch (error) {
          console.error('Error finding inventory item you are looking for', error)
        }
      }
      getItemAndWarehouse()
    }, [inventoryId])

    if(!item || !warehouseName) {
      return <div>Loading...</div>
    }
  
  return (
    <>
      <h1 className="">{item.item_name}</h1>
      <Link to={`/inventory-list/${inventoryId}/edit`}><img className="" src={edit} alt="">{}</img></Link>

      <div className="">
        <div className="">
          <h2 className="">ITEM DESCRIPTION</h2>
            <p className="">{item.description}</p>
        </div>  
        
        <div className="">
          <h2 className="">CATEGORY</h2>
            <p className="">{item.category}</p>
        </div>

        <div className="">
          <h2 className="">STATUS</h2>
            <p className="">{item.status}</p>
        </div>

        <div className="">
          <h2 className="">QUANTITY</h2>
            <p className="">{item.quantity}</p>
        </div>

        <div className="">
          <h2 className="">WAREHOUSE</h2>
            <p className="">{warehouseName}</p>
        </div>

      </div>
     
    </>
  )
}
