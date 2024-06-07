import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/proveedores">Proveedores</Link>
        </li>
        <li>
          <Link to="/compras">Compras</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
