import React from "react";
import { TbStarFilled } from "react-icons/tb";

function Main() {
  return (
    <div className="main">
      <div className="main-title">
        <div className="main-title-name p1">
          <h1>Buat Websitemu</h1>
        </div>
        <div className="main-title-name p2">
          <div></div>
          <h1>Menjadi Profesional</h1>
        </div>
        <div className="main-title-name p3">
          <h1>Bersama Kita!</h1>
          <div></div>
        </div>
      </div>
      <div className="main-subtitle">
        <p>
          Wujudkan desain website profesional untuk bisnis impian yang mudah
          dikelola. Dapatkan paket pembuatan website sesuai dengan kebutuhan
          bisnis Anda.
        </p>
        <button>
          Bikin Websitemu Sekarang! <TbStarFilled/>
        </button>
      </div>
    </div>
  );
}

export default Main;
