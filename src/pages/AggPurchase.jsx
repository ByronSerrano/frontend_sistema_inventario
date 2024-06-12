import React, { useState } from 'react';
import '../styles/pageStyles/AggProduct.css';
import InputForm from '../components/form/InputForm.jsx';
import { addPurchase } from '../services/services';
import ButtonForm from '../components/form/ButtonForm.jsx';

const AddPurchaseForm = () => {
  const [purchase, setPurchase] = useState({
    id_producto: '',
    id_proveedor: '',
    fecha: '',
    cantidad: ''
  });

  const handleChange = (e) => {
    let value = e.target.name === 'cantidad' || e.target.name === 'id_producto' || e.target.name === 'id_proveedor'
        ? parseInt(e.target.value) : e.target.value;
    setPurchase({
      ...purchase,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
        addPurchase(purchase);
        console.log(purchase.fecha);
        alert('Compra agregada!');
    }
    catch (error) {
        console.error('Error:', error);
        alert('Error al agregar la compra');
    }
  };

  return (
    <>
      <h2 className="title">Agregar Compra</h2>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <InputForm label="ID del Producto:" type="text" name="id_producto" responseValue={purchase.id_producto} handleChange={handleChange} />
          <InputForm label="ID del Proveedor:" type="text" name="id_proveedor" responseValue={purchase.id_proveedor} handleChange={handleChange} />
          <InputForm label="Fecha:" type="date" name="fecha" responseValue={purchase.fecha} handleChange={handleChange} />
          <InputForm label="Cantidad:" type="number" name="cantidad" responseValue={purchase.cantidad} handleChange={handleChange} />
          <ButtonForm route="compras"/>
        </form>
      </div>
    </>
  );
};

export default AddPurchaseForm;
