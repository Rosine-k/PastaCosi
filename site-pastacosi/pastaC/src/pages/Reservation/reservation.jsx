import React, { useState } from "react";
import Header from "../../layout/Header/header";
import Banner from "../../components/Banner/banner";
import bannerResa from "../../assets/resaHome.jpg";
import Galerie from "../../components/Galerie/galerie";
import Footer from "../../layout/Footer/footer";

import Resa1 from "../../assets/reservation/resto1.jpg";
import Resa2 from "../../assets/reservation/resto2.jpg";
import Resa3 from "../../assets/reservation/resto3.jpg";
import Resa4 from "../../assets/reservation/resto4.jpg";
import Resa5 from "../../assets/reservation/resto5.jpg";
import Resa6 from "../../assets/reservation/resto6.jpg";
import Resa7 from "../../assets/reservation/resto7.jpg";
import Resa8 from "../../assets/reservation/resto8.jpg";
import Resa9 from "../../assets/reservation/resto9.jpg";

const resaImages = [
  Resa1, Resa2, Resa3, Resa4, Resa5,
  Resa6, Resa7, Resa8, Resa9
];

function Reservation() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    date: "",
    heure: "",
    personnes: "",
    restaurant: "",
    remarques: "",
    website: "" // honeypot anti-bot
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Anti-bot honeypot
    if (formData.website) return;

    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    try {
      const response = await fetch("/reservation.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Réservation envoyée avec succès !");
        setFormData({
          nom: "", prenom: "", email: "", telephone: "",
          date: "", heure: "", personnes: "",
          restaurant: "", remarques: "", website: ""
        });
      } else {
        alert(data.message || "Erreur lors de l'envoi.");
      }
    } catch (error) {
      alert("Erreur serveur.");
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <main className="main main--with-header-offset">

        <Banner className="banner" image={bannerResa} alt="bannermenu">
          <h1 className="banner-title">Réservation</h1>
        </Banner>

        <section className="reservation-section">

          <div className="reservation-card">

            {/* Ornement décoratif */}
            <svg className="form-ornament" viewBox="0 0 52 52" fill="none" aria-hidden="true">
              <circle cx="26" cy="26" r="24" stroke="#2A4D14" strokeWidth="1.5"/>
              <circle cx="26" cy="26" r="17" stroke="#2A4D14" strokeWidth="1"/>
              <circle cx="26" cy="26" r="4" fill="#2A4D14"/>
            </svg>

            <div className="reservation-header">
              <h2 className="reservation-title">
                Réservez <em>votre table</em>
              </h2>
              <h3 className="reservation-h3">non nécessaire pour les groupes inférieurs à 7 personnes</h3>
            </div>

            <form className="reservation-form" onSubmit={handleSubmit} noValidate>

              {/* Nom / Prénom */}
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="nom">Nom</label>
                  <input
                    id="nom" type="text" name="nom"
                    className="form-input"
                    placeholder="Dupont"
                    value={formData.nom}
                    onChange={handleChange}
                    pattern="^[A-Za-zÀ-ÖØ-öø-ÿ '\-]{2,}$"
                    title="Le nom ne doit contenir que des lettres"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="prenom">Prénom</label>
                  <input
                    id="prenom" type="text" name="prenom"
                    className="form-input"
                    placeholder="Jean"
                    value={formData.prenom}
                    onChange={handleChange}
                    pattern="^[A-Za-zÀ-ÖØ-öø-ÿ '\-]{2,}$"
                    title="Le prénom ne doit contenir que des lettres"
                    required
                  />
                </div>
              </div>

              {/* Email / Téléphone */}
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email" type="email" name="email"
                    className="form-input"
                    placeholder="votre@email.fr"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="telephone">Téléphone</label>
                  <input
                    id="telephone" type="tel" name="telephone"
                    className="form-input"
                    placeholder="06 00 00 00 00"
                    value={formData.telephone}
                    onChange={handleChange}
                    pattern="^[0-9]{10}$"
                    title="Entrez un numéro à 10 chiffres"
                    required
                  />
                </div>
              </div>

              {/* Date / Heure */}
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="date">Date</label>
                  <input
                    id="date" type="date" name="date"
                    className="form-input"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().slice(0, 10)}
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="heure">Heure</label>
                  <select
                    id="heure" name="heure"
                    className="form-select"
                    value={formData.heure}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choisissez une heure</option>
                    {Array.from({ length: 12 }, (_, i) => i + 12).flatMap(h =>
                      ["00", "15", "30", "45"]
                        .filter(m => !(h === 23 && m !== "00"))
                        .map(m => (
                          <option key={`${h}:${m}`} value={`${String(h).padStart(2, '0')}:${m}`}>
                            {String(h).padStart(2, '0')}h{m}
                          </option>
                        ))
                    )}
                  </select>
                </div>
              </div>

              {/* Couverts / Restaurant */}
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="personnes">Nombre de personnes</label>
                  <input
                    id="personnes" type="number" name="personnes"
                    className="form-input"
                    placeholder="2"
                    min="1" max="20"
                    value={formData.personnes}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="restaurant">Restaurant</label>
                  <select
                    id="restaurant" name="restaurant"
                    className="form-select"
                    value={formData.restaurant}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choisissez</option>
                    <option value="Pasta Cosi - Paris 19ème">Paris 19ème</option>
                    <option value="Pasta Cosi - Asnières">Asnières-sur-Seine</option>
                  </select>
                </div>
              </div>

              {/* Séparateur */}
              <div className="form-divider">
                <span className="form-divider__dot" />
              </div>

              {/* Remarques */}
              <div className="form-row form-row--full">
                <div className="form-field">
                  <label className="form-label" htmlFor="remarques">Message (optionnel)</label>
                  <textarea
                    id="remarques" name="remarques"
                    className="form-textarea"
                    placeholder="Allergie, occasion spéciale, demande particulière…"
                    value={formData.remarques}
                    onChange={handleChange}
                    maxLength={500}
                  />
                </div>
              </div>

              {/* Honeypot anti-bot — invisible */}
              <input
                type="text"
                name="website"
                style={{ display: "none" }}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Bouton */}
              <div className="form-footer">
                <button type="submit" className="btn-submit">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/>
                  </svg>
                  Envoyer votre demande de réservation
                </button>
              </div>

            </form>
          </div>
        </section>

        <Galerie images={resaImages} />

      </main>
      <Footer />
    </>
  );
}

