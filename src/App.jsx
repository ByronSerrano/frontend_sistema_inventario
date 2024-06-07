import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProviderList from './components/ProviderList';
import PurchaseList from './components/PurchaseList';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/productos" />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/proveedores" element={<ProviderList />} />
          <Route path="/compras" element={<PurchaseList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
