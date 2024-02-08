import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NotFound } from "./pages/NotFound";

import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer";
import { Warehouses } from "./pages/Warehouses/Warehouses";
import { Inventories } from "./pages/Inventories/Inventories";
import InventoryList from "./components/InventoryList/InventoryList.jsx";
function App() {
  return (
<InventoryList/>
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Warehouses />} />
    //     <Route path="/:warehouseId" element={<Warehouses />} />
    //     <Route path="/:warehouseId/edit" element={<Warehouses />} />
    //     <Route path="/:warehouseId/delete" element={<Warehouses />} />
    //     <Route path="/warehouse-add" element={<Warehouses />} />
    //     <Route path="/delete-warehouse" element={<Warehouses />} />

    //     <Route path="/inventory-list" element={<Inventories />} />
    //     <Route path="/iventory-list/delete-item" element={<Inventories />} />
    //     <Route path="/inventory-list/:iventoryId" element={<Inventories />} />
    //     <Route
    //       path="/inventory-list/:iventoryId/edit"
    //       element={<Inventories />}
    //     />
    //     <Route path="/add-new-inventory" element={<Inventories />} />

    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
  );
}

export default App;
