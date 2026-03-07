import React from 'react';
import Header from "../../layout/Header/header";
import Banner from "../../components/Banner/banner";
import bannerMenu from "../../assets/menuHome1.jpg";
import Footer from "../../layout/Footer/footer";
import Galerie from "../../components/Galerie/galerie";
import { Link } from "react-router-dom";

import photo1 from "../../assets/galerie/photo1.jpg";
import photo2 from "../../assets/galerie/photo2.jpg";
import photo3 from "../../assets/galerie/photo3.jpg";
import photo4 from "../../assets/galerie/photo4.jpg";
import photo5 from "../../assets/galerie/photo5.jpg";
import photo6 from "../../assets/galerie/photo6.jpg";
import photo7 from "../../assets/galerie/photo7.jpg";
import photo8 from "../../assets/galerie/photo8.jpg";

const homeImages = [
  photo1, photo2, photo3, photo4,
  photo5, photo6, photo7, photo8,
];

function Menu() {
  return (
    <>
      <Header />

      <main className="main">
        <Banner className="banner" image={bannerMenu} alt="bannermenu">
          <h1 className="banner-title">MENU</h1>
        </Banner>

        <section className="menu-section">

          {/* ── Entrées ───────────────────────────────── */}
          <div className="menu-block">
            <h2 className="menu-category">Entrées</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>CROUSTILLANT DE CHÈVRE</p>
                  <span>10€</span>
                </div>
                <p>Fromage de chèvre et mozzarella fondante enveloppé dans une pâte croustillante, nappé de miel.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>BURRATA</p>
                  <span>12€</span>
                </div>
                <p>Burrata crémeuse accompagnée de tomates cerises, un filet d'huile d'olive et de sauce pesto.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CARPACCIO DE BŒUF</p>
                  <span>14€</span>
                </div>
                <p>Fines tranches de filet de bœuf cru marinées, relevées d'un filet d'huile d'olive, de copeaux de parmesan et de roquette fraîche.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CREVETTE DYNAMITE</p>
                  <span>13€</span>
                </div>
                <p>Crevettes croustillantes nappées d'une sauce légèrement épicée et onctueuse.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>POULET DYNAMITE</p>
                  <span>13€</span>
                </div>
                <p>Bouchée de poulet frit enrobées d'une sauce crémeuse et légèrement épicée, servi avec son riz.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CAMEMBERT RÔTI</p>
                  <span>13€</span>
                </div>
                <p>Camembert fondant, rôti au four et arrosé de miel, accompagné de son pain et de sa coupelle de lardons grillés.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>TARTARE AVOCAT SAUMON</p>
                  <span>13€</span>
                </div>
                <p>Dés de saumon frais marinés sur son lit d'avocat, relevés d'une touche de citron et coriandre.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>SALADE CÉSAR</p>
                  <span>14€</span>
                </div>
                <p>Laitue croquante, accompagnée de poulet pané, croûtons et de parmesan fraîchement râpé, nappé d'une onctueuse sauce César.</p>
              </div>

            </div>
          </div>

          {/* ── Pâtes ─────────────────────────────────── */}
          <div className="menu-block">
            <h2 className="menu-category">Pâtes</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>CARBONARA</p>
                  <span>14€</span>
                </div>
                <p>Tagliatelles enrobées d'une sauce onctueuse à base de crème et de fromage accompagnée de lardon grillé.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>FORESTIÈRE</p>
                  <span>14€</span>
                </div>
                <p>Pennes avec une généreuse sauce crémeuse au poulet et champignons de Paris.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>DUO DE SAUMON</p>
                  <span>15€</span>
                </div>
                <p>Tagliatelles sublimées par un duo de saumon fumé et de saumon frais, le tout mêlée à une sauce crémeuse à l'aneth et au citron.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>PESTO</p>
                  <span>14€</span>
                </div>
                <p>Linguini accompagnée d'un pesto maison parfumé au basilic frais, ail et parmesan.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CREVETTE</p>
                  <span>15€</span>
                </div>
                <p>Linguini aux crevettes mijotées dans une sauce tomate, relevée d'ail, d'oignon et d'herbes aromatiques.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>TRUFFE</p>
                  <span>16€</span>
                </div>
                <p>Rigatonni à la crème de truffe, sublimées par un carpaccio de truffe fraîche et une touche de parmesan et de champignons de Paris.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>BOLOGNAISE</p>
                  <span>13€</span>
                </div>
                <p>Spaghetti nappées d'une sauce mijotée aux tomates fraîches et au bœuf haché, relevée d'herbes aromatiques.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>ARRABBIATA</p>
                  <span>12€</span>
                </div>
                <p>Penne enrobées d'une sauce tomate relevée au piment, à l'ail et à l'huile d'olive.</p>
              </div>

            </div>
          </div>

          {/* ── Burgers ───────────────────────────────── */}
          <div className="menu-block">
            <h2 className="menu-category">Burgers</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>CLASSIQUE</p>
                  <span>13€</span>
                </div>
                <p>Burger composé d'un steak de bœuf, cheddar fondant, laitue, oignon rouge, tomates fraîches, sauce biggy accompagné de frites.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>SANG NOM</p>
                  <span>15€</span>
                </div>
                <p>Burger composé d'un steak de bœuf, fromage raclette, bacon, roquette, oignon rouge, tomate fraîche, sauce biggy accompagné de frites.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CRISPY</p>
                  <span>15€</span>
                </div>
                <p>Burger composé d'un filet de poulet pané maison, galette de pommes de terre, fromage cheddar, laitue, tomate, oignon rouge, sauce barbecue servi avec des frites.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CHÈVRE</p>
                  <span>14€</span>
                </div>
                <p>Burger composé d'un steak de bœuf, fromage de chèvre nappé de miel doux, roquette, tomate et oignon confit servi avec des frites.</p>
              </div>

            </div>
          </div>

          {/* ── Plats ─────────────────────────────────── */}
          <div className="menu-block">
            <h2 className="menu-category">Plats</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>FILET DE BŒUF</p>
                  <span>24€</span>
                </div>
                <p>Filet de bœuf de 250g, avec sa touche de fleur de sel accompagnée d'une sauce au choix (poivre ou truffe) et de frites maison.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>ENTRECÔTE DE BŒUF</p>
                  <span>22€</span>
                </div>
                <p>Entrecôte de bœuf de 300g, avec sa touche de fleur de sel accompagnée d'une sauce poivre et de frites maison.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CÔTE D'AGNEAU</p>
                  <span>22€</span>
                </div>
                <p>Des côtes d'agneau savoureuses, grillées à la perfection, accompagnées de frites dorées et d'une salade fraîche.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>SOURIS D'AGNEAU</p>
                  <span>24€</span>
                </div>
                <p>Souris d'agneau fondante, longuement mijotée dans un jus parfumé aux herbes et épices accompagnée de purée.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>SUPRÊME DE POULET</p>
                  <span>18€</span>
                </div>
                <p>Escalope de poulet tendre et dorée, servie avec une sauce aux champignons accompagnée de purée.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>PAVÉ DE SAUMON</p>
                  <span>18€</span>
                </div>
                <p>Pavé de saumon grillé, croustillant à l'extérieur et tendre à l'intérieur, servi avec une sauce crémeuse à l'aneth accompagné de riz.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>ROULEAU DI BELLA</p>
                  <span>18€</span>
                </div>
                <p>Escalope de poulet pané fourrée au cheddar fondant et au bacon de dinde, accompagnée de pâtes à la Carbonara.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>ESCALOPE MILANAISE</p>
                  <span>15€</span>
                </div>
                <p>Escalope de poulet pané, servie avec des pâtes enrobées d'une sauce fromagère.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>STEAK À CHEVAL</p>
                  <span>16€</span>
                </div>
                <p>Steak de bœuf grillé, surmonté d'un œuf au plat fondant, accompagné de frites croustillantes.</p>
              </div>

            </div>
          </div>

          {/* ── Desserts ──────────────────────────────── */}
          <div className="menu-block">
            <h2 className="menu-category">Desserts</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>PAIN PERDU</p>
                  <span>10€</span>
                </div>
                <p>Brioche dorée à la perfection accompagnée de crème glacée vanille. Topping au choix : Nutella, Caramel beurre salé ou Caramel spéculos.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CHEESECAKE</p>
                  <span>10€</span>
                </div>
                <p>Un cheesecake fondant et délicat, sublimé par un coulis au choix : mangue, fruits rouges ou caramel spéculos.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>TIRAMISÙ</p>
                  <span>10€</span>
                </div>
                <p>Le véritable tiramisù italien au café.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>FONDANT AU CHOCOLAT</p>
                  <span>9€</span>
                </div>
                <p>Gâteau au chocolat fondant au cœur coulant servi tiède et accompagné d'une crème anglaise.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>TIRAMISÙ PISTACHE</p>
                  <span>12€</span>
                </div>
                <p>Un délicieux nuage de mascarpone à la crème de pistache.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CRÈME BRÛLÉE</p>
                  <span>10€</span>
                </div>
                <p>Une crème onctueuse à la vanille Bourbon, délicatement caramélisée à la flamme, sous sa fine croûte dorée.</p>
              </div>

            </div>
          </div>

          {/* ── Mocktails ─────────────────────────────── */}
          <div className="menu-block">
            <h2 className="menu-category">Mocktails (sans alcool)</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>MARSEILLE</p>
                  <span>8€</span>
                </div>
                <p>Nectar d'ananas, purée de passion, purée de mangue.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>BORDEAU</p>
                  <span>8€</span>
                </div>
                <p>Fraise, purée de framboise, passion.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>MOJITO</p>
                  <span>9€</span>
                </div>
                <p>Menthe, citron vert, sucre de canne, limonade.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>ANAGUM</p>
                  <span>8€</span>
                </div>
                <p>Ananas, citron vert, limonade, sirop bubble gum.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>PASSION</p>
                  <span>8€</span>
                </div>
                <p>Pomme, poire, fruit de la passion, citron.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>PIÑA COLADA</p>
                  <span>8€</span>
                </div>
                <p>Crème de coco, nectar d'ananas.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>TROPICAL CANDY</p>
                  <span>8€</span>
                </div>
                <p>Nectar d'ananas, bubble gum, purée de fruits rouges.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>MANGOA</p>
                  <span>8€</span>
                </div>
                <p>Nectar de goyave, purée de mangue, sucre de canne et citron vert.</p>
              </div>

            </div>
          </div>

          {/* ── Boissons ──────────────────────────────── */}
          <div className="menu-block">
            <h2 className="menu-category">Boissons</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>Coca (classique, zéro, cherry)</p>
                  <span>3,5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Ice Tea</p>
                  <span>3,5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Oasis</p>
                  <span>3,5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Orangina</p>
                  <span>3,5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Lorina</p>
                  <span>3,5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>San Pellegrino</p>
                  <span>3,5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Evian</p>
                  <span>3,5€</span>
                </div>
              </div>

            </div>
          </div>

          {/* ── Menu Midi ─────────────────────────────── */}
          <div className="menu-block">
            <h2 className="menu-category">Menu Midi — 19,90€</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>Du lundi au dimanche · 12h–15h · Sur place ou à emporter</p>
                </div>
                <p>Entrée + Plat + Boisson <strong>ou</strong> Plat + Dessert + Boisson</p>
              </div>

              <div className="menu-item">
                <p><strong>Entrées au choix : </strong>Burrata, Croustillant de chèvre, Poulet dynamite</p>
              </div>

              <div className="menu-item">
                <p><strong>Plats au choix : </strong>Burger Classique, Pâtes à la truffe, Pâtes au pesto, Pâtes forestière, Pâtes duo de saumon, Pâtes à la carbonara, Pâtes arrabbiata, Pâtes aux crevettes</p>
              </div>

              <div className="menu-item">
                <p><strong>Desserts au choix : </strong>Tiramisù maison, Crème brûlée, Fondant au chocolat</p>
              </div>

            </div>
          </div>

        </section>

        <Galerie images={homeImages} />
      </main>

      <Footer />
    </>
  );
}

