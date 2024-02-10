import { useParams } from "react-router-dom"
import "./AddNewWarehouse.scss"
import { useState } from "react"
import { Link } from "react-router-dom";

export function AddNewWarehouse() {

    const { REACT_APP_API_BASE_PATH } = process.env;
    const {warehouseId} = useParams()

    const [warehouse_name, setLocation] = useState({warehouse_name: ''})
    const [address, setAddress] = useState({address: ''})
    const [city, setCity] = useState({city: ''})
    const [country, setCountry] = useState({country: ''})
    const [contact_name, setContact] = useState({contact_name: ''})
    const [contact_position, setPosition] = useState({contact_position: ''})
    const [contact_phone, setPhone] = useState({contact_phone: ''})
    const [contact_email, setEmail] = useState({contact_email:''})

    // POST new data api
    const handleSubmit = (e) => {
        e.preventDefault()
        const newPost = {
        warehouse_name,
        address,
        city,
        country,
        contact_name,
        contact_position,
        contact_phone,
        contact_email}
        console.log(handleSubmit)

        fetch(`http://localhost:8080"/warehouses`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        }).then(() => {
            console.log("new post added")
        })
        }

    return (
        <>
            <h1 className='edit__warehouse'>Add New Warehouse</h1>

            <section className='details'>

                <form onSubmit={handleSubmit} className='details__form'>

                    <article className='details__container'>

                        <h2 className='details__subheader'>Warehouse Details</h2>
                        
                        <div className='details__subcontainer'>
                            <label htmlFor="location" className='details__label'>Warehouse Name</label>
                            <input type='text' id="location" name="location" placeholder='Warehouse Name' className='details__input' onChange={(e) => setLocation(e.target.value)}></input>
                        </div>

                        <div className='details__subcontainer'>
                            <label htmlFor="street" className='details__label'>Street Address</label>
                            <input type='text' id="street" name="street" placeholder='Street Address' className='details__input' onChange={(e) => setAddress(e.target.value)}></input>
                        </div>

                        <div className='details__subcontainer'>
                            <label htmlFor="city" className='details__label'>City</label>
                            <input type='text' id="city" name="city" placeholder='City'  className='details__input' onChange={(e) => setCity(e.target.value)}></input>
                        </div>

                        <div className='details__subcontainer'>
                            <label htmlFor="country" className='details__label'>Country</label>
                            <input type='text' id="country" name="country" placeholder='Country'  className='details__input' onChange={(e) => setCountry(e.target.value)}></input>
                        </div>    

                        </article>

                    <div className='divider'></div>
                
                    <article className='details__container'>

                        <h2 className='details__subheader'>Contact Details</h2>
                        
                        <div className='details__subcontainer'>
                            <label htmlFor="contact" className='details__label'>Contact Name</label>
                            <input type='text' id="contact" name="contact" placeholder='contact' className='details__input' onChange={(e) => setContact(e.target.value)}></input>
                        </div>    

                        <div className='details__subcontainer'>
                            <label htmlFor="position" className='details__label'>Position</label>
                            <input type='text' id="position" name="position" placeholder='Position' className='details__input' onChange={(e) => setPosition(e.target.value)}></input>
                        </div>    

                        <div className='details__subcontainer'>
                            <label htmlFor="phone" className='details__label'>Phone Number</label>
                            <input type='text' id="phone" name="phone" placeholder='Phone Number' className='details__input' onChange={(e) => setPhone(e.target.value)}></input>
                        </div>    

                        <div className='details__subcontainer'>
                            <label htmlFor="email" className='details__label'>Phone Number</label>
                            <input type='email' id="email" name="email" placeholder='Email' className='details__input' onChange={(e) => setEmail(e.target.value)}></input>
                        </div>     

                    </article>
                    
                        <div className='button'>
                            <button className='button__cancel'>Cancel</button>
                            <Link to='/'><button className='button__add'>Add Warehouse</button></Link>
                        </div>

                </form>


            </section>
        </>
    )
}