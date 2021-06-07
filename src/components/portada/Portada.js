import React from 'react';
import './Portada.css';
import codigo from '../../assets/codigo.jpg';
import ft2 from '../../assets/ft2.jpg';

const Portada = () => {
  return (
    <div className="portada-container">
      <img className="imagen" src={ft2} />
      <img className="fondo" src={codigo} />
      <div className="titulo-container">
        <h1>Diego Henríquez </h1>
        <p>Frontend Developer</p>
      </div>
    </div>
  );
};
export default Portada;