export default Menu;

// import React from 'react';
// import Header from "../../layout/Header/header";
// import Banner from "../../components/Banner/banner";
// import bannerMenu from "../../assets/menuHome1.jpg";
// import Footer from "../../layout/Footer/footer";
// import Galerie from "../../components/Galerie/galerie";
// import { Link } from "react-router-dom";

// import photo1 from "../../assets/galerie/photo1.jpg";
// import photo2 from "../../assets/galerie/photo2.jpg";
// import photo3 from "../../assets/galerie/photo3.jpg";
// import photo4 from "../../assets/galerie/photo4.jpg";
// import photo5 from "../../assets/galerie/photo5.jpg";
// import photo6 from "../../assets/galerie/photo6.jpg";
// import photo7 from "../../assets/galerie/photo7.jpg";
// import photo8 from "../../assets/galerie/photo8.jpg";


// const homeImages = [
//   photo1,
//   photo2,
//   photo3,
//   photo4,
//   photo5,
//   photo6,
//   photo7,
//   photo8,
  
// ];

// function Menu() {
//   return (
//     <>
//       <Header />

//       <main className="main">
//         <Banner className="banner" image={bannerMenu} alt="bannermenu">
//           <h1 className="banner-title">MENU</h1>
//         </Banner>

//         <section className="menu-section">

