import React from 'react';
export default function Contac() {
  return (
    <section className="contact-section">
      <div className="contact-section-inner">
   <div className="contact-map">
        
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5246.731582524113!2d2.373044775963564!3d48.889365598526865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dd134434585%3A0x16b7d31e4d0bb848!2s78%20Av.%20de%20Flandre%2C%2075019%20Paris!5e0!3m2!1sfr!2sfr!4v1769297276398!5m2!1sfr!2sfr" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }}
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Carte du restaurant PASTA COSI"
        >

      </iframe>
         
      </div>

      <div className="contact-info">
        <div className='contact-container'>
          <h2 className="contact-title">
            <span className='contact-stroke'>PASTA COSI</span> 
            <span className='contact-fill'>PASTA COSI</span> 
          </h2>

        </div>
        
        
        <hr />
       
        <div className="contact-text">
          <p><strong>ADRESSE</strong></p>
          <p>78 avenue de Flandre 75019 Paris</p>
          
        </div>
        
        <hr />
        
        <div className="contact-text">
          <p> <strong>TÉLÉPHONE</strong><br /></p>
          <p>07 62 20 90 33</p>
          
        </div>
        
        <hr />
        
        <div className="contact-text">

          <p><strong>EMAIL</strong><br /></p>
          <p>contact@pastacosi.fr</p>
          
        </div>
        
        <hr />
        
        <div className="contact-text">
        <p><strong>HORAIRES</strong><br /></p>
        <p>Lundi au Jeudi - 12h à 00h<br />
          Vendredi et Samedi - 12h à 00h<br />
          Dimanche - 12h à 00h
          </p>
          

        </div>
        
        
      </div>
      </div>
   
    </section>
  );
}
