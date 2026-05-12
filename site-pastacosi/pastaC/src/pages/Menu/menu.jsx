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