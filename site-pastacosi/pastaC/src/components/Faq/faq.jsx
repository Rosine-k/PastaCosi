import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import FaqImg from "../../assets/faq3.jpg";

const faqData = [
  // {
  //   question: "Est-ce que je peux apporter un gâteau d’anniversaire au restaurant ?",
  //   answer: "Oui, il est possible d’apporter votre propre gâteau d’anniversaire. Une participation de 20 € vous sera demandée pour les frais de service (mise à disposition d’assiettes, couverts, rangement, etc.).",
  // },
  {
    question: "Est-ce que les retards sont acceptés ?",
    answer: "Oui, les retards sont acceptés dans la limite de 15 minutes. Au-delà, votre table pourra être réattribuée.",
  },
  {
    question: "Est-ce que tout le groupe doit être présent pour être installé ?",
    answer: "Pour garantir une bonne organisation du service, nous ne pouvons pas vous faire entrer si tout le groupe n’est pas au complet.",
  },
  {
    question: "Est-ce qu’il y a de la musique dans le restaurant ?",
    answer: "Oui, il y a de la musique d’ambiance pour accompagner votre repas.",
  },
  {
    question: "Jusqu’à quelle heure la cuisine est-elle ouverte ?",
    answer: "La cuisine ferme à 00h20 la semaine de dimanche à jeudi  et 1h20 du matin le vendredi et samedi.",
  },
  {
    question: "Comment puis-je réserver une table chez Divine ?",
    answer: "Les réservations se font facilement via notre site internet. Pour toute demande de groupe (plus de 15 personnes), merci de nous contacter directement par téléphone.",
  },
  {
    question: "Est-il possible de privatiser ou de venir en groupe ?",
    answer: "Oui, nous acceptons les réservations de groupe et la privatisation partielle sous certaines conditions : Vous pouvez privatiser pour un groupe jusqu’à 26 personnes maximum. Une terrasse fermée est disponible pour les groupes du lundi au jeudi. Le week-end, nous n’acceptons pas les groupes de plus de 12 personnes après 20h. Pour toute demande spécifique ou privatisation, merci de nous contacter par téléphone.",
  },
  {
    question: "Quel est le nombre maximum de personnes autorisé le week-end ?",
    answer: "Le week-end, nous accueillons les groupes dans les limites suivantes :  jusqu’à 15 personnes avant 20h - maximum 12 personnes après 20h.",
  },
  {
    question: "Est-ce que la viande servie est halal ?",
    answer: "Oui, toutes les viandes que nous servons sont 100 % halal.",
  },
  {
    question: "Est-ce qu’il y a un DJ chez Divine ?",
    answer: "Non, il n’y a pas de DJ chez Divine. Nous diffusons une musique d’ambiance soigneusement sélectionnée pour accompagner votre repas dans une atmosphère chaleureuse et conviviale.",
  },
  // {
  //   question: "Proposez-vous des formules ou menus ?",
  //   answer: "Oui, nous proposons deux formules au choix : – Entrée + Plat + Boisson – Plat + Dessert + Boisson. Ces formules sont proposées à 35 € ou 45 €, selon le menu sélectionné. Le détail des plats inclus est à retrouver dans notre carte, rubrique Menu.",
  // },
];

export default function FaqCarousel() {
  return (
    <section className="faq-carousel-section">

      <h2 className="faq-title">Vous avez une question ? <br /> Voici la réponse.</h2>

      <div className="faq-nav-btn faq-prev swiper-button-prev"></div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.faq-next',
          prevEl: '.faq-prev',
        }}
        spaceBetween={40}
        slidesPerView={1}
        className="faq-swiper"
      >
        {faqData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="faq-card">
              
              <img src={FaqImg} alt="fond carte" className="faq-bg-img" />
              
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="faq-nav-btn faq-next swiper-button-next"></div>
    </section>
  );
}
