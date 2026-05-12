import React from 'react';
import PrivatisationImg from '../../assets/privatisation1.jpg';

export default function Privatisation() {
  return (
    <section className="privatisation-section">

      {/* Image fond pleine largeur */}
      <div className="privatisation-bg">
        <img src={PrivatisationImg} alt="Salle de restaurant Pasta Cosi" />
      </div>

      {/* Contenu */}
      <div className="privatisation-content">

        <p className="privatisation-eyebrow">Événements privés</p>

        <h2 className="privatisation-h2">
          Privatisez<br /><em>notre espace</em>
        </h2>

        <div className="privatisation-divider">
          <span className="privatisation-divider__dot" />
        </div>

        <p className="privatisation-p">
          Certains moments méritent un cadre à la hauteur. Pasta Cosi vous propose
          une privatisation exclusive de son espace pour vos événements les plus précieux. 
          De l'anniversaire intime à la grande célébration, en passant par les soirées professionnelles, 
          notre équipe orchestre chaque détail avec soin pour que votre soirée soit exactement comme vous l'imaginez.
        </p>

        <div className="privatisation-tags">
          {['Anniversaire', 'Mariage', 'EVJF', 'Soirée pro', '& plus'].map((tag) => (
            <span key={tag} className="privatisation-tag">{tag}</span>
          ))}
        </div>

        <a href="mailto:contact@pasta-cosi.com" className="privatisation-cta">
          Nous contacter
        </a>

      </div>
    </section>
  );
}

