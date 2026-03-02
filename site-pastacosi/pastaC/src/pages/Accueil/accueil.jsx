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
// import Recrutement from "../../components/Recrutement/recrutement ";
import Footer from "../../layout/Footer/footer";
import photo1 from "../../assets/galerie/photo1.jpg";
import photo2 from "../../assets/galerie/photo2.jpg";
import photo3 from "../../assets/galerie/photo3.jpg";
import photo4 from "../../assets/galerie/photo4.jpg";
import photo5 from "../../assets/galerie/photo5.jpg";
import photo6 from "../../assets/galerie/photo6.jpg";
import photo7 from "../../assets/galerie/photo7.jpg";
import photo8 from "../../assets/galerie/photo8.jpg";

const homeImages = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  
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
        {/* <Recrutement /> */}
      </main>
      <Footer />
    </>
  );
}

export default Accueil;
