import React from 'react';
import Header from "../../layout/Header/header";
import Footer from "../../layout/Footer/footer";

export default function Cookies() {
  return (
    <>
      <Header />
      <main>
        <div className="cookies">
          <div className="container">
            <h1>Politique de gestion des cookies</h1>

            <section>
              <h2>1. Qu’est-ce qu’un cookie ?</h2>
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal
                (ordinateur, smartphone, tablette) lors de la visite d’un site
                internet. Il permet notamment de mémoriser des informations de
                navigation et d’améliorer votre expérience utilisateur.
              </p>
            </section>

            <section>
              <h2>2. Quels cookies utilisons-nous ?</h2>
              <p>
                Le site <strong>pastacosi.fr</strong> utilise les types de cookies
                suivants :
              </p>
              <ul>
                <li>
                  <strong>Cookies strictement nécessaires :</strong> assurent le
                  fonctionnement du site.
                </li>
                <li>
                  <strong>Cookies de mesure d’audience :</strong> recueillent
                  des données anonymes pour améliorer le site.
                </li>
                {/* Si vous avez des cookies tiers type YouTube, réseaux sociaux, ajoutez-les ici */}
              </ul>
            </section>

            <section>
              <h2>3. Consentement</h2>
              <p>
                Lors de votre première visite, un bandeau vous informe de la
                présence de cookies. Vous pouvez accepter, refuser ou
                personnaliser l’utilisation des cookies non essentiels. Ce choix
                est conservé pendant 6 mois.
              </p>
            </section>

            <section>
              <h2>4. Gérer les cookies</h2>
              <p>
                Vous pouvez modifier à tout moment vos préférences en cliquant
                sur le bouton “Gestion des cookies” en bas de page (si présent),
                ou directement dans les paramètres de votre navigateur :
              </p>
              <ul>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paramètres Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paramètres Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paramètres Safari
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Durée de conservation</h2>
              <p>
                Les cookies sont conservés pour une durée maximale de 13 mois à
                partir de leur dépôt sur votre appareil.
              </p>
            </section>

            <section>
              <h2>6. Contact</h2>
              <p>
                Pour toute question sur cette politique ou pour exercer vos
                droits, vous pouvez nous contacter à :{" "}
                <a href="mailto:contact@pastacosi.fr">contact@pastacosi.fr</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
