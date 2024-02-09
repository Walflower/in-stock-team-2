import "./WarehouseDetails.scss";

export function WarehouseDetails() {

  
  return (
    <main>
        <div className="container">
      <section className="warehouse">
        <div className="warehouse__left info">
          <div className="info__tile-wrapper">
            <h4 className="info__title">WAREHOUSE ADDRESS</h4>
          </div>
          <div className="info__detail-wrapper info__address-wrapper">
            <p className="info__detail">300 Pearl Street Sw,</p>
            <p className="info__detail info__city"> <span>Washington, </span> <span>USA</span></p>
          </div>
        </div>

        <ul className="warehouse__right info">
          <li className="info__wrapper info__wrapper-name">
            <div className="info__tile-wrapper">
              <h4 className="info__title">CONTACT NAME</h4>
            </div>
            <div className="info__detail-wrapper">
              <div className="info__more">
                <p className="info__detail">Graeme Lyone</p>
                <p className="info__detail">Warehouse Manager</p>
              </div>
            </div>
          </li>

          <li className="info__wrapper">
            <div className="info__tile-wrapper">
              <h4 className="info__title">CONTACT INFORMATION</h4>
            </div>
            <div className="info__detail-wrapper">
              <div className="info__more">
                <p className="info__detail">+1 (647) 504-0911</p>
                <p className="info__detail">glyon@instock.com</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      </div>
    </main>
  );
}

export default WarehouseDetails;
