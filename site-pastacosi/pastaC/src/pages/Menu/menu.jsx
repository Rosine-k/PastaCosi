import Header from "../../layout/Header/header";
import Banner from "../../components/Banner/banner";
import bannerMenu from "../../assets/menu.jpg";
import Footer from "../../layout/Footer/footer";
import Galerie from "../../components/Galerie/galerie";
import { Link } from "react-router-dom";

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

function Menu() {
  return (
    <>
      <Header />

      <main className="main">
        <Banner className="banner" image={bannerMenu} alt="bannermenu">
          <h1 className="banner-title">MENU</h1>
        </Banner>

        <section className="menu-section">

          {/* Entrées */}
          <div className="menu-block">
            <h2 className="menu-category">Entrées</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>ŒUF POCHÉ FORESTIER</p>
                  <span>8,9€</span>
                </div>
                <p>Œuf poché délicatement posé sur un lit de champignons sautés.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>POULET DYNAMITE</p>
                  <span>10,9€</span>
                </div>
                <p>Morceaux de poulet croustillants, nappés d’une sauce légèrement épicée.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CREVETTES DYNAMITE</p>
                  <span>12,9€</span>
                </div>
                <p>Crevettes juteuses et savoureuses, accompagnées de leur sauce relevée.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>BURRATA CRÉMEUSE</p>
                  <span>12,9€</span>
                </div>
                <p>Burrata 125g fondante servie avec tomates et roquette fraîche.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CARPACCIO DE BŒUF</p>
                  <span>13,9€</span>
                </div>
                <p>Fines tranches de bœuf, parmesan et roquette.</p>
              </div>

              {/* <div className="menu-description">
                <div className="menu-item">
                  <p>VELOUTÉ DE SAISON</p>
                  <span>6,9€</span>
                </div>
                <p>Velouté onctueux de potimarron et carottes, infusé au thym, servi avec stracciatella crémeuse et pesto maison.</p>
              </div> */}

              <div className="menu-description">
                <div className="menu-item">
                  <p>CAMEMBERT RÔTI</p>
                  <span>9,9€</span>
                </div>
                <p>Camembert fondant rôti au four, parfumé aux herbes et nappé de miel.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CHÈVRE EN CROÛTE DORÉE</p>
                  <span>9,9€</span>
                </div>
                <p>Fromage de chèvre fondant enveloppé dans une pâte croustillante, légèrement parfumée.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>TRANCHE DE FOIE GRAS MAISON</p>
                  <span>16,9€</span>
                </div>
                <p>Foie gras de canard maison, servi avec chutney de saison et pain de campagne doré.</p>
              </div>

            </div>
          </div>

          {/* Plats */}
          <div className="menu-block">
            <h2 className="menu-category">Plats</h2>
            <div className="menu-list">

              {/* <div className="menu-description">
                <div className="menu-item">
                  <p>POULET BASQUAISE</p>
                  <span>17,9€</span>
                </div>
                <p>Cuisse de poulet tendre mijotée aux poivrons, tomates et oignons, parfumé au piment d’Espelette et servi avec du riz.</p>
              </div> */}

              <div className="menu-description">
                <div className="menu-item">
                  <p>ESCALOPE MILANAISE</p>
                  <span>16,9€</span>
                </div>
                <p>Escalope de poulet panée, servie avec des pâtes fromagères.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>FAUX FILET DE BŒUF</p>
                  <span>21,9€</span>
                </div>
                <p>Faux-filet 180g grillé, servi avec une sauce poivre accompagné de frites maison.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>OSSO BUCO</p>
                  <span>21,9€</span>
                </div>
                <p>Jarret de veau fondant, servi avec son jus parfumé et riz.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>FILET DE BŒUF CHATEAUBRIAND</p>
                  <span>24,9€</span>
                </div>
                <p>Filet de bœuf 180g tendre et juteux, servi avec une sauce béarnaise et frites maison.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>ENTRECÔTE D’ALOYAU DE BŒUF</p>
                  <span>24,9€</span>
                </div>
                <p>Entrecôte 250g généreuse, grillée à la perfection et servie avec ses frites maison.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>SOURIS D’AGNEAU</p>
                  <span>29,9€</span>
                </div>
                <p>Souris d’agneau confite longuement parfumée aux herbes, accompagnée d’un gratin servie avec sa sauce réduite.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>FILET DE BŒUF ROSSIGNI</p>
                  <span>33,9€</span>
                </div>
                <p>Filet de bœuf 250g tendre surmonté de foie gras poêlé servi avec son jus de bœuf et gratin dauphinois.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CÔTELETTES DU CHEF</p>
                  <span>25,9€</span>
                </div>
                <p>Trio de côtelettes d’agneau marinées aux herbes et grillées à la perfection, servies avec gratin.</p>
              </div>

            </div>
          </div>


          {/* Pâtes */}
          <div className="menu-block">
            <h2 className="menu-category">Pâtes</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>CARBONARA</p>
                  <span>14,9€</span>
                </div>
                <p>Taggliatelles crémeuses aux lardons fumés, jaune d'œuf et parmesan.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>FORESTIÈRE</p>
                  <span>13,9€</span>
                </div>
                <p>Pennes nappées d'une sauce onctueuse aux champignons de Paris et cèpes, relevée d'une touche d'ail et de persil frais.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>ARRABIATA</p>
                  <span>13,9€</span>
                </div>
                <p>Linguine à la sauce tomate épicée aux herbes fraîches.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>SAUMON</p>
                  <span>15,9€</span>
                </div>
                <p>Taggliatelles au pavé de saumon frais, crème légère au citron et aneth.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>LASAGNE</p>
                  <span>17,9€</span>
                </div>
                <p>Pâtes fraîches gratinées, sauce bolognaise maison et béchamel fondante.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>PASTA DE LA MER</p>
                  <span>18,9€</span>
                </div>
                <p>Pennes aux crevettes, moules et calamars, sauce tomate parfumée au basilic.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>TRUFFE</p>
                  <span>19,9€</span>
                </div>
                <p>Pâtes gourmandes à la crème de truffe et copeaux de parmesan.</p>
              </div>

            </div>
          </div>


          {/* Menu Enfant */}
          <div className="menu-block">
            <h2 className="menu-category">Menu Enfant</h2>

            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>Menu Enfant</p>
                  <span>10€</span>
                </div>
                <p>Menu destiné aux enfants jusqu'à 10 ans.</p>
              </div>

              <div className="menu-item">
                <p><strong>Plat : </strong>Pâtes fromagères ou Pâtes sauce tomate</p>
              </div>

              <div className="menu-item">
                <p><strong>Boisson : </strong>Sirop ou Verre de jus</p>
              </div>

              <div className="menu-item">
                <p><strong>Dessert : </strong>Boule de glace vanille ou Compote de pomme</p>
              </div>

            </div>
          </div>


          {/* Desserts */}
          <div className="menu-block">
            <h2 className="menu-category">Desserts</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>MOUSSE AU CHOCOLAT MAISON</p>
                  <span>6,9€</span>
                </div>
                <p>Mousse onctueuse au chocolat noir, légère et riche en saveurs.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CRÈME BRÛLÉE ARTISANAL</p>
                  <span>8,9€</span>
                </div>
                <p>Crème maison à la vanille, caramélisée à la flamme pour un croquant parfait.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>ANANAS RÔTI</p>
                  <span>8,9€</span>
                </div>
                <p>Ananas rôti au miel et cannelle, servi tiède avec sa boule de glace coco.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>BRIOCHE PERDUE</p>
                  <span>9,9€</span>
                </div>
                <p>Brioche moelleuse caramélisée, servie tiède avec glace vanille et caramel beurre salé maison.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>TIRAMISU CLASSIQUE</p>
                  <span>9,9€</span>
                </div>
                <p>Crème mascarpone légère, biscuit imbibé au café et cacao intense.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CŒUR COULANT AU CHOCOLAT</p>
                  <span>9,9€</span>
                </div>
                <p>Fondant au chocolat noir maison, servi chaud avec une boule de glace vanille.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>TRÉSOR DU CHEF</p>
                  <span>11,9€</span>
                </div>
                <p>Feuilleté croustillant, crème pralinée et éclats de noisettes.</p>
              </div>

            </div>
          </div>


          {/* Boissons */}
          <div className="menu-block">
            <h2 className="menu-category">Boissons</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>Coca, Zero, Cherry 33cl</p>
                  <span>4,5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Oasis 33cl</p>
                  <span>4,5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Ice Tea 25cl</p>
                  <span>4,5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Eau plate / gazeuse 50cl</p>
                  <span>4€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Eau plate / gazeuse 1L</p>
                  <span>6,5€</span>
                </div>
              </div>

              {/* Jus au verre */}
              <div className="menu-description">
                <div className="menu-item">
                  <p>Orange 25cl</p>
                  <span>5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Pomme 25cl</p>
                  <span>5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Ananas 25cl</p>
                  <span>5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Cranberry 25cl</p>
                  <span>5€</span>
                </div>
              </div>

              {/* Boissons chaudes */}
              <div className="menu-description">
                <div className="menu-item">
                  <p>Café</p>
                  <span>2,5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Thé</p>
                  <span>4,5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>Tisane</p>
                  <span>4€</span>
                </div>
              </div>

            </div>
          </div>


          {/* Apéritifs */}
          <div className="menu-block">
            <h2 className="menu-category">Apéritifs</h2>
            <div className="menu-list">

              {/* Classique 12cl */}
              <h2 className="menu-categoryB"> Classique 12cl</h2>
              <div className="menu-description">
                
                <div className="menu-item">
                  <p>KIR VIN BLANC</p>
                  <span>8€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>APÉROL SPRITZ</p>
                  <span>10€</span>
                </div>
              </div>

              {/* Spiritueux 4cl */}
              <h2 className="menu-categoryB"> Classique 4cl</h2>
              <div className="menu-description">
                <div className="menu-item">
                  <p>SHIVAS</p>
                  <span>12€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>ABSOLUT</p>
                  <span>10€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>KRAKEN</p>
                  <span>11€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>JACK DANIEL</p>
                  <span>10€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>BELVEDER</p>
                  <span>12€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>DIPLOMATICO</p>
                  <span>12€</span>
                </div>
              </div>

            </div>
          </div>


          {/* Mocktails */}
          <div className="menu-block">
            <h2 className="menu-category">Mocktails 25cl (sans alcool)</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>TROPICAL LIGHT</p>
                  <span>9,5€</span>
                </div>
                <p>Ananas, gingembre et citron vert.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>BIEN AIMÉ</p>
                  <span>9,5€</span>
                </div>
                <p>Ananas, amande et citron vert.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>PASSION FLORAL</p>
                  <span>9,5€</span>
                </div>
                <p>Thé vert au jasmin, fleurs de sureau et fruit de la passion.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>VIRGIN COLADA</p>
                  <span>9,5€</span>
                </div>
                <p>Lait de coco et ananas.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>VIRGIN MOJITO</p>
                  <span>9,5€</span>
                </div>
                <p>Menthe fraîche, citron vert et sucre de canne.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>MERLOTINE</p>
                  <span>9,5€</span>
                </div>
                <p>Fraise, framboise et passion.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>*Mocktail sur mesure</p>
                  <span>12€</span>
                </div>
              </div>

            </div>
          </div>



          {/* Cocktails */}
          <div className="menu-block">
            <h2 className="menu-category">Cocktails</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>PINA COLADA 25cl</p>
                  <span>14€</span>
                </div>
                <p>Rhum blanc (4 cl), lait de coco et jus d'ananas.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>MOSCOW MULE 25cl</p>
                  <span>14€</span>
                </div>
                <p>Vodka (4 cl), ginger beer et jus de citron vert.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>PORNSTAR 12cl</p>
                  <span>17€</span>
                </div>
                <p>Vodka vanille (4 cl), fruit de la passion et un shot de prosecco à côté.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>SEX ON THE BEACH 25cl</p>
                  <span>16€</span>
                </div>
                <p>Vodka (4 cl), liqueur de pêche, jus d'orange et cranberry.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>PASSIONNÉMENT 12cl</p>
                  <span>18€</span>
                </div>
                <p>Rhum (4 cl), champagne et fruit de la passion.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>GIN FIZZ 12cl</p>
                  <span>14€</span>
                </div>
                <p>Gin (4 cl), jus de citron et sucre.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>MARGARITA 12cl</p>
                  <span>17€</span>
                </div>
                <p>Tequila (4 cl), triple sec, jus de citron vert frais.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>MOJITO 25cl</p>
                  <span>14€</span>
                </div>
                <p>Rhum blanc (4 cl), menthe fraîche, citron vert, sucre de canne.</p>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>*Cocktail sur mesure</p>
                  <span>16€</span>
                </div>
              </div>

            </div>
          </div>



          {/* Digestifs */}
          <div className="menu-block">
            <h2 className="menu-category">Digestifs 4cl</h2>
            <div className="menu-list">

              <div className="menu-description">
                <div className="menu-item">
                  <p>BAILEY</p>
                  <span>9€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>JET 27</p>
                  <span>9€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>COINTREAU</p>
                  <span>10€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>LIMONCELLO</p>
                  <span>9€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>HENNESY</p>
                  <span>12€</span>
                </div>
              </div>

            </div>
          </div>

          {/* Vins & Champagnes */}
          <div className="menu-block">
            <h2 className="menu-category">Vins & Champagnes</h2>
            <div className="menu-list">
              <h2 className="menu-categoryC">Verre 14cl | Bouteille 75cl</h2>

              {/* Vin blanc */}
              <div className="menu-description">
                <div className="menu-item">
                  <p>CHARDONNAY IGP</p>
                  <span> 6,5€ |  35€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>POUILLY-FUMÉ AOP</p>
                  <span> 8€ | 42€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>SANCERRE AOP</p>
                  <span> 9€ | 45€</span>
                </div>
              </div>

              {/* Vin rosé */}
              <div className="menu-description">
                <div className="menu-item">
                  <p>CÔTE DE PROVENCE AOP</p>
                  <span> 7,5€ | 38€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>MINUTY AOP CÔTE DE PROVENCE</p>
                  <span>9,5€ | 50€</span>
                </div>
              </div>

              {/* Vin rouge */}
              <div className="menu-description">
                <div className="menu-item">
                  <p>BORDEAUX AOP</p>
                  <span> 7€ | 38€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>CÔTE DU RHONE AOP</p>
                  <span> 8€ | 42€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>BROUILLY AOP</p>
                  <span> 9€ | 46€</span>
                </div>
              </div>

              {/* Champagne */}
              <div className="menu-description">
                <div className="menu-item">
                  <p>NICOLAS FEUILLATTE BRUT</p>
                  <span>14€ | 75€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>VEUVE PELLETIER BRUT</p>
                  <span> 13€ | 68,5€</span>
                </div>
              </div>

              <div className="menu-description">
                <div className="menu-item">
                  <p>MOËT & CHANDON IMPÉRIAL</p>
                  <span> | 110€</span>
                </div>
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
