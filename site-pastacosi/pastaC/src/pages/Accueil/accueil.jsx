import React from 'react';
import Header from "../../layout/Header/header";
import Banner from "../../components/Banner/banner";
import bannerHome from "../../assets/banner.jpg";
import NavigationCards from "../../components/Navigation/navigation";
import Privatisation from "../../components/Privatisation/privatisation";
import Galerie from "../../components/Galerie/galerie";
import FaqCarousel from "../../components/Faq/faq";
import Contact from "../../components/Contact/contact";
import Recrutement from "../../components/Recrutement/recrutement ";
import Footer from "../../layout/Footer/footer";
import photo1 from "../../assets/galerie/photo1.jpg";
import photo2 from "../../assets/galerie/photo2.jpg";
import photo3 from "../../assets/galerie/photo3.jpg";

import photo5 from "../../assets/galerie/photo5.jpg";
import photo6 from "../../assets/galerie/photo6.jpg";
import photo7 from "../../assets/galerie/photo7.jpg";
import photo8 from "../../assets/galerie/photo8.jpg";
import photo9 from "../../assets/galerie/photo9.jpg";
import photo10 from "../../assets/galerie/photo10.jpg";
import photo11 from "../../assets/galerie/photo11.jpg";
import photo12 from "../../assets/galerie/photo12.jpg";
import photo13 from "../../assets/galerie/photo13.jpg";
import photo14 from "../../assets/galerie/photo14.jpg";
import photo15 from "../../assets/galerie/photo15.jpg";
import photo16 from "../../assets/galerie/photo16.jpg";
import LogoTop from "../../assets/logo2.png";

const homeImages = [
  photo1,
  photo2,
  photo3,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
];

function Accueil() {
  return (
    <>
      <Header />

      <main className="main">
        <Banner
          className="banner banner--home"
          image={bannerHome}
          alt="banner home"
        ></Banner>

        <div className="textHome">
          <img src={LogoTop} alt="Logo 2" className="textLogo" />
          <p className="textTitle">Bienvenue chez Divine <br />            
            Un lieu d'exception situé à paris 20ème. <br /> <br /></p>
          <p className="textDescription">
            Divine est un lieu unique où la richesse de la cuisine française rencontre 
            la générosité des saveurs italiennes. Ici, le vrai goût se célèbre à travers 
            des plats préparés avec soin, généreux et raffinés, servis dans un cadre élégant 
            mais toujours convivial. <br />

            Que ce soit pour un dîner romantique, une soirée entre amis, un repas en famille ou 
            une occasion spéciale, nous vous accueillons avec un service attentionné et une 
            ambiance musicale choisie pour rendre chaque moment mémorable.<br />

            Divine, c’est l’adresse idéale pour ceux qui aiment bien manger, partager et profiter 
            de moments chaleureux dans un lieu où l’on se sent tout simplement bien.
          </p>
        </div>
        <NavigationCards />
        <Privatisation />
        <Galerie images={homeImages} />

        <FaqCarousel />
        <Contact />
        <Recrutement />
      </main>
      <Footer />
    </>
  );
}

export default Accueil;
