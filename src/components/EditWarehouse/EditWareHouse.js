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
            <h1 className='edit__warehouse'>Edit Warehouse</h1>

            <section className='details'>

            <form className='details__form'>

                <div>
                    <h2 className='details__warehouse'></h2>
                   
                   <label for="name" className='details__label'></label>
                   <input type='text' id="name" name="name" placeholder='Washington' className='details__input'></input>

                   <label for="street" className='details__label'></label>
                   <input type='text' id="street" name="street" placeholder='300 Pearl Street SW'  className='details__input'></input>

                   <label for="city" className='details__label'></label>
                   <input type='text' id="city" name="city" placeholder='Washington'  className='details__input'></input>

                   <label for="country" className='details__label'></label>
                   <input type='text' id="country" name="country" placeholder='USA'  className='details__input'></input>

                </div>
            
                <div>
                <h2 className='details__contact'></h2>
                   
                   <label for="name" className='details__label'></label>
                   <input type='text' id="name" name="contact name" placeholder='Graeme Lyon' className='details__input'></input>

                   <label for="position" className='details__label'></label>
                   <input type='text' id="name" name="contact name" placeholder='Warehouse Manager' className='details__input'></input>

                   <label for="city" className='details__label'></label>
                   <input type='number' id="name" name="contact name" placeholder='+1(647)504-0911' className='details__input'></input>

                   <label for="country" className='details__label'></label>
                   <input type='email' id="name" name="contact name" placeholder='glyon@instock.com' className='details__input'></input>

                </div>
            
                   <div className='button'>
                        <button className='button__save'></button>
                        <button className='button__cancel'></button>
                   </div>

               </form>


            </section>
        </>
    )
}