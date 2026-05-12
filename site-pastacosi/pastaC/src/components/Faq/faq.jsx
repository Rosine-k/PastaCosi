import React, { useState } from 'react';


const faqData = [
  {
    question: "Vos viandes sont-elles Halal ?",
    answer: "Oui, toutes nos viandes sont Halal et notre certification est AVS et Achahada.",
  },
  {
    question: "Est-il nécessaire de réserver une table avant de venir ?",
    answer: "Non, vous êtes les bienvenus sans réservation. En revanche, à partir de 7 personnes et plus, une réservation est demandée.",
  },
  {
    question: "Proposez-vous des options végétariennes ou adaptées à des régimes particuliers ?",
    answer: "Oui, nous proposons plusieurs plats végétariens, et certaines recettes peuvent être adaptées selon vos besoins. N'hésitez pas à demander conseil à notre équipe sur place.",
  },

  {
    question: "Est-il possible de manger sur place, à emporter ou en livraison ?",
    answer: "Oui ! Chez Pasta Cosi Paris et Pasta Cosi Asnières, tu peux manger sur place et commander à emporter mais la livraison n'est pas possible.",
  },
  {
    question: "Peut-on personnaliser son plat (changer une sauce, retirer un ingrédient, etc.) ?",
    answer: "Oui, dans la mesure du possible, nous adaptons nos plats selon vos préférences. Dites-le simplement lors de votre commande.",
  },
  {
    question: "Peut-on apporter son propre gâteau d'anniversaire ?",
    answer: "Bien sûr ! Vous êtes tout à fait les bienvenus pour apporter votre gâteau d'anniversaire. Nous nous ferons un plaisir de le conserver et de le servir à vos convives au moment voulu.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <div className="faq-header">
        <p className="faq-eyebrow">Questions fréquentes</p>
        <h2 className="faq-title">
          Vous avez une question ?<br />
          <em>Voici la réponse.</em>
        </h2>
      </div>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item${openIndex === index ? ' faq-item--open' : ''}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-item__question">
              <span>{item.question}</span>
              <span className="faq-item__icon">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className="faq-item__answer">
              <div className="faq-item__answer-inner">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

