import React, { useState, useEffect } from 'react';
import axios from 'axios';
// test
// import { allPurchases } from '../utils/data';
import '../styles/PurchaseList.css';

const PurchaseList = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get('https://62wlqkc9-5000.use.devtunnels.ms/compras');
        console.log(response.data.compras);
        setPurchases(response.data.compras);
      } catch (error) {
        console.error('Error al obtener las compras:', error);
      }
    };

    fetchPurchases();
  }, []);

  return (
    <div>
      <h2>Lista de Compras</h2>
      <div className='purchase-list'>
        {purchases.map((purchase, index) => (
          <div key={index} className='purchase-card'>
            <h3>Compra {index + 1}</h3>
            {purchase.slice(1).map((item, index) => ( // Excluye el primer elemento (ID)
            <p key={index}>{item}</p>
            ))}
            <button>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseList;
