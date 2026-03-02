import React, { useEffect, useState } from 'react';
import LogoT from '../../assets/texte_logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // hauteur du banner (ajuste si besoin)
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`header ${isScrolled ? 'header--scrolled' : 'header--transparent'}`}
    >
      <div className="bottom-row-wrapper">
        <div className="header-container bottom-row">
          <div className="logo-group">
            <Link to="/">
              <img src="/logo1.png" alt="Logo 1" className="logo" />
            </Link>
          </div>

          <div className="button-group">
            <Link to="/menu" className="header-button b1">MENU</Link>
            <Link to="/reservation" className="header-button b2">Réservation</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