export default Reservation;

// import React, { useState } from "react";
// import Header from "../../layout/Header/header";
// import Banner from "../../components/Banner/banner";
// import bannerResa from "../../assets/resaHome.jpg";
// import Galerie from "../../components/Galerie/galerie";
// import Footer from "../../layout/Footer/footer";

// import Resa1 from "../../assets/reservation/resto1.jpg";
// import Resa2 from "../../assets/reservation/resto2.jpg";
// import Resa3 from "../../assets/reservation/resto3.jpg";
// import Resa4 from "../../assets/reservation/resto4.jpg";
// import Resa5 from "../../assets/reservation/resto5.jpg";
// import Resa6 from "../../assets/reservation/resto6.jpg";
// import Resa7 from "../../assets/reservation/resto7.jpg";
// import Resa8 from "../../assets/reservation/resto8.jpg";
// import Resa9 from "../../assets/reservation/resto9.jpg";

// const resaImages = [
//   Resa1, Resa2, Resa3, Resa4, Resa5,
//   Resa6, Resa7, Resa8, Resa9
// ];

// function Reservation() {
//   const [formData, setFormData] = useState({
//     nom: "",
//     prenom: "",
//     email: "",
//     telephone: "",
//     date: "",
//     heure: "",
//     personnes: "",
//     restaurant: "",
//     remarques: "",
//     website: "" // honeypot anti-bot
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Anti-bot honeypot
//     if (formData.website) return;

//     if (!e.target.checkValidity()) {
//       e.target.reportValidity();
//       return;
//     }

//     try {
//       const response = await fetch("/reservation.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Réservation envoyée avec succès !");
//         setFormData({
//           nom: "", prenom: "", email: "", telephone: "",
//           date: "", heure: "", personnes: "", restaurant: "",
//           remarques: "", website: ""
//         });
//       } else {
//         alert(data.message || "Erreur lors de l'envoi.");
//       }
//     } catch (error) {
//       alert("Erreur serveur.");
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <main className="main main--with-header-offset">

//         <Banner className="banner" image={bannerResa} alt="bannermenu">
//           <h1 className="banner-title">Réservation</h1>
//         </Banner>

//         <section className="reservation-section">

//           <div className="reservation-card">

//             {/* Ornement décoratif */}
//             <svg className="form-ornament" viewBox="0 0 52 52" fill="none" aria-hidden="true">
//               <circle cx="26" cy="26" r="24" stroke="#2A4D14" strokeWidth="1.5"/>
//               <circle cx="26" cy="26" r="17" stroke="#2A4D14" strokeWidth="1"/>
//               <circle cx="26" cy="26" r="4" fill="#2A4D14"/>
//             </svg>

//             <div className="reservation-header">
              
//               <h2 className="reservation-title">
//                 Réservez <em>votre table</em>
//               </h2>
//               <h3 className="reservation-h3">non nécessaire pour les groupes inféreurs à 7 personnes</h3>
//               {/* <div className="reservation-divider">
//                 <span className="reservation-divider__dot" />
//               </div> */}
//             </div>