//           {/* Entrées */}
//           <div className="menu-block">
//             <h2 className="menu-category">Entrées</h2>
//             <div className="menu-list">

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>ŒUF POCHÉ FORESTIER</p>
//                   <span>8,9€</span>
//                 </div>
//                 <p>Œuf poché délicatement posé sur un lit de champignons sautés.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>POULET DYNAMITE</p>
//                   <span>10,9€</span>
//                 </div>
//                 <p>Morceaux de poulet croustillants, nappés d’une sauce légèrement épicée.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>CREVETTES DYNAMITE</p>
//                   <span>12,9€</span>
//                 </div>
//                 <p>Crevettes juteuses et savoureuses, accompagnées de leur sauce relevée.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>BURRATA CRÉMEUSE</p>
//                   <span>12,9€</span>
//                 </div>
//                 <p>Burrata 125g fondante servie avec tomates et roquette fraîche.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>CARPACCIO DE BŒUF</p>
//                   <span>13,9€</span>
//                 </div>
//                 <p>Fines tranches de bœuf, parmesan et roquette.</p>
//               </div>

//               {/* <div className="menu-description">
//                 <div className="menu-item">
//                   <p>VELOUTÉ DE SAISON</p>
//                   <span>6,9€</span>
//                 </div>
//                 <p>Velouté onctueux de potimarron et carottes, infusé au thym, servi avec stracciatella crémeuse et pesto maison.</p>
//               </div> */}

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>CAMEMBERT RÔTI</p>
//                   <span>9,9€</span>
//                 </div>
//                 <p>Camembert fondant rôti au four, parfumé aux herbes et nappé de miel.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>CHÈVRE EN CROÛTE DORÉE</p>
//                   <span>9,9€</span>
//                 </div>
//                 <p>Fromage de chèvre fondant enveloppé dans une pâte croustillante, légèrement parfumée.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>TRANCHE DE FOIE GRAS MAISON</p>
//                   <span>16,9€</span>
//                 </div>
//                 <p>Foie gras de canard maison, servi avec chutney de saison et pain de campagne doré.</p>
//               </div>

