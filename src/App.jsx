import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProviderList from './components/ProviderList';
import PurchaseList from './components/PurchaseList';
import AggProduct from './pages/AggProduct';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar className="navigation" />
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/productos" />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/proveedores" element={<ProviderList />} />
          <Route path="/compras" element={<PurchaseList />} />
          <Route path="/agregar_producto" element={<AggProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
