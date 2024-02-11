import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddNewInventory.scss";
import * as yup from "yup";
import Dropdown from "../DropDown/DropDown";
import { AddButton } from "../AddButton/AddButton";

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

  const handleItemNameChange = (e) => {
    const { value } = e.target;
    setInventoryData({ ...inventoryData, item_name: value });
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setInventoryData({ ...inventoryData, description: value });
  };

  const handleRadioChange = (value) => {
    setInventoryData({ ...inventoryData, status: value });

    setShowQuantityInput(value === "Out of Stock");

    setErrors({ ...errors, status: "" });
  };
  //
  const handleQuantityChange = (e) => {
    const { value } = e.target;
    setInventoryData({ ...inventoryData, quantity: value });
    setErrors({ ...errors, quantity: "" });
  };

  //
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
      if (inventoryData.status === "Out of Stock") {
        inventoryData.quantity = "0";
      } else {
        inventoryData.quantity = parseInt(inventoryData.quantity);
      }

      // Validate the form data
      await inventoryValidationSchema.validate(inventoryData, {
        abortEarly: false,
      });
      console.log(inventoryData); //remove

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
        <form className="details__form" onSubmit={handleSubmit}>
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
                value={inventoryData.item_name}
                onChange={handleItemNameChange}
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
                placeholder="Please enter a brief item description"
                className="details__input"
                value={inventoryData.description}
                onChange={handleDescriptionChange}
              ></input>
            </div>

            <div className="details__subcontainer">
              <label htmlFor="category" className="details__label">
                Category
              </label>

              <Dropdown
                name="category"
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
              <article className="form__stockSection">
                <h3 className="form__stockSection-title">Status</h3>
                <div className="form__stockSection-wrapper">
                  <label className="in-stock">
                    <input
                      name="status"
                      type="radio"
                      value="In Stock"
                      checked={!showQuantityInput}
                      onChange={() => handleRadioChange("In Stock")}
                    />
                    In stock
                  </label>
                  <label className="out-of-stock">
                    <input
                      name="status"
                      type="radio"
                      value="Out of Stock"
                      checked={showQuantityInput}
                      onChange={() => handleRadioChange("Out of Stock")}
                    />
                    Out of stock
                  </label>
                </div>
              </article>

              {!showQuantityInput && (
                <>
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="number"
                    placeholder="Quantity"
                    name="quantity"
                    value={inventoryData.quantity}
                    onChange={handleQuantityChange}
                    error={errors.quantity}
                  />
                </>
              )}
            </div>

            <div className="details__subcontainer">
              <label htmlFor="category" className="details__label">
                Warehouse
              </label>

              <Dropdown
                name="warehouse_id"
                placeholder="Please select"
                onSelect={handleSelect}
                error={errors.warehouse_id}
                options={warehouseList?.map(
                  (warehouse) => warehouse.warehouse_name
                )}
              />
            </div>
          </article>

          {/**checkout the button mixins */}
          <div className="button">
            <button className="inventory__cancel">Cancel</button>
            <button className="inventory__add">Add Item</button>
          </div>
        </form>
      </section>
    </>
  );
}
