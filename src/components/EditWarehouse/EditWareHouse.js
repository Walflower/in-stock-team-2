import { useSearchParams } from 'react-router-dom'
import './EditWarehouse.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export function EditWarehouse({warehouseId}) {

    const [editWarehouse, setEditWarehouse] = useState({
        warehouse_name: '',
        address: '',
        city: '',
        country: '',
        contact_name: '',
        contact_position: '',
        contact_phone: '',
        contact_email: '',
    })

    useEffect(() => {
        const getWarehouseData = async () => {
            try{
                const response = await axios.get(`http://localhost:8080/warehouses/${warehouseId}`)
                setEditWarehouse(response.data)
            } catch (error) {
                console.error('Error fetching warehouse details for EditWarehouse: ', error)
            }
        }
        getWarehouseData()
    }, [warehouseId])

    const handleChange = (e) => {
        const {name, value} = e.target
        setEditWarehouse({...editWarehouse, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:8080/warehouses/${warehouseId}`, editWarehouse)
            alert("Warehouse details updated successfully!")
        } catch (error) {
            console.error("Error updating warehouse details:", error)
            alert("Failed to update warehouse details, Please try again.")
        }
    }
    
    return (
        <>
            <h1 className='edit__warehouse'>Edit Warehouse</h1>

            <section className='details'>

                <form onSubmit={handleSubmit} id='details__form'>

                    <article className='details__container'>

                        <h2 className='details__subheader'>Warehouse Details</h2>
                        
                        <div className='details__subcontainer'>
                            <label htmlFor="location" className='details__label'>Warehouse Name</label>
                            <input className='details__input' type='text' id="location" name="location" placeholder='Washington' value={editWarehouse.warehouse_name} onChange={handleChange}></input>
                        </div>

                        <div className='details__subcontainer'>
                            <label htmlFor="address" className='details__label'>Street Address</label>
                            <input className='details__input' type='text' id="address" name="address" placeholder='300 Pearl Street SW' value={editWarehouse.address} onChange={handleChange}></input>
                        </div>

                        <div className='details__subcontainer'>
                            <label htmlFor="city" className='details__label'>City</label>
                            <input type='text' id="city" name="city" placeholder='Washington'  className='details__input' value={editWarehouse.city} onChange={handleChange}></input>
                        </div>

                        <div className='details__subcontainer'>
                            <label htmlFor="country" className='details__label'>Country</label>
                            <input type='text' id="country" name="country" placeholder='USA'  className='details__input' value={editWarehouse.country} onChange={handleChange}></input>
                        </div>    

                        </article>

                    <div className='divider'></div>
                
                    <article className='details__container'>

                        <h2 className='details__subheader'>Contact Details</h2>
                        
                        <div className='details__subcontainer'>
                            <label htmlFor="contact_name" className='details__label'>Contact Name</label>
                            <input type='text' id="contact_name" name="contact_name" placeholder='Graeme Lyon' className='details__input' value={editWarehouse.contact_name} onChange={handleChange}></input>
                        </div>    

                        <div className='details__subcontainer'>
                            <label htmlFor="contact_position" className='details__label'>Position</label>
                            <input type='text' id="contact_position" name="contact_position" placeholder='Warehouse Manager' className='details__input' value={editWarehouse.contact_position} onChange={handleChange}></input>
                        </div>    


                        <div className='details__subcontainer'>
                            <label htmlFor="contact_phone" className='details__label'>Phone Number</label>
                            <input type='text' id="phcontact_phoneone" name="contact_phone" placeholder='+1 (647) 504-0911' className='details__input' value={editWarehouse.contact_phone} onChange={handleChange}></input>
                        </div>    

                        <div className='details__subcontainer'>
                            <label htmlFor="contact_email" className='details__label'>Email</label>
                            <input type='text' id="contact_email" name="contact_email" placeholder='glyon@instock.com' className='details__input' value={editWarehouse.contact_email} onChange={handleChange}></input>
                        </div>     

                    </article>
                    
                        <div className='button'>
                                {/* <Link to='/'><button className='button__save' onClick={postData}>Save</button></Link> */}
                                <button className='button__save'>Save</button>
                                <button className='button__cancel'>Cancel</button>
                        </div>

                </form>


            </section>
        </>
    )
}
