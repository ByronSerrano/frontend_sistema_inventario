import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { allProducts } from '../utils/data';
import '../styles/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://s6qc8316-5000.use2.devtunnels.ms/products');
        setProducts(response.data); 
        console.log(response.data);

      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    // fetchProducts();
  }, []);


  return (
    <div>
      <h2>Lista de Productos</h2>
      <div className="product-list">
        {allProducts.map((product) => (
          <div key={product[0]} className="product-card">
            <h3>{product[1]}</h3>
            <p>{product[2]}</p>
            <p>Precio: {product[3]}</p>
            <p>Stock: {product[4]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
