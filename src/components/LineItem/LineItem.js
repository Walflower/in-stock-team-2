import { InventoryItemsButton } from '../InventoryItemButton/InventoryItemButton';
import './LineItem.scss';


export function LineItem() {
    return (
         <>
            <section>
                <h2 className='subheader'>INVENTORY ITEM</h2> {/* this is for the subheader filter capabilities */}
                    <InventoryItemsButton/>
                <h2 className='subheader'>CATEGORY</h2>
                    <p className=''>{}</p>
                <h2 className='subheader'>STATUS</h2>
                    <p className='in--stock'>{}</p>
                <h2 className='subheader'>QTY</h2>
                    <p className='in--stock'>{}</p>
                    <p className='out--stock'>{}</p>
                <h2 className='subheader'>WAREHOUSE</h2>
                    <p className='in--stock'>{}</p>
                <h2 className='subheader'>WAREHOUSE</h2>

            </section>

         </>
    )
}