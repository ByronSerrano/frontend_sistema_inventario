import React, { useState } from 'react';
import '../styles/pageStyles/AggProduct.css';
import InputForm from '../components/form/InputForm.jsx';
import { addProvider } from '../services/services';
import ButtonForm from '../components/form/ButtonForm.jsx';

const AddProductForm = () => {
  const [provider, setProvider] = useState({
    nombre: '',
    contacto: '',
    telefono: ''
  });

  const handleChange = (e) => {
    setProvider({
      ...provider,
      [e.target.name]: e.target.value,
    });
  };

  console.log(provider);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProvider(provider);
    alert('Proveedor agregado!');
  };

  return (
    <>
      <h2 className="title">Agregar Proveedor</h2>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <InputForm label="Nombre:" type="text" name="nombre" responseValue={provider.nombre} handleChange={handleChange} />
          <InputForm label="Correo:" type="text" name="contacto" responseValue={provider.contacto} handleChange={handleChange} />
          <InputForm label="Teléfono:" type="text" name="telefono" responseValue={provider.telefono} handleChange={handleChange} />
          <ButtonForm route="proveedores"/>
        </form>
      </div>
    </>
  );
};

export default AddProductForm;
