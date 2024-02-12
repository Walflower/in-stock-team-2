import { useParams } from "react-router-dom"
import "./AddNewWarehouse.scss"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import returnArrow from "../../assets/icons/arrow_back-24px.svg";

export const AddNewWarehouse = () => {

    const [warehouseData, setWarehouseData] = useState({
        warehouse_name: '',
        address: '',
        city: '',
        country: '',
        contact_name: '',
        contact_position: '',
        contact_phone: '',
        contact_email: ''
      });

      const navigate = useNavigate();

      const handleChange = (e) => {
        const { name, value } = e.target;
        setWarehouseData({ ...warehouseData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8080/warehouses', warehouseData);
          setWarehouseData({
            warehouse_name: '',
            address: '',
            city: '',
            country: '',
            contact_name: '',
            contact_position: '',
            contact_phone: '',
            contact_email: ''
          });
          alert('Warehouse added successfully!');
          console.log("New Warehouse: ", response.data)
          navigate("/")
        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorMessage = error.response.data.message
                console.error("Validate error: ", errorMessage)
                console.error('Error adding warehouse:', error);
            } else {
                console.error('Error adding warehouse:', error);  
        } 
            
        }
      };
    

    return (
        <>
            <header className="edit">
                <h1 className='edit__warehouse'><img className="edit__return" src={returnArrow} alt="return to warehouse details page"></img>Add New Warehouse</h1>
            </header>

            <section className='details'>

                <form onSubmit={handleSubmit} className='details__form'>

                    <section className="details__main">

                        <article className='details__container'>

                            <h2 className='details__subheader'>Warehouse Details</h2>
                            
                            <div className='details__subcontainer'>
                                <label htmlFor="warehouse_name" className='details__label'>Warehouse Name</label>
                                <input type='text' id="warehouse_name" name="warehouse_name" placeholder='Warehouse Name' className='details__input' value={warehouseData.warehouse_name} onChange={handleChange}></input>
                            </div>

                            <div className='details__subcontainer'>
                                <label htmlFor="address" className='details__label'>Street Address</label>
                                <input type='text' id="address" name="address" placeholder='Street Address' className='details__input' value={warehouseData.address} onChange={handleChange}></input>
                            </div>

                            <div className='details__subcontainer'>
                                <label htmlFor="city" className='details__label'>City</label>
                                <input type='text' id="city" name="city" placeholder='City'  className='details__input' value={warehouseData.city} onChange={handleChange}></input>
                            </div>

                            <div className='details__subcontainer'>
                                <label htmlFor="country" className='details__label'>Country</label>
                                <input type='text' id="country" name="country" placeholder='Country' className='details__input' value={warehouseData.country} onChange={handleChange}></input>
                            </div>    

                            </article>

                        <div className='divider'></div>
                    
                        <article className='details__container'>

                            <h2 className='details__subheader'>Contact Details</h2>
                            
                            <div className='details__subcontainer'>
                                <label htmlFor="contact_name" className='details__label'>Contact Name</label>
                                <input type='text' id="contact_name" name="contact_name" placeholder='Contact Name' className='details__input' value={warehouseData.contact_name} onChange={handleChange}></input>
                            </div>    

                            <div className='details__subcontainer'>
                                <label htmlFor="contact_position" className='details__label'>Position</label>
                                <input type='text' id="contact_position" name="contact_position" placeholder='Position' className='details__input' value={warehouseData.contact_position} onChange={handleChange}></input>
                            </div>    

                            <div className='details__subcontainer'>
                                <label htmlFor="contact_phone" className='details__label'>Phone Number</label>
                                <input type='text' id="contact_phone" name="contact_phone" placeholder='Phone Number' className='details__input' value={warehouseData.contact_phone} onChange={handleChange}></input>
                            </div>    

                            <div className='details__subcontainer'>
                                <label htmlFor="contact_email" className='details__label'>Email</label>
                                <input type='text' id="contact_email" name="contact_email" placeholder='Email' className='details__input' value={warehouseData.contact_email} onChange={handleChange}></input>
                            </div>     

                        </article>
                        
                    </section>
                        
                        <div className='button'>
                            <button className='button__cancel'>Cancel</button>
                            <button type='submit' className='button__save'>Add Warehouse</button>
                        </div>

                </form>


            </section>
        </>
    )
}