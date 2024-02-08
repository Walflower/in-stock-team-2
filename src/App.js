import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound } from "./pages/NotFound";

import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer";
import { Warehouses } from "./pages/Warehouses/Warehouses";
import { Inventories } from "./pages/Inventories/Inventories";


import { WarehouseDetails } from "./components/WarehouseDetails/WarehouseDetails";

function App() {
  //DEMO
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <div className="main__container">
          <Routes>
            <Route path="/" element={<Warehouses />} />
            <Route path="/:warehouseId" element={<WarehouseDetails />} />

            <Route
              path="/:warehouseId/edit"
              element={
                <>
                  <h1>edit the warehouse</h1>
                </>
              }
            />
            <Route
              path="/:warehouseId/delete"
              element={
                <>
                  <h1>delete the warehouse</h1>
                </>
              }
            />
            <Route path="/warehouse-add" element={<Warehouses />} />
            <Route path="/delete-warehouse" element={<Warehouses />} />

            <Route path="/inventory-list" element={<Inventories />} />
            <Route
              path="/iventory-list/delete-item"
              element={<Inventories />}
            />
            <Route
              path="/inventory-list/:iventoryId"
              element={<Inventories />}
            />
            <Route
              path="/inventory-list/:iventoryId/edit"
              element={<Inventories />}
            />
            <Route path="/add-new-inventory" element={<Inventories />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
