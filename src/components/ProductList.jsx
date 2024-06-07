import React, { useState, useEffect } from 'react';
import axios from 'axios';
// test
// import { allProducts } from '../utils/data';
import '../styles/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://62wlqkc9-5000.use.devtunnels.ms/products');
        console.log(typeof response.data);
        setProducts(response.data);

      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://62wlqkc9-5000.use.devtunnels.ms/delete_product/${id}`);
      // Después de eliminar el producto, se actualiza la lista de productos
      fetchProducts();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

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
            <button onClick={() => deleteProduct(product[0])}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
