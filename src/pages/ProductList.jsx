import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pageStyles/ProductList.css';
import { fetchProducts } from '../services/services';
import DivisorLine from '../components/DivisorLine';
import Card from '../components/Card';


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
          <Card key={product[0]}>
            <h3 className="product-name">{product[1]}</h3>
            <DivisorLine />
            <p><b>Descripción:</b> {product[2]}</p>
            <p><b>Precio:</b> {product[3]}</p>
            <p><b>Stock:</b> {product[4]}</p>
          </Card>
        ))}
      </div>
      <Link to="/agregar_producto">
        <button>Agregar</button>
      </Link>
    </div>
  );
};

export default ProductList;