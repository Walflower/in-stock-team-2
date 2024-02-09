import { useSearchParams } from 'react-router-dom'
import './EditWarehouse.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export function EditWarehouse() {
    
    const { warehouseId } = useParams();


    // const [currentWarehouse, setCurrentWarehoue] = useState

    // useEffect(() ={
    //     const getCurrentWarehouse = await axios.patch()
    // }, [])

    return (
        <>
            <h1 className='edit__warehouse'>Edit Warehouse</h1>

            <section className='details'>

                <form className='details__form'>

                    <article className='details__container'>

                        <h2 className='details__subheader'>Warehouse Details</h2>
                        
                        <div className='details__subcontainer'>
                            <label htmlFor="location" className='details__label'>Warehouse Name</label>
                            <input type='text' id="location" name="location" placeholder='Washington' className='details__input'></input>
                        </div>

                        <div className='details__subcontainer'>
                            <label htmlFor="street" className='details__label'>Street Address</label>
                            <input type='text' id="street" name="street" placeholder='300 Pearl Street SW'  className='details__input'></input>
                        </div>

                        <div className='details__subcontainer'>
                            <label htmlFor="city" className='details__label'>City</label>
                            <input type='text' id="city" name="city" placeholder='Washington'  className='details__input'></input>
                        </div>

                        <div className='details__subcontainer'>
                            <label htmlFor="country" className='details__label'>Country</label>
                            <input type='text' id="country" name="country" placeholder='USA'  className='details__input'></input>
                        </div>    

                        </article>

                    <div className='divider'></div>
                
                    <article className='details__container'>

                        <h2 className='details__subheader'>Contact Details</h2>
                        
                        <div className='details__subcontainer'>
                            <label htmlFor="name" className='details__label'>Contact Name</label>
                            <input type='text' id="name" name="name" placeholder='Graeme Lyon' className='details__input'></input>
                        </div>    

                        <div className='details__subcontainer'>
                            <label htmlFor="position" className='details__label'>Position</label>
                            <input type='text' id="position" name="position" placeholder='Warehouse Manager' className='details__input'></input>
                        </div>    


                        <div className='details__subcontainer'>
                            <label htmlFor="phone" className='details__label'>Phone Number</label>
                            <input type='number' id="phone" name="phone" placeholder='+1 (647) 504-0911' className='details__input'></input>
                        </div>    

                        <div className='details__subcontainer'>
                            <label htmlFor="email" className='details__label'>Phone Number</label>
                            <input type='email' id="email" name="email" placeholder='glyon@instock.com' className='details__input'></input>
                        </div>     

                    </article>
                    
                        <div className='button'>
                                <button className='button__save'>Save</button>
                                <button className='button__cancel'>Cancel</button>
                        </div>

                </form>


            </section>
        </>
    )
}
