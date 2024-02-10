import { useState } from "react";
import "./InventoryItemDetails.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import edit from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

export const InventoryItemDetails = () => {

  const REACT_APP_API_BASE_PATH = process.env

  const [item, setItem] = useState(null)
  const inventoryId = useParams()

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(`http://localhost8080/inventories/${inventoryId}`)
        setItem(response.data)
      } catch (error) {
        console.error('Error finding inventory item you are looking for', error)
      }
    }
    getItem()
  }, [inventoryId])

  if(!item) {
    return <div>Loading...</div>
  }
  
  return (
    <>
      <h1 className="">{item.item_name}</h1>
      <Link to={`/inventory-list/${inventoryId}/edit`}><img className="" src={edit} alt="">{}</img></Link>

      <div className="">
         <h2 className="">ITEM DESCRIPTION</h2>
         <p className="">{item.description}</p>

      </div>
     
    </>
  )
}
