import React from 'react';
export default function RecrutementBloc() {
  return (
    <section className="recrutement-bloc">
      <div className="recrutement-content">
        <h2>Recrutement</h2>
        <p>
          Vous souhaitez rejoindre l’équipe du <strong>Divine Restaurant</strong> ?<br />
          Envoyez votre candidature accompagnée de votre CV et d’une lettre de motivation à :
        </p>
        <a href="mailto:contact@divineparisrestaurant.fr" className="email-btn">
          contact@divineparisrestaurant.fr
        </a>
      </div>
    </section>
  );
}
