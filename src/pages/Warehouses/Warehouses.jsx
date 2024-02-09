// home page, houseing the warehouse list
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import "./Warehouses.scss";

export function Warehouses() {
  const warehouseId = 2;
  return (
    <main className="main">
      <div className="main__container">
        <section>
          <h1>Warehouses</h1>

          <input></input>
          <button></button>
        </section>
        <WarehouseDetails warehouseId={warehouseId} />

        {/* <section className="main__box">section</section>
				<section className="main__box">section</section>
				<section className="main__box">section</section>
				<section className="main__box">section</section> */}
      </div>
    </main>
  );
}
