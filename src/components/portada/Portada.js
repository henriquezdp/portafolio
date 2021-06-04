import React from 'react';
import './Portada.css';
import ft2 from '../../assets/ft2.jpg';

const Portada = () => {
  return (
    <div className="portada-container">
      <img className="imagen" src={ft2} />
      <h1>Diego Henríquez </h1>
      <p>Frontend Developer</p>
    </div>
  );
};
export default Portada;
