import React from 'react';
import LogoT from '../../assets/texte_logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      {/* <div className="top-row-wrapper">
        <div className="header-container top-row">
          <div className="header-left">
            Ouvert 7j/7 : 18h-1h (Lun/Ven) | 12h-1h (Sam/Dim)
          </div>

          <div className="header-right">

            
            <a
              href="https://www.instagram.com/divine.restaurantparis/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="icon-link"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <linearGradient id="ig-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f58529" />
                  <stop offset="25%" stopColor="#dd2a7b" />
                  <stop offset="50%" stopColor="#8134af" />
                  <stop offset="100%" stopColor="#515bd4" />
                </linearGradient>
                <path
                  fill="url(#ig-gradient)"
                  d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                />
              </svg>
            </a>

            <div className="divider"></div>


            <a
              href="https://wa.me/33773248881"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="icon-link"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#25D366"
                  d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.885.765 5.733 2.215 8.236L0 32l7.527-2.186a15.844 15.844 0 008.473 2.396h.001c8.837 0 16-7.164 16-16.001S24.837.396 16 .396zm0 29.455a13.1 13.1 0 01-6.7-1.836l-.48-.283-4.47 1.296 1.3-4.356-.313-.504A13.07 13.07 0 012.89 16.396c0-7.255 5.856-13.11 13.11-13.11 7.255 0 13.111 5.855 13.111 13.11 0 7.254-5.856 13.11-13.11 13.11zm7.56-9.675c-.413-.206-2.448-1.205-2.828-1.341s-.656-.206-.933.206-.72.91-.89 1.09-.33.21-.61.07a8.073 8.073 0 01-2.37-1.46 8.825 8.825 0 01-1.63-2.03c-.17-.28-.02-.43.13-.57.14-.13.3-.34.44-.52s.2-.3.3-.48.05-.36-.02-.5-.63-1.51-.87-2.07c-.23-.56-.47-.49-.63-.5l-.53-.01a1.01 1.01 0 00-.72.34C7.48 7.76 7 8.9 7 10.2c0 1.3.92 2.55 1.05 2.73.14.18 1.81 2.74 4.39 3.74.61.26 1.09.42 1.46.53.61.2 1.16.17 1.59.1.49-.07 1.51-.62 1.73-1.22.21-.61.21-1.13.14-1.22-.07-.09-.26-.14-.54-.28z"
                />
              </svg>
            </a>


          </div>
        </div>
      </div> */}
      
      <div className="bottom-row-wrapper">
        <div className="header-container bottom-row">
          <div className="logo-group">
            <Link to="/">
              <img src="/logo1.png" alt="Logo 1" className="logo" />
            </Link>
            

          </div>

          <div className="button-group">
            <Link to="/menu" className="header-button b1">MENU</Link>
            <Link to="/reservation" className="header-button b2">Réservation </Link>
            
          </div>
        </div>
      </div>
    </header>
  );
}
