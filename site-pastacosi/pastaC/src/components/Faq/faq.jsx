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

// import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const faqData = [
//   {
//     question: "Vos viandes sont-elles Halal ?",
//     answer: "Oui, toutes nos viandes sont Halal et notre certification est EL HOUDA HALAL.",
//   },
//   {
//     question: "Proposez-vous des options végétariennes ou adaptées à des régimes particuliers ?",
//     answer: "Oui, nous proposons plusieurs plats végétariens, et certaines recettes peuvent être adaptées selon vos besoins. N'hésitez pas à demander conseil à notre équipe sur place.",
//   },
//   {
//     question: "Peut-on réserver une table en ligne ?",
//     answer: "Les réservations peuvent se faire directement via notre site internet ou par téléphone. Le week-end il est préférable de nous contacter avant votre venue pour être sûr d'avoir une table.",
//   },
//   {
//     question: "Est-il possible de manger sur place, à emporter ou en livraison ?",
//     answer: "Oui ! Chez Pasta Cosi Paris et Pasta Cosi Asnières, tu peux manger sur place, commander à emporter, ou passer par nos partenaires de livraison.",
//   },
//   {
//     question: "Peut-on personnaliser son plat (changer une sauce, retirer un ingrédient, etc.) ?",
//     answer: "Oui, dans la mesure du possible, nous adaptons nos plats selon vos préférences. Dites-le simplement lors de votre commande.",
//   },
// ];

// // SVG ornament (cercles concentriques)
// const Ornament = () => (
//   <svg className="faq-ornament" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="26" cy="26" r="24" stroke="#2A4D14" strokeWidth="1.5"/>
//     <circle cx="26" cy="26" r="17" stroke="#2A4D14" strokeWidth="1"/>
//     <circle cx="26" cy="26" r="4" fill="#2A4D14"/>
//   </svg>
// );

// export default function FaqCarousel() {
//   return (
//     <section className="faq-carousel-section">

//       <p className="faq-eyebrow">Questions fréquentes</p>
//       <h2 className="faq-title">
//         Vous avez une question ?<br />
//         <em>Voici la réponse.</em>
//       </h2>

//       <div className="faq-slider-wrapper">
//         <div className="faq-nav-btn faq-prev" />

//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation={{
//             nextEl: '.faq-next',
//             prevEl: '.faq-prev',
//           }}
//           pagination={{
//             el: '.faq-dots',
//             clickable: true,
//             bulletClass: 'faq-dot',
//             bulletActiveClass: 'faq-dot--active',
//           }}
//           spaceBetween={40}
//           slidesPerView={1}
//           className="faq-swiper"
//         >
//           {faqData.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="faq-card">
//                 <Ornament />
//                 <span className="faq-slide-tag">
//                   <span className="faq-slide-tag__dot" />
//                   {String(index + 1).padStart(2, '0')} / {String(faqData.length).padStart(2, '0')}
//                 </span>
//                 <h3 className="faq-question">{item.question}</h3>
//                 <div className="faq-divider">
//                   <span className="faq-divider__dot" />
//                 </div>
//                 <p className="faq-answer">{item.answer}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div className="faq-nav-btn faq-next" />
//       </div>

//       <div className="faq-dots" />

//     </section>
//   );
// }

// // import React from 'react';
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // // import FaqImg from "../../assets/faq3.jpg";

// // const faqData = [
 
// //   {
// //     question: "Vos viandes sont-elles Halal ?",
// //     answer: "Oui, toutes nos viandes sont Halal et notre certification est EL HOUDA HALAL.",
// //   },
// //   {
// //     question: "Proposez-vous des options végétariennes ou adaptées à des régimes particuliers ?",
// //     answer: "Oui, nous proposons plusieurs plats végétariens, et certaines recettes peuvent être adaptées selon vos besoins. N’hésitez pas à demander conseil à notre équipe sur place.",
// //   },
// //   {
// //     question: "Peut-on réserver une table en ligne ?",
// //     answer: "Les réservations peuvent se faire directement via notre site internet ou par téléphone. Le week-end il est préférable de nous contacter avant votre venue pour être sûr d’avoir une table.",
// //   },
// //   {
// //     question: "Est-il possible de manger sur place, à emporter ou en livraison ?",
// //     answer: "Oui ! Chez Pasta Cosi Paris et Pasta Cosi Asnières, tu peux manger sur place, commander à emporter, ou passer par nos partenaires de livraison.",
// //   },
// //   {
// //     question: "Peut-on personnaliser son plat (changer une sauce, retirer un ingrédient, etc.) ?",
// //     answer: "Oui, dans la mesure du possible, nous adaptons nos plats selon vos préférences. Dites-le simplement lors de votre commande.",
// //   },
  
 
// // ];

// // export default function FaqCarousel() {
// //   return (
// //     <section className="faq-carousel-section">

// //       <h2 className="faq-title">Vous avez une question ? <br /> Voici la réponse.</h2>

// //       <div className="faq-nav-btn faq-prev swiper-button-prev"></div>

// //       <Swiper
// //         modules={[Navigation]}
// //         navigation={{
// //           nextEl: '.faq-next',
// //           prevEl: '.faq-prev',
// //         }}
// //         spaceBetween={40}
// //         slidesPerView={1}
// //         className="faq-swiper"
// //       >
// //         {faqData.map((item, index) => (
// //           <SwiperSlide key={index}>
// //             <div className="faq-card">
              
// //               {/* <img src={FaqImg} alt="fond carte" className="faq-bg-img" /> */}
              
// //               <h3 className="faq-question">{item.question}</h3>
// //               <p className="faq-answer">{item.answer}</p>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>

// //       <div className="faq-nav-btn faq-next swiper-button-next"></div>
// //     </section>
// //   );
// // }
