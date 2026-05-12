import React from 'react';
import Header from "../../layout/Header/header";
import Banner from "../../components/Banner/banner";
import bannerHome from "../../assets/banner1.jpg";
import NavigationCards from "../../components/Navigation/navigation";
import Privatisation from "../../components/Privatisation/privatisation";
import Galerie from "../../components/Galerie/galerie";
import FaqCarousel from "../../components/Faq/faq";
import Contact from "../../components/Contact/contact";
import Txtlogo from "../../assets/txtLogo.png";
import Footer from "../../layout/Footer/footer";

import photo1 from "../../assets/galerie/photo1.jpg";
import photo2 from "../../assets/galerie/photo2.jpg";
import photo3 from "../../assets/galerie/photo3.jpg";
import photo4 from "../../assets/galerie/photo4.jpg";
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
import photo17 from "../../assets/galerie/photo17.jpg";
import photo18 from "../../assets/galerie/photo18.jpg";
import photo19 from "../../assets/galerie/photo19.jpg";
import photo20 from "../../assets/galerie/photo20.jpg";
import photo21 from "../../assets/galerie/photo21.jpg";
import photo22 from "../../assets/galerie/photo22.jpg";
import photo23 from "../../assets/galerie/photo23.jpg";
import photo24 from "../../assets/galerie/photo24.jpg";
import photo25 from "../../assets/galerie/photo25.jpg";

const homeImages = [
  photo1, photo2, photo3, photo4,
    photo5, photo6, photo7, photo8,
    photo9, photo10, photo11, photo12,
    photo13, photo14, photo15, photo16,
    photo17, photo18, photo19, photo20,
    photo21, photo22, photo23, photo24,
    photo25
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
        >
          <h1 className="banner-titleHome">Pasta Cosi</h1>
        </Banner>

        <div className="textHome">
          <img className='textLogo' src={Txtlogo} alt="Pasta Cosi" />
          
          <p className="textTitle">Bienvenue chez Pasta Cosi ! <br /> 
           Le goût de l'Italie à Paris 19ème et Asnières-sur-Seine</p><br />
          <p className="textDescription">
            Envie d’un voyage gourmand ? Chez Pasta Cosi, chaque assiette est une explosion de saveurs
            mêlant la tradition italienne et des inspirations du monde. Pâtes fraîches, recettes
            méditerranéennes, plats revisités… il y en a pour tous les goûts !
            <br />

            Ambiance chaleureuse, décor moderne, que ce soit en famille, entre amis ou pour une soirée
            romantique, votre table vous attend.
            <br />
            
          </p>
        </div>

        <NavigationCards />
        
        <Privatisation />
        

        <FaqCarousel />

        <Galerie images={homeImages} />
        <Contact />
        
      </main>
      <Footer />
    </>
  );
}

export default Accueil;
