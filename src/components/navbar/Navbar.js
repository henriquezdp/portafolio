import React, { useState } from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbarItems">
      <div className="navbar-logo">
        Logo <i className="fas fa-code"></i>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url} onClick={handleClick}>
                {item.titulo}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
