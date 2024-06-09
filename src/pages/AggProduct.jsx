import React, { useState } from 'react';
import '../styles/AggProduct.css';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: ''
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can call the function to add the product
    console.log(product);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Nombre del Producto:
          <input type="text" name="nombre" value={product.nombre} onChange={handleChange} required />
        </label>
        <label>
          Descripción:
          <input name="descripcion" value={product.descripcion} onChange={handleChange} required />
        </label>
        <label>
          Precio:
          <input type="number" step="0.01" name="precio" value={product.precio} onChange={handleChange} required />
        </label>
        <label>
          Stock:
          <input type="number" name="stock" value={product.stock} onChange={handleChange} required />
        </label>
        <button type="submit">Agregar producto</button>
      </form>
    </div>
  );
};

export default AddProductForm;