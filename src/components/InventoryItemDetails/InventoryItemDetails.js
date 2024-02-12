import { useState } from "react";
import "./InventoryItemDetails.scss";
import axios from "axios";
import { useEffect } from "react";
import edit from "../../assets/icons/edit-24px.svg";
import { Link, useParams } from "react-router-dom";

export const InventoryItemDetails = () => {

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
