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
import Resa10 from "../../assets/reservation/resto10.jpg";
import Resa11 from "../../assets/reservation/resto11.jpg";
import Resa12 from "../../assets/reservation/resto12.jpg";
import Resa13 from "../../assets/reservation/resto13.jpg";
import Resa14 from "../../assets/reservation/resto14.jpg";
import Resa14b from "../../assets/reservation/resto14b.jpg";
import Resa15 from "../../assets/reservation/resto15.jpeg";
import Resa15b from "../../assets/reservation/resto15b.jpg";
import Resa16 from "../../assets/reservation/resto16.jpeg";
import Resa16b from "../../assets/reservation/resto16b.jpg";
import Resa17 from "../../assets/reservation/resto17.jpeg";
import Resa18 from "../../assets/reservation/resto18.jpeg";
import Resa19 from "../../assets/reservation/resto19.jpeg";
import Resa20 from "../../assets/reservation/resto20.jpg";
import Resa21 from "../../assets/reservation/resto21.jpeg";
import Resa22 from "../../assets/reservation/resto22.jpeg";
import Resa23 from "../../assets/reservation/resto23.jpg";
import Resa24 from "../../assets/reservation/resto24.jpeg";
import Resa25 from "../../assets/reservation/resto25.jpg";
import Resa25b from "../../assets/reservation/resto25b.jpg";
import Resa26 from "../../assets/reservation/resto26.jpeg";
import Resa27 from "../../assets/reservation/resto27.jpg";
import Resa28 from "../../assets/reservation/resto28.jpg";
import Resa30 from "../../assets/reservation/resto30.jpeg";
import Resa31 from "../../assets/reservation/resto31.jpeg";
import Resa31b from "../../assets/reservation/resto31b.jpg";
import Resa32 from "../../assets/reservation/resto32.jpg";
import Resa33 from "../../assets/reservation/resto33.jpg";
import Resa33b from "../../assets/reservation/resto33b.jpg";

const resaImages = [
  Resa1, Resa2, Resa3, Resa4, Resa5,
  Resa6, Resa7, Resa8, Resa9, Resa10,
  Resa11, Resa12, Resa13, Resa14, Resa14b, Resa15, Resa15b,
  Resa16, Resa16b, Resa17, Resa18, Resa19, Resa20,
  Resa21, Resa22, Resa23, Resa24, Resa25, Resa25b,
  Resa26, Resa27, Resa28, Resa30,
  Resa31, Resa31b, Resa32, Resa33, Resa33b
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

    // 🔴 Sécurité nombre de personnes
    if (Number(formData.personnes) < 7) {
      alert("Les réservations sont possibles uniquement à partir de 7 personnes.");
      return;
    }

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
                    id="personnes"
                    type="number"
                    name="personnes"
                    className="form-input"
                    placeholder="7"
                    min="7"
                    max="20"
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
                    <option value="The Kitchen by Pasta Cosi - Paris 20ème">The Kitchen Paris 20ème</option>
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