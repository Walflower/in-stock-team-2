import { useState } from "react";
import "./InventoryItemDetails.scss";
import axios from "axios";
import { useEffect } from "react";
import edit from "../../assets/icons/edit-24px.svg";
import { Link, useParams } from "react-router-dom";
import returnArrow from "../../assets/icons/arrow_back-24px.svg";

export const InventoryItemDetails = () => {

  const { inventoryId } = useParams();
  const [inventoryDetails, setInventoryDetails] = useState(null);
  const [warehouseName, setWarehouseName] = useState(null);

  useEffect(() => {
    const fetchInventoryDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/inventories/${inventoryId}`);
        setInventoryDetails(response.data);

        const warehouseResponse = await axios.get(`http://localhost:8080/warehouses/${response.data.warehouse_id}`);
        setWarehouseName(warehouseResponse.data.warehouse_name);

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
        <header className="header__details">
          <div className="header__container">
            <h1 className="header__name"><Link to="/inventory-list"><img className="header__icon--returnArrow" src={returnArrow} alt=""></img></Link>{inventoryDetails.item_name}</h1>
            <Link to={`/inventory-list/${inventoryId}/edit`}><button className="header__button"><img className="header__icon" src={edit} alt="">{}</img>Edit</button></Link>
          </div>
        </header>

        <section className="details">

          <div className="details__container1">
            <h2 className="details__subheader">ITEM DESCRIPTION:</h2>
              <p className="details__description">{inventoryDetails?.description}</p>
          </div>  
          
          <div className="details__container1">
            <h2 className="details__subheader">CATEGORY:</h2>
              <p className="details__description">{inventoryDetails?.category}</p>
          </div>

          <div className="details__container2">
            <div className="details__container--type">
              <h2 className="details__subheader">STATUS:</h2>
              <p className={`inventory__detail-tablet inventory__detail-tag-tablet 
                    ${inventoryDetails.status.toLowerCase() === "in stock" ? "inventory__detail-tag-in" : "inventory__detail-tag-out"}`}>
                    {inventoryDetails.status}</p>
            </div>          
            
            <div className="details__container--type1">
              <h2 className="details__subheader">QUANTITY:</h2>
                <p className="details__description">{inventoryDetails?.quantity}</p>
            </div>
          </div>

          <div className="details__container1">
            <h2 className="details__subheader">WAREHOUSE:</h2>
              <p className="details__description">{warehouseName}</p>
          </div>

        </section>
    </>
      )}
    </>
      
  )
}
