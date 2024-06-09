import React, { useState, useEffect } from 'react';
import { fetchProviders } from '../services/services';
import '../styles/ProviderList.css';

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
      <h2>Lista de Proveedores</h2>
      <div className='provider-list'>
        {providers.map((provider) => (
          <div key={provider[0]} className='provider-card '>
            <h3>{provider[1]}</h3>
            <p>Contacto: {provider[2]}</p>
            <p>Teléfono: {provider[3]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderList;
