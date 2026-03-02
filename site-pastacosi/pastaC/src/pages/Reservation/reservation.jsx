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
    personnes: "",
    restaurant: "",
    remarques: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.website) {
    return; // bot détecté
  }

  if (!e.target.checkValidity()) {
    e.target.reportValidity();
    return;
  }

  try {
    const response = await fetch("/reservation.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Réservation envoyée avec succès !");
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        date: "",
        personnes: "",
        restaurant: "",
        remarques: "",
        website: ""
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

        {/* FORMULAIRE */}
        <section className="reservation-section">
          <h2 className="reservation-title">Réserver une table</h2>

          <form className="reservation-form" onSubmit={handleSubmit} noValidate>

  <div className="form-row">
    <input
      type="text"
      name="nom"
      placeholder="Nom"
      value={formData.nom}
      onChange={handleChange}
      pattern="^[A-Za-zÀ-ÖØ-öø-ÿ '-]{2,}$"
      title="Le nom ne doit contenir que des lettres"
      required
    />

    <input
      type="text"
      name="prenom"
      placeholder="Prénom"
      value={formData.prenom}
      onChange={handleChange}
      pattern="^[A-Za-zÀ-ÖØ-öø-ÿ '-]{2,}$"
      title="Le prénom ne doit contenir que des lettres"
      required
    />
  </div>

  <div className="form-row">
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
    />

    <input
      type="tel"
      name="telephone"
      placeholder="Téléphone"
      value={formData.telephone}
      onChange={handleChange}
      pattern="^[0-9]{10}$"
      title="Entrez un numéro à 10 chiffres"
      required
    />
  </div>

  <div className="form-row">
    <input
      type="datetime-local"
      name="date"
      value={formData.date}
      onChange={handleChange}
      min={new Date().toISOString().slice(0,16)}
      required
    />

    <input
      type="number"
      name="personnes"
      placeholder="Nombre de personnes"
      min="1"
      max="20"
      value={formData.personnes}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-row">
    <select
      name="restaurant"
      value={formData.restaurant}
      onChange={handleChange}
      required
    >
      <option value="">Choisissez un restaurant</option>
      <option value="Pasta Cosi - Paris 19ème">
        Pasta Cosi - Paris 19ème
      </option>
      <option value="Pasta Cosi - Asnières">
        Pasta Cosi - Asnières-sur-Seine
      </option>
    </select>
  </div>

  {/* Honeypot anti-bot invisible */}
  <input
    type="text"
    name="website"
    style={{ display: "none" }}
    onChange={handleChange}
  />

  <textarea
    name="remarques"
    placeholder="Remarques (optionnel)"
    value={formData.remarques}
    onChange={handleChange}
  ></textarea>

  <button type="submit" className="btn-submit">
    Envoyer la réservation
  </button>

</form>
        </section>

        <Galerie images={resaImages} />

      </main>
      <Footer />
    </>
  );
}

export default Reservation;


// import React from 'react';
// import { useState } from "react";
// import Header from "../../layout/Header/header";
// import Banner from "../../components/Banner/banner";
// import bannerResa from "../../assets/navig2.jpg";
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
//   return (
//     <>
//       <Header />
//       <main className="main">
//         <Banner className="banner" image={bannerResa} alt="bannermenu">
//           <h1 className="banner-title">Réservation</h1>
//         </Banner>

        
       

//         <Galerie images={resaImages} />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default Reservation;
