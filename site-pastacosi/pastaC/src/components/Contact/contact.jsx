import React, { useState } from 'react';

import Logo from "../../assets/logo-contact.png"; 

const restaurants = [
  {
    id: 1,
    city: "Paris",
    address: "78 avenue de Flandre 75019 Paris",
    phone: "+33 07 62 20 90 33",
    email: "contact@pasta-cosi.com",
    hours: [
      { days: "Lundi – Jeudi", time: "12h – 00h" },
      { days: "Vendredi – Samedi", time: "12h – 01h" },
      { days: "Dimanche", time: "12h – 00h" },
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5246.731582524113!2d2.373044775963564!3d48.889365598526865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dd134434585%3A0x16b7d31e4d0bb848!2s78%20Av.%20de%20Flandre%2C%2075019%20Paris!5e0!3m2!1sfr!2sfr!4v1769297276398!5m2!1sfr!2sfr",
  },
  {
    id: 2,
    city: "Asnières-sur-Seine",
    address: "101 Quai du Dr Dervaux, 92600 Asnières-sur-Seine",
    phone: "+33 7 62 20 90 33",
    email: "contact@pasta-cosi.com",
    hours: [
      { days: "Lundi – Jeudi", time: "12h – 00h" },
      { days: "Vendredi – Samedi", time: "12h – 01h" },
      { days: "Dimanche", time: "12h – 00h" },
    ],
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.0!2d2.2860!3d48.9140!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665!2s101%20Quai%20du%20Dr%20Dervaux%2C%2092600%20Asni%C3%A8res!5e0!3m2!1sfr!2sfr",
  },
];

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 21.73 16.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default function Contact() {
  const [active, setActive] = useState(0);
  const resto = restaurants[active];

  return (
    <section className="contact-section">

      {/* ── Header ── */}
      <div className="contact-header">
        {/* Logo */}
        <div className="contact-logo">
          <img src={Logo} alt="Pasta Cosi" />
          
        </div>

        <p className="contact-eyebrow">Retrouvez-nous</p>
        <h2 className="contact-title">
          Nos <em>restaurants</em>
        </h2>

        {/* Tabs sélecteur */}
        <div className="contact-tabs">
          {restaurants.map((r, i) => (
            <button
              key={r.id}
              className={`contact-tab${active === i ? ' contact-tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="contact-tab__dot" />
              Pasta Cosi {r.city}
            </button>
          ))}
        </div>
      </div>

      {/* ── Card ── */}
      <div className="contact-card">

        {/* Carte Google Maps */}
        <div className="contact-map">
          <iframe
            src={resto.mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Carte Pasta Cosi ${resto.city}`}
          />
        </div>

        {/* Infos */}
        <div className="contact-info">

          <div className="contact-info__city">
            <span className="contact-info__city-label">Pasta Cosi</span>
            <span className="contact-info__city-name">{resto.city}</span>
          </div>

          <div className="contact-ornament" aria-hidden="true">
            <svg viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="24" stroke="#FAF7F0" strokeWidth="1.5"/>
              <circle cx="26" cy="26" r="17" stroke="#FAF7F0" strokeWidth="1"/>
              <circle cx="26" cy="26" r="4" fill="#FAF7F0"/>
            </svg>
          </div>

          <ul className="contact-list">
            <li className="contact-list__item">
              <span className="contact-list__icon"><PinIcon /></span>
              <span>{resto.address}</span>
            </li>
            <li className="contact-list__item">
              <span className="contact-list__icon"><PhoneIcon /></span>
              <a href={`tel:${resto.phone.replace(/\s/g,'')}`}>{resto.phone}</a>
            </li>
            <li className="contact-list__item">
              <span className="contact-list__icon"><MailIcon /></span>
              <a href={`mailto:${resto.email}`}>{resto.email}</a>
            </li>
          </ul>

          <div className="contact-divider">
            <span className="contact-divider__dot" />
          </div>

          <div className="contact-hours">
            <span className="contact-hours__label">
              <ClockIcon /> Horaires
            </span>
            {resto.hours.map((h, i) => (
              <div key={i} className="contact-hours__row">
                <span>{h.days}</span>
                <span className="contact-hours__time">{h.time}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Réseaux sociaux ── */}
      <div className="contact-social">
        <p className="contact-social__label">Suivez-nous</p>
        <div className="contact-social__links">
          <a href="https://www.instagram.com/pastacosiparis/" target="_blank" rel="noopener noreferrer" className="contact-social__btn" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
            <span>Instagram</span>
          </a>
          <a href="https://tiktok.com/@pastacosiparis" target="_blank" rel="noopener noreferrer" className="contact-social__btn" aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
            <span>TikTok</span>
          </a>
        </div>
      </div>

    </section>
  );
}

// import React from 'react';
// export default function Contac() {
//   return (
//     <section className="contact-section">
//       <div className="contact-section-inner">
//    <div className="contact-map">
        
//       <iframe 
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5246.731582524113!2d2.373044775963564!3d48.889365598526865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dd134434585%3A0x16b7d31e4d0bb848!2s78%20Av.%20de%20Flandre%2C%2075019%20Paris!5e0!3m2!1sfr!2sfr!4v1769297276398!5m2!1sfr!2sfr" 
//         width="100%" 
//         height="100%" 
//         style={{ border: 0 }}
//         allowFullScreen 
//         loading="lazy" 
//         referrerPolicy="no-referrer-when-downgrade"
//         title="Carte du restaurant PASTA COSI"
//         >

//       </iframe>
         
//       </div>

//       <div className="contact-info">
//         <div className='contact-container'>
//           <h2 className="contact-title">
//             <span className='contact-stroke'>PASTA COSI</span> 
//             <span className='contact-fill'>PASTA COSI</span> 
//           </h2>

//         </div>
        
        
//         <hr />
       
//         <div className="contact-text">
//           <p><strong>ADRESSE</strong></p>
//           <p>78 avenue de Flandre 75019 Paris</p>
          
//         </div>
        
//         <hr />
        
//         <div className="contact-text">
//           <p> <strong>TÉLÉPHONE</strong><br /></p>
//           <p>07 62 20 90 33</p>
          
//         </div>
        
//         <hr />
        
//         <div className="contact-text">

//           <p><strong>EMAIL</strong><br /></p>
//           <p>contact@pastacosi.fr</p>
          
//         </div>
        
//         <hr />
        
//         <div className="contact-text">
//         <p><strong>HORAIRES</strong><br /></p>
//         <p>Lundi au Jeudi - 12h à 00h<br />
//           Vendredi et Samedi - 12h à 01h<br />
//           Dimanche - 12h à 00h
//           </p>
          

//         </div>
        
        
//       </div>
//       </div>
   
//     </section>
//   );
// }
