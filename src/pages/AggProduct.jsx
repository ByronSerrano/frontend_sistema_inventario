import React, { useState } from 'react';
import '../styles/pageStyles/AggProduct.css';
import InputForm from '../components/form/InputForm.jsx';
import { addProduct } from '../services/services';
import ButtonForm from '../components/form/ButtonForm.jsx';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: ''
  });

  const handleChange = (e) => {
    let value = e.target.name === 'precio' || e.target.name === 'stock' ? parseInt(e.target.value) : e.target.value;
    setProduct({
      ...product,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
  };

  return (
    <>
      <h2 className="title">Agregar Producto</h2>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <InputForm label="Nombre:" type="text" name="nombre" responseValue={product.nombre} handleChange={handleChange} />
          <InputForm label="Descripción:" type="text" name="descripcion" responseValue={product.descripcion} handleChange={handleChange} />
          <InputForm label="Precio:" type="number" name="precio" responseValue={product.precio} handleChange={handleChange} />
          <InputForm label="Stock:" type="number" name="stock" responseValue={product.stock} handleChange={handleChange} />
          <ButtonForm />
        </form>
      </div>
    </>
  );
};

export default AddProductForm;
