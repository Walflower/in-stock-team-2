import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound } from "./pages/NotFound";

import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer";

import { Warehouses } from "./components/Warehouses/Warehouses";
import { WarehouseDetails } from "./components/WarehouseDetails/WarehouseDetails";
import { DeleteWarehouse } from "./components/DeleteWarehouse/DeleteWarehouse";
import { AddNewWarehouse } from "./components/AddNewWarehouse/AddNewWarehouse";
import { EditWarehouse } from "./components/EditWarehouse/EditWarehouse";
import { EditInventory } from "./components/EditInventory/EditInventory";
import { AddNewInventory } from "./components/AddNewInventory/AddNewInventory";
import { DeleteInventoryItem } from "./components/DeleteInventoryItem/DeleteInventoryItem";
import { InventoryItemDetails } from "./components/InventoryItemDetails/InventoryItemDetails";
import Inventories from "./components/InventoryList/Inventories";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <div className="main__container">
          <Routes>
            <Route path="/" element={<Warehouses />} />
            <Route path="/:warehouseId" element={<WarehouseDetails />} />
            <Route path="/:warehouseId/edit" element={<EditWarehouse />} />
            <Route
              path="/:warehouseId/delete-warehouse"
              element={<DeleteWarehouse />}
            />
            <Route path="/warehouse-add" element={<AddNewWarehouse />} />

            <Route path="/inventory-list" element={<Inventories />} />
            <Route
              path="/inventory-list/:iventoryId"
              element={<InventoryItemDetails />}
            />
            <Route
              path="/inventory-list/:iventoryId/delete-item"
              element={<DeleteInventoryItem />}
            />
            <Route
              path="/inventory-list/:iventoryId/edit"
              element={<EditInventory />}
            />
            <Route path="/inventory-list/add" element={<AddNewInventory />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
