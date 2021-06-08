import React from 'react';

import './Portada.css';
import codigo from '../../assets/codigo.jpg';
import ft2 from '../../assets/ft2.jpg';

const Portada = () => {
  return (
    <div className="portada-container">
      <img className="fondo" src={codigo} alt="_blank" />
      <div className="shadow-container">
        <img className="imagen" src={ft2} alt="_blank" />
        <div className=" titulo-container">
          <h1>Diego Henríquez </h1>
          <p>Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Portada;
