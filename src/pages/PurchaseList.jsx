import React, { useState, useEffect } from 'react';
import { fetchPurchases } from '../services/services';
import '../styles/pageStyles/PurchaseList.css';
import DivisorLine from '../components/DivisorLine';
import Card from '../components/Card';

const PurchaseList = () => {
  const [purchases, setPurchases] = useState([]);

  const itemsPurchase = {
    0: 'Descripción',
    1: 'Proveedor',
    2: 'Fecha',
    3: 'Stock'
  }

  useEffect(() => {
    const getPurchases = async () => {
      const response = await fetchPurchases();
      console.log(response);
      setPurchases(response);
    };

    getPurchases();
  }, []);

  return (
    <div>
      <h2 className="title">Lista de Compras</h2>
      <div className='purchase-list'>
        {purchases.map((purchase, index) => (
          <Card key={index}>
            <h3 className="purchase-name">Compra #{index + 1}</h3>
            <DivisorLine />
            {purchase.slice(1).map((item, index) => ( // Exclude the first element (ID)
              <p className="element-purchase" key={index}><b>{itemsPurchase[index]}:</b> {item}</p>
            ))}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PurchaseList;
