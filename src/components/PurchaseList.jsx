import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { allPurchases } from '../utils/data';
import '../styles/PurchaseList.css';

const PurchaseList = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get('https://s6qc8316-5000.use2.devtunnels.ms/compras');
        setPurchases(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error al obtener las compras:', error);
      }
    };

    // fetchPurchases();
  }, []);


  return (
    <div>
      <h2>Lista de Compras</h2>
      <div className='purchase-list'>
        {Object.entries(allPurchases).map(([key, value]) => (
          <div key={key} className='purchase-card'>
            <h3>{key}</h3>
            {value.map((item, index) => (
              <p key={index}>{item.join(', ')}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseList;