//             </div>
//           </div>

//           {/* Plats */}
//           <div className="menu-block">
//             <h2 className="menu-category">Plats</h2>
//             <div className="menu-list">

//               {/* <div className="menu-description">
//                 <div className="menu-item">
//                   <p>POULET BASQUAISE</p>
//                   <span>17,9€</span>
//                 </div>
//                 <p>Cuisse de poulet tendre mijotée aux poivrons, tomates et oignons, parfumé au piment d’Espelette et servi avec du riz.</p>
//               </div> */}

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>ESCALOPE MILANAISE</p>
//                   <span>16,9€</span>
//                 </div>
//                 <p>Escalope de poulet panée, servie avec des pâtes fromagères.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>FAUX FILET DE BŒUF</p>
//                   <span>21,9€</span>
//                 </div>
//                 <p>Faux-filet 180g grillé, servi avec une sauce poivre accompagné de frites maison.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>OSSO BUCO</p>
//                   <span>21,9€</span>
//                 </div>
//                 <p>Jarret de veau fondant, servi avec son jus parfumé et riz.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>FILET DE BŒUF CHATEAUBRIAND</p>
//                   <span>24,9€</span>
//                 </div>
//                 <p>Filet de bœuf 180g tendre et juteux, servi avec une sauce béarnaise et frites maison.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>ENTRECÔTE D’ALOYAU DE BŒUF</p>
//                   <span>24,9€</span>
//                 </div>
//                 <p>Entrecôte 250g généreuse, grillée à la perfection et servie avec ses frites maison.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>SOURIS D’AGNEAU</p>
//                   <span>29,9€</span>
//                 </div>
//                 <p>Souris d’agneau confite longuement parfumée aux herbes, accompagnée d’un gratin servie avec sa sauce réduite.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>FILET DE BŒUF ROSSIGNI</p>
//                   <span>33,9€</span>
//                 </div>
//                 <p>Filet de bœuf 250g tendre surmonté de foie gras poêlé servi avec son jus de bœuf et gratin dauphinois.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>CÔTELETTES DU CHEF</p>
//                   <span>25,9€</span>
//                 </div>
//                 <p>Trio de côtelettes d’agneau marinées aux herbes et grillées à la perfection, servies avec gratin.</p>
//               </div>

