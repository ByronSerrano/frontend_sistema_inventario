import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { allProviders } from '../utils/data';
import '../styles/ProviderList.css';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await axios.get('https://s6qc8316-5000.use2.devtunnels.ms/consult_supplier');
        setProviders(response.data);
      } catch (error) {
        console.error('Error al obtener los proveedores:', error);
      }
    };

    // fetchProviders();
  }, []);

  return (
    <div>
      <h2>Lista de Proveedores</h2>
      <div className='provider-list'>
        {allProviders.map((provider) => (
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
