import React from 'react';
import Header from "../../layout/Header/header";
import Footer from "../../layout/Footer/footer";

export default function Confidentialite() {
  return (
    <>
      <Header />
      <main>
        <div className="confidentialite">
          <div className="container">
            <h1>Politique de confidentialité</h1>

            <section>
              <h2>1. Identité du responsable du traitement</h2>
              <p>
                Le site <strong>divine.fr</strong> est édité par le restaurant
                DIVINE, situé au 12 rue du Surmelin, 75020 Paris.
              </p>
            </section>

            <section>
              <h2>2. Données collectées</h2>
              <p>
                Nous collectons uniquement les données strictement nécessaires :
              </p>
              <ul>
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Date et heure de réservation</li>
                <li>Adresse IP (à des fins de sécurité ou de statistiques)</li>
              </ul>
            </section>

            <section>
              <h2>3. Finalités du traitement</h2>
              <p>Les données sont utilisées pour :</p>
              <ul>
                <li>Gérer les réservations</li>
                <li>Répondre aux messages</li>
                <li>Garantir la sécurité du site</li>
              </ul>
            </section>

            <section>
              <h2>4. Base légale</h2>
              <p>
                Le traitement est basé sur l'exécution d’un contrat
                (réservation) et l’intérêt légitime de DIVINE à assurer sa
                relation client.
              </p>
            </section>

            <section>
              <h2>5. Durée de conservation</h2>
              <p>Les données sont conservées :</p>
              <ul>
                <li>12 mois maximum pour les données de réservation</li>
                <li>13 mois pour les cookies (voir page dédiée)</li>
              </ul>
            </section>

            <section>
              <h2>6. Destinataires</h2>
              <p>
                Les données ne sont transmises qu'aux personnes habilitées de
                DIVINE et à nos sous-traitants techniques (ex : hébergeur).
                Elles ne sont jamais vendues.
              </p>
            </section>

            <section>
              <h2>7. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez de :</p>
              <ul>
                <li>Droit d’accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l’effacement</li>
                <li>Droit d’opposition</li>
                <li>Droit à la portabilité</li>
                <li>Droit à la limitation du traitement</li>
              </ul>
              <p>
                Pour exercer vos droits, contactez :{" "}
                <a href="mailto:contact@divine.fr">contact@divine.fr</a>
              </p>
            </section>

            <section>
              <h2>8. Sécurité</h2>
              <p>
                Nous appliquons des mesures de sécurité techniques et
                organisationnelles pour protéger vos données.
              </p>
            </section>

            <section>
              <h2>9. Contact</h2>
              <p>
                Pour toute question concernant cette politique :{" "}
                <a href="mailto:contact@divine.fr">contact@divine.fr</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