//             </div>
//           </div>


//           {/* Pâtes */}
//           <div className="menu-block">
//             <h2 className="menu-category">Pâtes</h2>
//             <div className="menu-list">

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>CARBONARA</p>
//                   <span>14,9€</span>
//                 </div>
//                 <p>Taggliatelles crémeuses aux lardons fumés, jaune d'œuf et parmesan.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>FORESTIÈRE</p>
//                   <span>13,9€</span>
//                 </div>
//                 <p>Pennes nappées d'une sauce onctueuse aux champignons de Paris et cèpes, relevée d'une touche d'ail et de persil frais.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>ARRABIATA</p>
//                   <span>13,9€</span>
//                 </div>
//                 <p>Linguine à la sauce tomate épicée aux herbes fraîches.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>SAUMON</p>
//                   <span>15,9€</span>
//                 </div>
//                 <p>Taggliatelles au pavé de saumon frais, crème légère au citron et aneth.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>LASAGNE</p>
//                   <span>17,9€</span>
//                 </div>
//                 <p>Pâtes fraîches gratinées, sauce bolognaise maison et béchamel fondante.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>PASTA DE LA MER</p>
//                   <span>18,9€</span>
//                 </div>
//                 <p>Pennes aux crevettes, moules et calamars, sauce tomate parfumée au basilic.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>TRUFFE</p>
//                   <span>19,9€</span>
//                 </div>
//                 <p>Pâtes gourmandes à la crème de truffe et copeaux de parmesan.</p>
//               </div>

//             </div>
//           </div>


//           {/* Menu Enfant */}
//           <div className="menu-block">
//             <h2 className="menu-category">Menu Enfant</h2>

//             <div className="menu-list">

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Menu Enfant</p>
//                   <span>10€</span>
//                 </div>
//                 <p>Menu destiné aux enfants jusqu'à 10 ans.</p>
//               </div>

//               <div className="menu-item">
//                 <p><strong>Plat : </strong>Pâtes fromagères ou Pâtes sauce tomate</p>
//               </div>

//               <div className="menu-item">
//                 <p><strong>Boisson : </strong>Sirop ou Verre de jus</p>
//               </div>

//               <div className="menu-item">
//                 <p><strong>Dessert : </strong>Boule de glace vanille ou Compote de pomme</p>
//               </div>

//             </div>
//           </div>


