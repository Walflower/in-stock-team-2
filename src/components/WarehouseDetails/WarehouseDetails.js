import { Routes, Route } from "react-router-dom";
import "./WarehouseDetails.scss";
import { useParams } from "react-router-dom";

export function WarehouseDetails() {
  const { warehouseId } = useParams();

  return (
    <>
      <p>id: {warehouseId}</p>
      <h1>Title box:Washington</h1>
      <div>detailed list</div>
      <div>List of individual warehouse inventory</div>
    </>
  );
}
