import React, { useState, useEffect } from 'react';
import { fetchProviders } from '../services/services';
import '../styles/pageStyles/ProviderList.css';
import DivisorLine from '../components/DivisorLine';

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
            <DivisorLine />
            <p><b>Contacto:</b> {provider[2]}</p>
            <p><b>Teléfono:</b> {provider[3]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderList;
