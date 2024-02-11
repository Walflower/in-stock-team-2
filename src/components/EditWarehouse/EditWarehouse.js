import { useParams, useSearchParams } from "react-router-dom";
import "./EditWarehouse.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import returnArrow from "../../assets/icons/arrow_back-24px.svg";

export const EditWarehouse = () => {

    const navigate = useNavigate()

    const REACT_APP_API_BASE_PATH = process.env

    const {warehouseId} = useParams()
    const [warehouse, setWarehouse] = useState(null)
    const [formData, setFormData] = useState({
        warehouse_name: "",
        address: "",
        city: "",
        country: "",
        contact_name: "",
        contact_position: "",
        contact_phone: "",
        contact_email: "",
      });

    useEffect(() => {
        const getWarehouse = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/warehouses/${warehouseId}`)
                setWarehouse(response.data)
            } catch (error) {
                console.error('Error getting warehouse data to edit', error)
            }
        }
        getWarehouse()
    }, [warehouseId])

    useEffect(() => {
        if (warehouse) {
            setFormData({
                warehouse_name: warehouse.warehouse_name,
                address: warehouse.address,
                city: warehouse.city,
                country: warehouse.country,
                contact_name: warehouse.contact_name,
                contact_position: warehouse.contact_position,
                contact_phone: warehouse.contact_phone,
                contact_email: warehouse.contact_email
            });
        }
    }, [warehouse]);

    const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }))
    }

      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:8080/warehouses/${warehouse.id}`, formData)
            alert('Warehouse details successfully updated!')
            navigate("/")
        } catch (error) {
            console.error('Error updating warehouse', error)
        }
      }

    if (!warehouse) {
        return <div>No Warehouse details found...</div>
    }

    return (
        <>
                <header className="edit">
                    <h1 className='edit__warehouse'><img className="edit__return" src={returnArrow} alt="return to warehouse details page"></img>Edit Warehouse</h1>
                </header>

                <section className='details'>

                    <form onSubmit={handleSubmit} className='details__form'>

                        <article className='details__container'>

                            <h2 className='details__subheader'>Warehouse Details</h2>
                            
                            <div className='details__subcontainer'>
                                <label htmlFor="warehouse_name" className='details__label'>Warehouse Name</label>
                                <input className='details__input' type='text' id="warehouse_name" name="warehouse_name" placeholder={warehouse.warehouse_name} value={formData.warehouse_name} onChange={handleChange}></input>
                            </div>

                            <div className='details__subcontainer'>
                                <label htmlFor="address" className='details__label'>Street Address</label>
                                <input className='details__input' type='text' id="address" name="address" placeholder={warehouse.address} value={formData.address} onChange={handleChange}></input>
                            </div>

                            <div className='details__subcontainer'>
                                <label htmlFor="city" className='details__label'>City</label>
                                <input type='text' id="city" name="city" placeholder={warehouse.city}  className='details__input' value={formData.city} onChange={handleChange}></input>
                            </div>

                            <div className='details__subcontainer'>
                                <label htmlFor="country" className='details__label'>Country</label>
                                <input type='text' id="country" name="country" placeholder={warehouse.country}  className='details__input' value={formData.country} onChange={handleChange}></input>
                            </div>    

                            </article>

                        <div className='divider'></div>
                    
                        <article className='details__container'>

                            <h2 className='details__subheader'>Contact Details</h2>
                            
                            <div className='details__subcontainer'>
                                <label htmlFor="contact_name" className='details__label'>Contact Name</label>
                                <input type='text' id="contact_name" name="contact_name" placeholder={warehouse.contact_name} className='details__input' value={formData.contact_name} onChange={handleChange}></input>
                            </div>    

                            <div className='details__subcontainer'>
                                <label htmlFor="contact_position" className='details__label'>Position</label>
                                <input type='text' id="contact_position" name="contact_position" placeholder={warehouse.contact_position} className='details__input' value={formData.contact_position} onChange={handleChange}></input>
                            </div>    


                            <div className='details__subcontainer'>
                                <label htmlFor="contact_phone" className='details__label'>Phone Number</label>
                                <input type='text' id="contact_phone" name="contact_phone" placeholder={warehouse.contact_phone} className='details__input' value={formData.contact_phone} onChange={handleChange}></input>
                            </div>    

                            <div className='details__subcontainer'>
                                <label htmlFor="contact_email" className='details__label'>Email</label>
                                <input type='text' id="contact_email" name="contact_email" placeholder={warehouse.contact_email} className='details__input' value={formData.contact_email} onChange={handleChange}></input>
                            </div>     

                        </article>
                        
                            <div className='button'>
                                    <button className='button__cancel'>Cancel</button>
                                    <button type="submit" className='button__save'>Save</button>
                            </div>

                    </form>

                </section>
        </>
    )
}
