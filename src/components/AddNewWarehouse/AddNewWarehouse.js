import { useParams } from "react-router-dom"
import { AddButton } from "../AddButton/AddButton"
import "./AddNewWarehouse.scss"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

export function AddNewWarehouse() {

    const baseURL = "http://localhost:8080"
    const {warehouseId} = useParams()

    const[newWarehouse, setNewWarehouse] = useState([])
    
    useEffect(() => {
        const addNewWarehouse = async () => {
            try {
                const response = await axios.get(`${baseURL}/warehouses`)
                setNewWarehouse(response.data)
            } catch (error) {
                console.error(error)
            }
            }
        addNewWarehouse()
    }, [])

    return (
        <>
            <h1 className='edit__warehouse'>Add New Warehouse</h1>

            <section className='details'>

                <form className='details__form'>

                    <article className='details__container'>

                        <h2 className='details__subheader'>Warehouse Details</h2>
                        
                        <div className='details__subcontainer'>
                            <label htmlFor="location" className='details__label'>Warehouse Name</label>
                            <input type='text' id="location" name="location" placeholder='Warehouse Name' className='details__input'></input>
                        </div>

                        <div className='details__subcontainer'>
                            <label htmlFor="street" className='details__label'>Street Address</label>
                            <input type='text' id="street" name="street" placeholder='Street Address' className='details__input'></input>
                        </div>

                        <div className='details__subcontainer'>
                            <label htmlFor="city" className='details__label'>City</label>
                            <input type='text' id="city" name="city" placeholder='City'  className='details__input'></input>
                        </div>

                        <div className='details__subcontainer'>
                            <label htmlFor="country" className='details__label'>Country</label>
                            <input type='text' id="country" name="country" placeholder='Country'  className='details__input'></input>
                        </div>    

                        </article>

                    <div className='divider'></div>
                
                    <article className='details__container'>

                        <h2 className='details__subheader'>Contact Details</h2>
                        
                        <div className='details__subcontainer'>
                            <label htmlFor="name" className='details__label'>Contact Name</label>
                            <input type='text' id="name" name="name" placeholder='Contact Name' className='details__input'></input>
                        </div>    

                        <div className='details__subcontainer'>
                            <label htmlFor="position" className='details__label'>Position</label>
                            <input type='text' id="position" name="position" placeholder='Position' className='details__input'></input>
                        </div>    


                        <div className='details__subcontainer'>
                            <label htmlFor="phone" className='details__label'>Phone Number</label>
                            <input type='number' id="phone" name="phone" placeholder='Phone Number' className='details__input'></input>
                        </div>    

                        <div className='details__subcontainer'>
                            <label htmlFor="email" className='details__label'>Phone Number</label>
                            <input type='email' id="email" name="email" placeholder='Email' className='details__input'></input>
                        </div>     

                    </article>
                    
                        <div className='button'>
                            <button className='button__cancel'>Cancel</button>
                            <AddButton/>
                        </div>

                </form>


            </section>
        </>
    )
}