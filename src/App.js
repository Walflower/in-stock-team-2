import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Warehouses } from './components/Warehouses/Warehouses';
import { WarehouseDetails } from './components/WarehouseDetails/WarehouseDetails';
import { AddNewWarehouse } from './components/AddNewWarehouse/AddNewWarehouse';
import {EditWarehouse} from './components/EditWarehouse/EditWareHouse';
import { Inventory } from './components/Inventory/Inventory';
import { EditInventory } from './components/EditInventory/EditInventory';
import { NotFound } from './pages/NotFound';
import { AddNewInventory } from './components/AddNewInventory/AddNewInventory';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={< Warehouses/>}/>
        <Route path='/delete warehouse' element={<Warehouses/>}/>
        <Route path='/warehouse details' element={<WarehouseDetails/>}/>
        <Route path='/edit warehouse' element={<EditWarehouse/>}/>
        <Route path='/add new warehouse' element={<AddNewWarehouse/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/delete item' element={<Inventory/>}/>
        <Route path='/edit item' element={<EditInventory/>}/>
        <Route path='/add new inventory' element={<AddNewInventory/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