//           {/* Desserts */}
//           <div className="menu-block">
//             <h2 className="menu-category">Desserts</h2>
//             <div className="menu-list">

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>MOUSSE AU CHOCOLAT MAISON</p>
//                   <span>6,9€</span>
//                 </div>
//                 <p>Mousse onctueuse au chocolat noir, légère et riche en saveurs.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>CRÈME BRÛLÉE ARTISANAL</p>
//                   <span>8,9€</span>
//                 </div>
//                 <p>Crème maison à la vanille, caramélisée à la flamme pour un croquant parfait.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>ANANAS RÔTI</p>
//                   <span>8,9€</span>
//                 </div>
//                 <p>Ananas rôti au miel et cannelle, servi tiède avec sa boule de glace coco.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>BRIOCHE PERDUE</p>
//                   <span>9,9€</span>
//                 </div>
//                 <p>Brioche moelleuse caramélisée, servie tiède avec glace vanille et caramel beurre salé maison.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>TIRAMISU CLASSIQUE</p>
//                   <span>9,9€</span>
//                 </div>
//                 <p>Crème mascarpone légère, biscuit imbibé au café et cacao intense.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>CŒUR COULANT AU CHOCOLAT</p>
//                   <span>9,9€</span>
//                 </div>
//                 <p>Fondant au chocolat noir maison, servi chaud avec une boule de glace vanille.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>TRÉSOR DU CHEF</p>
//                   <span>11,9€</span>
//                 </div>
//                 <p>Feuilleté croustillant, crème pralinée et éclats de noisettes.</p>
//               </div>

//             </div>
//           </div>


//           {/* Boissons */}
//           <div className="menu-block">
//             <h2 className="menu-category">Boissons</h2>
//             <div className="menu-list">

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Coca, Zero, Cherry 33cl</p>
//                   <span>4,5€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Oasis 33cl</p>
//                   <span>4,5€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Ice Tea 25cl</p>
//                   <span>4,5€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Eau plate / gazeuse 50cl</p>
//                   <span>4€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Eau plate / gazeuse 1L</p>
//                   <span>6,5€</span>
//                 </div>
//               </div>

//               {/* Jus au verre */}
//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Orange 25cl</p>
//                   <span>5€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Pomme 25cl</p>
//                   <span>5€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Ananas 25cl</p>
//                   <span>5€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Cranberry 25cl</p>
//                   <span>5€</span>
//                 </div>
//               </div>

//               {/* Boissons chaudes */}
//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Café</p>
//                   <span>2,5€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Thé</p>
//                   <span>4,5€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>Tisane</p>
//                   <span>4€</span>
//                 </div>
//               </div>

//             </div>
//           </div>


//           {/* Apéritifs */}
//           <div className="menu-block">
//             <h2 className="menu-category">Apéritifs</h2>
//             <div className="menu-list">

//               {/* Classique 12cl */}
//               <h2 className="menu-categoryB"> Classique 12cl</h2>
//               <div className="menu-description">
                
//                 <div className="menu-item">
//                   <p>KIR VIN BLANC</p>
//                   <span>8€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>APÉROL SPRITZ</p>
//                   <span>10€</span>
//                 </div>
//               </div>

//               {/* Spiritueux 4cl */}
//               <h2 className="menu-categoryB"> Classique 4cl</h2>
//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>SHIVAS</p>
//                   <span>12€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>ABSOLUT</p>
//                   <span>10€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>KRAKEN</p>
//                   <span>11€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>JACK DANIEL</p>
//                   <span>10€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>BELVEDER</p>
//                   <span>12€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>DIPLOMATICO</p>
//                   <span>12€</span>
//                 </div>
//               </div>

//             </div>
//           </div>


//           {/* Mocktails */}
//           <div className="menu-block">
//             <h2 className="menu-category">Mocktails 25cl (sans alcool)</h2>
//             <div className="menu-list">

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>TROPICAL LIGHT</p>
//                   <span>9,5€</span>
//                 </div>
//                 <p>Ananas, gingembre et citron vert.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>BIEN AIMÉ</p>
//                   <span>9,5€</span>
//                 </div>
//                 <p>Ananas, amande et citron vert.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>PASSION FLORAL</p>
//                   <span>9,5€</span>
//                 </div>
//                 <p>Thé vert au jasmin, fleurs de sureau et fruit de la passion.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>VIRGIN COLADA</p>
//                   <span>9,5€</span>
//                 </div>
//                 <p>Lait de coco et ananas.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>VIRGIN MOJITO</p>
//                   <span>9,5€</span>
//                 </div>
//                 <p>Menthe fraîche, citron vert et sucre de canne.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>MERLOTINE</p>
//                   <span>9,5€</span>
//                 </div>
//                 <p>Fraise, framboise et passion.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>*Mocktail sur mesure</p>
//                   <span>12€</span>
//                 </div>
//               </div>

