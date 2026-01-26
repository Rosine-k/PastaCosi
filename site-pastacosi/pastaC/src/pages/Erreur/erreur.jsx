import React from 'react';
import { Link } from 'react-router-dom';


export default function Erreur() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Oups... La page que vous cherchez n'existe pas.</p>
      <Link to="/" className="notfound-home-link">
        Retour à l'accueil
      </Link>
    </div>
  );
}
