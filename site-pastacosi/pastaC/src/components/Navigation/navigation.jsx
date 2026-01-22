import React from 'react';
import imgMenu from "../../assets/menu.jpg";
import imgReservation from "../../assets/resa.jpg";
import { Link } from 'react-router-dom';

function NavigationCards() {
  return (
    <div className="nav-section">
      <div className="nav-card">
        <Link to="/menu">
          <img src={imgMenu} alt="Menu" className="nav-img" />
          <div className="nav-overlay">
            <span className="nav-text">MENU</span>
          </div>
        </Link>
        
      </div>
      <div className="nav-card">
        <Link to="/reservation">
          <img src={imgReservation} alt="Réservation" className="nav-img" />
          <div className="nav-overlay">
            <span className="nav-text">RÉSERVATION</span>
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default NavigationCards;
