import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { allProducts } from '../utils/data';

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
      <ul>
        {allProducts.map((product) => (
          <li key={product[0]}>
            <h3>{product[1]}</h3>
            <p>{product[2]}</p>
            <p>Precio: {product[3]}</p>
            <p>Stock: {product[4]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