//             <form className="reservation-form" onSubmit={handleSubmit} noValidate>

//               {/* Nom / Prénom */}
//               <div className="form-row">
//                 <div className="form-field">
//                   <label className="form-label" htmlFor="nom">Nom</label>
//                   <input
//                     id="nom" type="text" name="nom"
//                     className="form-input"
//                     placeholder="Dupont"
//                     value={formData.nom}
//                     onChange={handleChange}
//                     pattern="^[A-Za-zÀ-ÖØ-öø-ÿ '\-]{2,}$"
//                     title="Le nom ne doit contenir que des lettres"
//                     required
//                   />
//                 </div>
//                 <div className="form-field">
//                   <label className="form-label" htmlFor="prenom">Prénom</label>
//                   <input
//                     id="prenom" type="text" name="prenom"
//                     className="form-input"
//                     placeholder="Jean"
//                     value={formData.prenom}
//                     onChange={handleChange}
//                     pattern="^[A-Za-zÀ-ÖØ-öø-ÿ '\-]{2,}$"
//                     title="Le prénom ne doit contenir que des lettres"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Email / Téléphone */}
//               <div className="form-row">
//                 <div className="form-field">
//                   <label className="form-label" htmlFor="email">Email</label>
//                   <input
//                     id="email" type="email" name="email"
//                     className="form-input"
//                     placeholder="votre@email.fr"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-field">
//                   <label className="form-label" htmlFor="telephone">Téléphone</label>
//                   <input
//                     id="telephone" type="tel" name="telephone"
//                     className="form-input"
//                     placeholder="06 00 00 00 00"
//                     value={formData.telephone}
//                     onChange={handleChange}
//                     pattern="^[0-9]{10}$"
//                     title="Entrez un numéro à 10 chiffres"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Date / Heure */}
//               {/* Heure / Minutes */}
//               <div className="form-row">
//                 <div className="form-field">
//                   <label className="form-label" htmlFor="heure">Heure</label>
//                   <select
//                     id="heure" name="heure"
//                     className="form-select"
//                     value={formData.heure}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Heure</option>
//                     {Array.from({ length: 13 }, (_, i) => i + 10).map(h => (
//                       <option key={h} value={String(h).padStart(2, '0')}>
//                         {String(h).padStart(2, '0')}h
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="form-field">
//                   <label className="form-label" htmlFor="minutes">Minutes</label>
//                   <select
//                     id="minutes" name="minutes"
//                     className="form-select"
//                     value={formData.minutes}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Min</option>
//                     <option value="00">00</option>
//                     <option value="15">15</option>
//                     <option value="30">30</option>
//                     <option value="45">45</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Couverts / Restaurant */}
//               <div className="form-row">
//                 <div className="form-field">
//                   <label className="form-label" htmlFor="personnes">Nombre de personnes</label>
//                   <input
//                     id="personnes" type="number" name="personnes"
//                     className="form-input"
//                     placeholder="2"
//                     min="1" max="20"
//                     value={formData.personnes}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-field">
//                   <label className="form-label" htmlFor="restaurant">Restaurant</label>
//                   <select
//                     id="restaurant" name="restaurant"
//                     className="form-select"
//                     value={formData.restaurant}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Choisissez</option>
//                     <option value="Pasta Cosi - Paris 19ème">Paris 19ème</option>
//                     <option value="Pasta Cosi - Asnières">Asnières-sur-Seine</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Séparateur */}
//               <div className="form-divider">
//                 <span className="form-divider__dot" />
//               </div>

//               {/* Remarques */}
//               <div className="form-row form-row--full">
//                 <div className="form-field">
//                   <label className="form-label" htmlFor="remarques">Message (optionnel)</label>
//                   <textarea
//                     id="remarques" name="remarques"
//                     className="form-textarea"
//                     placeholder="Allergie, occasion spéciale, demande particulière…"
//                     value={formData.remarques}
//                     onChange={handleChange}
//                     maxLength={500}
//                   />
//                 </div>
//               </div>

//               {/* Honeypot anti-bot — invisible */}
//               <input
//                 type="text"
//                 name="website"
//                 style={{ display: "none" }}
//                 onChange={handleChange}
//                 tabIndex="-1"
//                 autoComplete="off"
//               />

//               {/* Bouton */}
//               <div className="form-footer">
//                 <button type="submit" className="btn-submit">
//                   <svg viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/>
//                   </svg>
//                   Envoyer votre demande de réservation
//                 </button>
//               </div>

//             </form>
//           </div>
//         </section>

//         <Galerie images={resaImages} />

//       </main>
//       <Footer />
//     </>
//   );
// }

// export default Reservation;