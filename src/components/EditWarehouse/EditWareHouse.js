import { useSearchParams } from 'react-router-dom'
import './EditWarehouse.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

export function EditWarehouse() {

    // const [currentWarehouse, setCurrentWarehoue] = useState

    // useEffect(() ={
    //     const getCurrentWarehouse = await axios.patch()
    // }, [])

    return (
        <>
            <h2 className='edit__warehouse'>Edit Warehouse</h2>

            <section className='details'>

                <form className='details__form'>

                    <article className='details__container'>
                        <h2 className='details__warehouse'>Warehouse Details</h2>
                    
                        <label for="name" className='details__label'>Warehouse Name</label>
                        <input type='text' id="name" name="name" placeholder='Washington' className='details__input'></input>

                        <label for="street" className='details__label'>Street Address</label>
                        <input type='text' id="street" name="street" placeholder='300 Pearl Street SW'  className='details__input'></input>

                        <label for="city" className='details__label'>City</label>
                        <input type='text' id="city" name="city" placeholder='Washington'  className='details__input'></input>

                        <label for="country" className='details__label'>Country</label>
                        <input type='text' id="country" name="country" placeholder='USA'  className='details__input'></input>
                        </article>

                    <div className='divider'></div>
                
                    <article className='details__container'>
                        <h2 className='details__contact'>Contact Details</h2>
                        
                        <label for="name" className='details__label'>Contact Name</label>
                        <input type='text' id="name" name="contact name" placeholder='Graeme Lyon' className='details__input'></input>

                        <label for="position" className='details__label'>Position</label>
                        <input type='text' id="position" name="contact position" placeholder='Warehouse Manager' className='details__input'></input>

                        <label for="phone" className='details__label'>Phone Number</label>
                        <input type='number' id="phone" name="phone number" placeholder='+1 (647) 504-0911' className='details__input'></input>

                        <label for="email" className='details__label'>Email</label>
                        <input type='email' id="email" name="contact email" placeholder='glyon@instock.com' className='details__input'></input>
                        </article>
                    
                        <div className='button'>
                                <button className='button__save'></button>
                                <button className='button__cancel'></button>
                        </div>

                </form>


            </section>
        </>
    )
}