import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddNewInventory.scss";
import * as yup from "yup";
import Dropdown from "../DropDown/DropDown";

export function AddNewInventory() {
  const initialState = {
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "In stock",
    quantity: "",
  };

  const [inventoryData, setInventoryData] = useState(initialState);
  const [warehouseList, setWarehouseList] = useState();
  const [categoryList, setCategoryList] = useState([]);
  const [errors, setErrors] = useState({});
  const [showQuantityInput, setShowQuantityInput] = useState(false);

  const navigate = useNavigate();

  const inventoryValidationSchema = yup.object().shape({
    warehouse_id: yup.string().required("Warehouse name is required"),
    item_name: yup.string().required("Inventory name is required"),
    description: yup.string().required("Description is required"),
    category: yup.string().required("Category is required"),
    quantity: yup
      .number()
      .typeError("Quantity must be a number")
      .required("Quantity is required")
      .integer("Quantity must be an integer")
      .min(0, "Quantity cannot be negative"),
    status: yup.string().required("Status is required"),
  });

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
        inventoryResponse.foreach((inventory) => {
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

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setInventoryData({ ...inventoryData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSelect = (op) => {
    let { name, option } = op;

    if (name === "warehouse_id") {
      option = warehouseList.find(
        (warehouse) => warehouse.warehouse_name === option
      ).id;
    }
    setInventoryData({ ...inventoryData, [name]: option });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Making sure that quantity is 0 when inventory status is out of stock.
      if (inventoryData.status === "Out of Stock") {
        inventoryData.quantity = "0";
      }

      // Validate the form data
      await inventoryValidationSchema.validate(inventoryData, {
        abortEarly: false,
      });

      const response = await axios.post(
        `http://localhost:8080/inventories`,
        inventoryData
      );

      if (response.status === 201) {
        setInventoryData(initialState);
        alert("Inventory was added successfully!");
      }
    } catch (err) {
      if (err.name === "ValidationError") {
        // Setting errors, if form input is invalid:
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else {
        console.error("Form submission error:", err);
        alert("the inventory add was unsuccessful. Please try again later.");
      }
    }
  };

  return (
    <>
      <h1 className="add__inventory">ADD NEW Inventory Item</h1>

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
                placeholder="Item Name"
                className="details__input"
              ></input>
            </div>

            <div className="details__subcontainer">
              <label htmlFor="description" className="details__label">
                Description
              </label>
              <input
                labelText="Category"
                type="text"
                id="description"
                name="description"
                placeholder="Please enter a brief item description"
                className="details__input"
              ></input>
            </div>

            <div className="details__subcontainer">
              {/* <label htmlFor="category" className="details__label">
                Category
              </label> */}
              {/**new a drop down menu here */}
              <Dropdown
                name="category"
                labelText="Category"
                placeholder="Please select"
                onSelect={handleSelect}
                error={errors.category}
                options={categoryList}
              />
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
              ></input>
              <input
                type="radio"
                id="out-of-stock"
                name="status"
                className="details__input"
              ></input>
            </div>

            {/**Need drop down for warehouse Quantity and Warehouse. the value of warehouse need to go with the warehouse id */}
            <div className="details__subcontainer">
              {/* <select className="">
                {warehouseList?.map((warehouse, index) => {
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
          {/**checkout the button mixins */}
          <div className="button">
            <button className="button__save">Cancel</button>
            <button className="button__cancel">+Add Item</button>
          </div>
        </form>
      </section>
    </>
  );
}
