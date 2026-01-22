import React from 'react';
export default function Contac() {
  return (
    <section className="contact-section">
      <div className="contact-section-inner">
   <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41951.05353171672!2d2.3738542564416893!3d48.916519268274556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d9a64ba2693%3A0x7cf6beb3d9d53a50!2s12%20Rue%20du%20Surmelin%2C%20Paris!5e0!3m2!1sfr!2sfr!4v1752690374824!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte du restaurant DIVINE"
        ></iframe>
      </div>

      <div className="contact-info">
        <h2 className="contact-title">DIVINE</h2>
        <p>
          Le restaurant se trouve dans le quartier de Pelleport dans le 20ème arrondissement.
        </p>
        <hr />
        <div className="contact-text">
          <p><strong>ADRESSE</strong></p>
          <p>12 rue du Surmelin 75020 Paris</p>
        </div>
        
        <hr />
        <div className="contact-text">
          <p> <strong>TÉLÉPHONE</strong><br /></p>
        <p>07 73 24 88 81</p>
        </div>
        
        <hr />

        <div className="contact-text">

          <p><strong>EMAIL</strong><br /></p>
          <p>contact@divineparisrestaurant.fr</p>
        </div>
        
        <hr />

        <div className="contact-text">
        <p><strong>HORAIRES</strong><br /></p>
        <p>Lundi au Vendredi - 18h à 1h<br />
          Samedi et dimanche - 12h à 1h</p>

        </div>
        
        <hr />
      </div>
      </div>
   
    </section>
  );
}
