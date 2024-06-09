import React, { useState, useEffect } from 'react';
import { fetchPurchases } from '../services/services';
import '../styles/PurchaseList.css';

const PurchaseList = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const getPurchases = async () => {
      const response = await fetchPurchases();
      setPurchases(response);
    };

    getPurchases();
  }, []);

  return (
    <div>
      <h2>Lista de Compras</h2>
      <div className='purchase-list'>
        {purchases.map((purchase, index) => (
          <div key={index} className='purchase-card'>
            <h3>Compra {index + 1}</h3>
            {purchase.slice(1).map((item, index) => ( // Exclude the first element (ID)
            <p key={index}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseList;
