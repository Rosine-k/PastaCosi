import React from 'react';
import Header from "../../layout/Header/header";
import Footer from "../../layout/Footer/footer";

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main>
        <div className="mentions-legales">
          <div className="container">
            <h1>Mentions Légales</h1>

            <section>
              <h2>Identification des éditeurs</h2>
              <p>
                <strong>LA SECONDE COMPANY</strong> – SAS au capital de 1 000 €<br />
                Activité : Restauration traditionnelle
                <br />
                Adresse : 78 avenue de Flandre, 75019 Paris, France
                <br />
                Tél. : 07 62 20 90 33
                <br />
                Email : <a href="mailto:contact@pastacosi.fr">contact@pastacosi.fr</a>
                <br />
                SIRET : 929 406 031 00013
                <br />
                TVA intracommunautaire : FR53 929 406 031
               
              </p>

              <p>
                <strong>LA TROISIEME COMPANY</strong> – SAS au capital de 1 000 €<br />
                Activité : Restauration traditionnelle
                <br />
                Adresse : 101 quai du Docteur Dervaux, 92600 Asnières-sur-Seine, France
                <br />
                Tél. : 07 62 20 90 33
                <br />
                Email : <a href="mailto:contact@pasta-cosi.com">contact@pasta-cosi.com</a>
                <br />
                SIRET : 995 044 609 00015
                <br />
                TVA intracommunautaire : FR64 995 044 609
               
              </p>
            </section>

            <section>
              <h2>Hébergement</h2>
              <p>
                Hébergeur : <strong>Ionos SARL</strong>
                <br />
                Adresse : 7 Place de la Gare, 57200 Sarreguemines, France
                <br />
                Site :{" "}
                <a
                  href="https://www.ionos.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ionos.fr
                </a>
              </p>
            </section>

            <section>
              <h2>Propriété intellectuelle</h2>
              <p>
                Le contenu du site (textes, visuels, logo, etc.) est la
                propriété exclusive de LA SECONDE COMPANY et LA TROISIEME COMPANY, sauf mention contraire. Toute
                reproduction ou représentation, intégrale ou partielle, sans
                autorisation préalable, est interdite.
              </p>
            </section>

            <section>
              <h2>Responsabilité</h2>
              <p>
                Les informations présentées sur ce site sont fournies à titre
                indicatif. LA SECONDE COMPANY et LA TROISIEME COMPANY s'efforce de les maintenir à jour, mais ne
                saurait être tenue responsable des erreurs, omissions ou de
                l’utilisation faite de ces informations.
              </p>
            </section>

            <section>
              <h2>Données personnelles & cookies</h2>
              <p>
                Ce site peut collecter des données personnelles via des
                formulaires ou services tiers (ex. : réservation via The Fork).
                Conformément au RGPD, vous disposez d’un droit d’accès, de
                rectification et de suppression de vos données. Pour toute
                demande :{" "}
                <a href="mailto:contact@pasta-cosi.com">contact@pasta-cosi.com</a>.<br />
                Le site peut également utiliser des cookies à des fins de
                navigation ou de mesure d’audience. Vous pouvez configurer vos
                préférences via le bandeau d'information lors de votre visite.
              </p>
            </section>

            <section>
              <h2>Informations spécifiques à la restauration</h2>
              <ul>
                <li>Les prix sont indiqués TTC et service compris.</li>
                <li>
                  La composition des menus est précisée (boisson incluse ou
                  non).
                </li>
                <li>
                  Une note détaillée est remise à chaque client sur demande.
                </li>
              </ul>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                Pour toute question relative au site, veuillez nous contacter à
                : <a href="mailto:contact@pasta-cosi.com">contact@pasta-cosi.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}