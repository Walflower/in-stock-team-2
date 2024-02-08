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
            {/** part of demo */}
            <Route path="/" element={<Warehouses />} />
            {/**example:This WarehouseDetails component would two tickets, 
             * #25 warewhouse details and #24 the warehouse inventory list
             * which will get the info from the api respectively.
             * The page title/warehouse name will come from the mapping.
             * any other components (buttons/action images/in or outof stock
             * can be imported from the ready made style mixin*/}
            <Route path="/:warehouseId" element={<WarehouseDetails />} /> 

            <Route
              path="/:warehouseId/edit"
              element={
                <>{/**the h1 tag would be the EditWarehouse component */}
                  <h1>edit the warehouse</h1>
                </>
              }
            />
            <Route
              path="/:warehouseId/delete"
              element={
                <>{/**the h1 tag would be the Delete warehouse component */}
                  <h1>delete the warehouse</h1>
                </>
              }
            />
            {/** end of demo */}

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
