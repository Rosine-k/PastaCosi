import React from 'react';
import PrivatisationImg from '../../assets/privatisation1.jpg';

export default function Privatisation() {
  return (
    <section className="privatisation-section">
      <div className="privatisation-text">
        <h2 className="privatisation-h2">Privatisation</h2>
        <p className="privatisation-p">
          Vous souhaitez privatiser notre espace pour un événement 
          spécial : anniversaire, mariage, EVJF, soirée professionnelle ou autre ? 
          Chez Divine, c’est tout à fait possible !<br /><br />
          <strong>Contactez-nous dès maintenant pour organiser votre moment unique.</strong> 
        </p>       
      </div>

      <div className="privatisation-image">
        <img className='privatisation-img' src={PrivatisationImg} alt="privatisation" />
      </div>
    </section>
  );
}