//             </div>
//           </div>



//           {/* Cocktails */}
//           <div className="menu-block">
//             <h2 className="menu-category">Cocktails</h2>
//             <div className="menu-list">

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>PINA COLADA 25cl</p>
//                   <span>14€</span>
//                 </div>
//                 <p>Rhum blanc (4 cl), lait de coco et jus d'ananas.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>MOSCOW MULE 25cl</p>
//                   <span>14€</span>
//                 </div>
//                 <p>Vodka (4 cl), ginger beer et jus de citron vert.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>PORNSTAR 12cl</p>
//                   <span>17€</span>
//                 </div>
//                 <p>Vodka vanille (4 cl), fruit de la passion et un shot de prosecco à côté.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>SEX ON THE BEACH 25cl</p>
//                   <span>16€</span>
//                 </div>
//                 <p>Vodka (4 cl), liqueur de pêche, jus d'orange et cranberry.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>PASSIONNÉMENT 12cl</p>
//                   <span>18€</span>
//                 </div>
//                 <p>Rhum (4 cl), champagne et fruit de la passion.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>GIN FIZZ 12cl</p>
//                   <span>14€</span>
//                 </div>
//                 <p>Gin (4 cl), jus de citron et sucre.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>MARGARITA 12cl</p>
//                   <span>17€</span>
//                 </div>
//                 <p>Tequila (4 cl), triple sec, jus de citron vert frais.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>MOJITO 25cl</p>
//                   <span>14€</span>
//                 </div>
//                 <p>Rhum blanc (4 cl), menthe fraîche, citron vert, sucre de canne.</p>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>*Cocktail sur mesure</p>
//                   <span>16€</span>
//                 </div>
//               </div>

//             </div>
//           </div>



//           {/* Digestifs */}
//           <div className="menu-block">
//             <h2 className="menu-category">Digestifs 4cl</h2>
//             <div className="menu-list">

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>BAILEY</p>
//                   <span>9€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>JET 27</p>
//                   <span>9€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>COINTREAU</p>
//                   <span>10€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>LIMONCELLO</p>
//                   <span>9€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>HENNESY</p>
//                   <span>12€</span>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Vins & Champagnes */}
//           <div className="menu-block">
//             <h2 className="menu-category">Vins & Champagnes</h2>
//             <div className="menu-list">
//               <h2 className="menu-categoryC">Verre 14cl | Bouteille 75cl</h2>

//               {/* Vin blanc */}
//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>CHARDONNAY IGP</p>
//                   <span> 6,5€ |  35€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>POUILLY-FUMÉ AOP</p>
//                   <span> 8€ | 42€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>SANCERRE AOP</p>
//                   <span> 9€ | 45€</span>
//                 </div>
//               </div>

//               {/* Vin rosé */}
//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>CÔTE DE PROVENCE AOP</p>
//                   <span> 7,5€ | 38€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>MINUTY AOP CÔTE DE PROVENCE</p>
//                   <span>9,5€ | 50€</span>
//                 </div>
//               </div>

//               {/* Vin rouge */}
//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>BORDEAUX AOP</p>
//                   <span> 7€ | 38€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>CÔTE DU RHONE AOP</p>
//                   <span> 8€ | 42€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>BROUILLY AOP</p>
//                   <span> 9€ | 46€</span>
//                 </div>
//               </div>

//               {/* Champagne */}
//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>NICOLAS FEUILLATTE BRUT</p>
//                   <span>14€ | 75€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>VEUVE PELLETIER BRUT</p>
//                   <span> 13€ | 68,5€</span>
//                 </div>
//               </div>

//               <div className="menu-description">
//                 <div className="menu-item">
//                   <p>MOËT & CHANDON IMPÉRIAL</p>
//                   <span> | 110€</span>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </section>
//         <Galerie images={homeImages} />
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default Menu;
