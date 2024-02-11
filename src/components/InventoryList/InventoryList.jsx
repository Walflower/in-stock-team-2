
import "./InventoryList.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

function InventoryList({inventoryList, isWarehouse, WarehouseId}) {


  return (
    <main>
      <div className="inventory-container">
        <div className="inventory">
          <div className="inventory-tablet">
            <ul className="inventory__row-tablet inventory__titles-wrapper">
              <li className="inventory__title-container">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">INVENTORY ITEM</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>

              <li className="inventory__title-container">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">CATEGORY</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>

              <li className="inventory__title-container inventory__title-status">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">STATUS</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>

              <li className="inventory__title-container">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">QUANTITY</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>

              { !isWarehouse &&(
              <li className="inventory__title-container">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">WAREHOUSE</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>)}

              <li className="inventory__title-container">
                <div className="inventory__title-wrapper">
                  <h4 className="inventory__title">ACTIONS</h4>
                </div>
                <div>
                  <img className="icon" src={sortIcon} alt="sort" />
                </div>
              </li>
            </ul>

            {inventoryList.map((inventory) => {
              return(<ul key={inventory.id} className="inventory__row-tablet inventory__item-tablet">
              <li className="inventory__info-tablet">
                <Link to={`/inventory-list/:${inventory.id}`} className="inventory__detail-tablet inventory__detail--link-tablet">
                  {inventory.item_name}
                </Link>
              </li>

              <li className="inventory__info-tablet">
                <p className="inventory__detail-tablet">{inventory.category}</p>
              </li>
              <li className="inventory__info-tablet inventory__info-tag-tablet">
              
                <p className={`inventory__detail-tablet inventory__detail-tag-tablet 
                      ${inventory.status.toLowerCase() === "in stock" ? "inventory__detail-tag-in" : "inventory__detail-tag-out"}`}>
                  {inventory.status}
                      </p>
              </li>

              <li className="inventory__info-tablet">
                <p className="inventory__detail-tablet">{inventory.quantity}</p>
              </li>
              { !isWarehouse &&(
              <li className="inventory__info-tablet">
                <p className="inventory__detail-tablet">{inventory.warehouse_name}</p>
              </li>)}

              <li className="inventory__info-tablet inventory__actions-tablet">
                <Link  to={`/inventory-list/${inventory.id}/delete-item`}  className="inventory__del-wrapper-tablet">
                  <img
                    className="invenory__del-tablet"
                    src={deleteIcon}
                    alt="drop down"
                  />
                </Link>
                <Link  to={`/inventory-list/${inventory.id}/edit`}  className="inventory__edit-wrapper-tablet">
                  <img className="invenory__edit-tablet" src={editIcon} />
                </Link>
              </li>
            </ul>
            );
          })}
          </div>
          {/* mobile */}
          <div className="inventory__container">
          {inventoryList.map((inventory) => {
            return (<section key={inventory.id} className="inventory__list">
              <ul className="inventory__item">
                <div className="inventory__left">
                  <li className="inventory__info">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">INVENTORY ITEM</h4>
                    </div>
                    <div className="inventory__detail-content">
                    <Link to={`/inventory-list/:${inventory.id}`}  className="inventory__detail inventory__detail--link">
                      {inventory.item_name}
                      </Link>
                    </div>
                  </li>

                  <li className="inventory__info">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">CATEGORY</h4>
                    </div>
                    <div className="inventory__detail-wrapper">
                      <p className="inventory__detail">{inventory.category}</p>
                    </div>
                  </li>
                </div>

                <div className="inventory__right">
                  <li className="inventory__info inventory__info-tag">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">STATUS</h4>
                    </div>
                    <div className="inventory__detail-wrapper">
                      
                      <p className={`inventory__detail inventory__detail-tag 
                      ${inventory.status.toLowerCase() === "in stock" ? "inventory__detail-tag-in" : "inventory__detail-tag-out"}`}>
                  {inventory.status}
                      </p>
                    </div>
                  </li>

                  <li className="inventory__info">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">QTY</h4>
                    </div>
                    <div className="inventory__detail-wrapper">
                      <p className="inventory__detail">{inventory.quantity}</p>
                    </div>
                  </li>
                  { !isWarehouse &&(
                  <li className="inventory__info">
                    <div className="inventory__header-wrapper">
                      <h4 className="inventory__header">WAREHOUSE</h4>
                    </div>
                    <div className="inventory__detail-wrapper">
                      <p className="inventory__detail">{inventory.warehouse_name}</p>
                    </div>
                  </li>)}
                </div>
              </ul>

              <div className="inventory__actions">
                <Link  to={`/inventory-list/${inventory.id}/delete-item`} className="inventory__del-wrapper">
                  <img
                    className="invenory__del"
                    src={deleteIcon}
                    alt="drop down"
                  />
                </Link>
                <Link to={`/inventory-list/${inventory.id}/edit`} className="inventory__edit-wrapper">
                  <img className="invenory__edit" src={editIcon} />
                </Link>
              </div>
            </section>
             );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default InventoryList;
