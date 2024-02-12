
import "./EditInventory.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function EditInventory() {

  const REACT_APP_API_BASE_PATH = process.env
  const { inventoryId } = useParams();

  const initialValues = {
    itemName :"",
    description:"",
    category:"",
    status:"",
    warehouse:""
  }

  const [inventory, setInventory] = useState(null);
  const [formData, setFormData] = useState(initialValues);

  const [warehouseList, setWarehouseList] = useState();
  const [categoryList, setCategoryList] = useState([]);
  

  const baseURL = "http://localhost:8080";
  const fetchInventory = async () =>{
    try {
      // const resp = await axios.get(`${baseURL}/inventories/${inventoryId}`);
      const res = await axios.get(`http://localhost:8080/inventories/${inventoryId}`)
      setInventory(res.data);
      console.log("inventory item", res.data);
    } catch (error) {
      console.error('Error fetching inventory item', error)
    }
  }
  useEffect(()=>{
    fetchInventory();
  }, [inventoryId])

  const setInitialFormData = () =>{
    if(inventory){
   
    setFormData({
      itemName :inventory.item_name,
      description:inventory.description,
      category:inventory.category,
      status:inventory.status,
      warehouse:inventory.warehouse,
    })
    }
  } 
  useEffect(()=>{
    setInitialFormData();
  }, [inventory])
 

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }



  const getDropDown = async () => {
    try {
      const warehouseData = await axios.get(`http://localhost:8080/warehouses`);
      if (warehouseData.status === 200) {
        const warehouseNames = warehouseData.data.map((warehouse) => ({
          id: warehouse.id,
          warehouse_name: warehouse.warehouse_name,
        }));
        setWarehouseList(warehouseNames);
      }

      const inventoryResponse = await axios.get(
        `http://localhost:8080/inventories`
      );
      if (inventoryResponse.status === 200) {
        const inventoryCategories = new Set();
        inventoryResponse.data.forEach((inventory) => {
          inventoryCategories.add(inventory.category);
        });
        setCategoryList(Array.from(inventoryCategories));
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getDropDown();
  }, []);

  return (
    <>
      <h1 className="edit__warehouse">Edit Inventory Item</h1>

      <section className="details">
        <form className="details__form">
          <article className="details__container">
            <h2 className="details__subheader">Item Details</h2>

            <div className="details__subcontainer">
              <label htmlFor="item" className="details__label">
                Item Name
              </label>
              <input
                type="text"
                id="item"
                name="item"
                placeholder="Television"
                className="details__input"
                // placeholder=""
                value={formData.itemName}
                onChange={handleChange}
              ></input>
            </div>

            <div className="details__subcontainer">
              <label htmlFor="description" className="details__label">
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                // placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.'
                className="details__input"
                value={formData.description}
                onChange={handleChange}
              ></input>
            </div>

            <div className="details__subcontainer">
              <label htmlFor="category" className="details__label">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                // placeholder="Electronics"
                className="details__input"
                value={formData.category}
                onChange={handleChange}
              ></input>
            </div>
          </article>

          <div className="divider"></div>

          <article className="details__container">
            <h2 className="details__subheader">Item Availability</h2>

            <div className="details__subcontainer">
              <label htmlFor="status" className="details__label">
                Status
              </label>
              <input
                type="radio"
                id="in-stock"
                name="status"
                className="details__input"
                value={formData.status}
                onChange={handleChange}
              ></input>
              <input
                type="radio"
                id="out-of-stock"
                name="status"
                className="details__input"
                value={formData.status}
                onChange={handleChange}
              ></input>
            </div>

            <div className="details__subcontainer">
              {/* <select className="">
                {warehouses?.map((warehouse, index) => {
                  return (
                    <option
                      className=""
                      key={warehouse.id}
                      value={warehouse.id}
                    >
                      {warehouse.warehouse_name}
                    </option>
                  );
                })}
              </select> */}
            </div>
          </article>

          <div className="button">
            <button className="button__save">Save</button>
            <button className="button__cancel">Cancel</button>
          </div>
        </form>
      </section>
    </>
  );
}
