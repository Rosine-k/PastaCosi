
import { useState } from "react";
import Header from "../../layout/Header/header";
import Banner from "../../components/Banner/banner";
import bannerResa from "../../assets/reservation.jpg";
import Galerie from "../../components/Galerie/galerie";
import Footer from "../../layout/Footer/footer";
import Resa1 from "../../assets/reservation/resto1.jpg";
import Resa2 from "../../assets/reservation/resto2.jpg";
import Resa3 from "../../assets/reservation/resto3.jpg";
import Resa4 from "../../assets/reservation/resto4.jpg";
import Resa5 from "../../assets/reservation/resto5.jpg";
import Resa6 from "../../assets/reservation/resto6.jpg";
import Resa7 from "../../assets/reservation/resto7.jpg";
import Resa8 from "../../assets/reservation/resto8.jpg";
import Resa9 from "../../assets/reservation/resto9.jpg";

const resaImages = [
  Resa1, Resa2, Resa3, Resa4, Resa5,
  Resa6, Resa7, Resa8, Resa9
];

function Reservation() {
  return (
    <>
      <Header />
      <main className="main">
        <Banner className="banner" image={bannerResa} alt="bannermenu">
          <h1 className="banner-title">Réservation</h1>
        </Banner>

        
        <div style={{ width: "100%", minHeight: "800px", margin: "40px 0" }}>
          <iframe
            src="https://widget.thefork.com/597db47d-f759-44b9-9c62-c86a087078f3"
            allow="payment *"
            style={{
              width: "100%",
              minHeight: "800px",
              border: "none",
              overflow: "scroll",
            }}
            title="Réservation en ligne"
          ></iframe>
        </div>

        <Galerie images={resaImages} />
      </main>
      <Footer />
    </>
  );
}

export default Reservation;
