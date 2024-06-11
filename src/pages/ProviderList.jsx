import React, { useState, useEffect } from 'react';
import { fetchProviders } from '../services/services';
import '../styles/pageStyles/ProviderList.css';
import DivisorLine from '../components/DivisorLine';
import Card from '../components/Card';
import ButtonRoute from '../components/ButtonRoute';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const getProviders = async () => {
      const response = await fetchProviders();
      setProviders(response);
    };
    
    getProviders();
  }, []);

  return (
    <div>
      <h2 className="title">Lista de Proveedores</h2>
      <div className='provider-list'>
        {providers.map((provider) => (
          <Card key={provider[0]}>
            <h3 className="provider-name">{provider[1]}</h3>
            <DivisorLine />
            <p><b>Contacto:</b> {provider[2]}</p>
            <p><b>Teléfono:</b> {provider[3]}</p>
          </Card>
        ))}
      </div>
      <ButtonRoute route="agregar_proveedor" text="Agregar"/>
    </div>
  );
};

export default ProviderList;
