import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WarehouseInventory, Warehouses } from './components/WarehouseInventory/WarehouseInventory';
import { WarehouseDetails } from './components/WarehouseDetails/WarehouseDetails';
import { AddNewWarehouse } from './components/AddNewWarehouse/AddNewWarehouse';
import {EditWarehouse} from './components/EditWarehouse/EditWarehouse';
import { EditInventory } from './components/EditInventory/EditInventory';
import { NotFound } from './pages/NotFound';
import { AddNewInventory } from './components/AddNewInventory/AddNewInventory';
import {InventoryList} from './components/InventoryList/InventoryList';
import { DeleteInventoryItem } from './components/DeleteInventoryItem/DeleteInventoryItem';
import { InventoryItemDetails } from './components/InventoryItemDetails/InventoryItemDetails';

function App() {
  return (
    <BrowserRouter>
      {/* <Header />  */}
      <Routes>
        <Route path='/' element={< Warehouses/>}/>
        <Route path='/delete-warehouse' element={<Warehouses/>}/>
        <Route path='/warehouse-details' element={<WarehouseDetails/>}/>
        <Route path='/warehouse-inventory' element={<WarehouseInventory/>}/>
        <Route path='/edit-warehouse' element={<EditWarehouse/>}/>
        <Route path='/add-new-warehouse' element={<AddNewWarehouse/>}/>

        <Route path='/inventory-list' element={<InventoryList/>}/>
        <Route path='/delete-item' element={<DeleteInventoryItem/>}/>
        <Route path='/inventory-item-details' element={<InventoryItemDetails/>}/>
        <Route path='/edit-item' element={<EditInventory/>}/>
        <Route path='/add-new-inventory' element={<AddNewInventory/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
