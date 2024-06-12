import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProviderList from './pages/ProviderList';
import PurchaseList from './pages/PurchaseList';
import Navbar from './components/Navbar';
import AggProduct from './pages/AggProduct';
import AggProvider from './pages/AggProvider';
import AggPurchase from './pages/AggPurchase';


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
          <Route path="/agregar_proveedor" element={<AggProvider />} />
          <Route path="/agregar_compra" element={<AggPurchase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
