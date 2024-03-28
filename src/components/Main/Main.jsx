import React from "react";
import { TbStarFilled } from "react-icons/tb";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import './main.css'

function Main() {
  return (
    <div className="main">
      <div className="main-title">
        <div className="main-title-name p1">
          <h1>Buat Websitemu</h1>
        </div>
        <div className="main-title-name p2">
          <h1>Menjadi Profesional Bersama</h1>
          <h1>Kreya</h1>
          <h1>!</h1>
        </div>
        <p>
          Wujudkan desain website profesional untuk bisnis impian yang mudah
          dikelola. Dapatkan paket pembuatan website sesuai dengan kebutuhan
          bisnis Anda.
        </p>
      </div>
      <div className="main-subtitle">
        <button>
          Bikin Websitemu Sekarang! <TbStarFilled />
        </button>
      </div>
      <div className="main-contain">
        <button className="main-contain-button b1">
          <FaFacebook />
        </button>
        <button className="main-contain-button b2">
          <FaInstagram />
        </button>
        <button className="main-contain-button b3">
          <FaWhatsapp />
        </button>
      </div>
    </div>
  );
}

export default Main;
