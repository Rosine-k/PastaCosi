// import React from 'react';
// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-links">
//           <a href="/mentions-legales">Mentions légales</a>
//           <a href="/politique-confidentialite">Politique de confidentialité</a>
//           <a href="/politique-cookies">Politique de cookies</a>
//         </div>
//         <p className="footer-concepteur">conçu par Nouvel écran</p>
//       </div>
//     </footer>
//   );
// }

import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-confidentialite">Politique de confidentialité</a>
          <a href="/politique-cookies">Politique de cookies</a>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-social">

          {/* Instagram */}
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

          {/* TikTok */}
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="icon-link"
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2d5016"
                d="M16.5 1c.3 2.2 1.8 3.9 4 4.2v3.1c-1.6.1-3.1-.4-4.5-1.2v6.5c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7 0 1 .1v3.3c-.3-.1-.6-.2-1-.2-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7V1h2.8z"
              />
            </svg>
          </a>

        </div>


        <p className="footer-concepteur">conçu par Nouvel écran</p>
      </div>
    </footer>
  );
}
