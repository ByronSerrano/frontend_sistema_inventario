import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductList.css';
import { fetchProducts } from '../services/services';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };
    
    getProducts();
  }, []);

 
  return (
    <div>
      <h2>Lista de Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product[0]} className="product-card">
            <h3>{product[1]}</h3>
            <p>{product[2]}</p>
            <p>Precio: {product[3]}</p>
            <p>Stock: {product[4]}</p>
          </div>
        ))}
      </div>
      <Link to="/agregar_producto">
        <button>Agregar</button>
      </Link>
    </div>
  );
};

export default ProductList;
