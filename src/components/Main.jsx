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
          <h1>Menjadi Profesional</h1>
        </div>
        <div className="main-title-name p3">
          <h1>Bersama Kita!</h1>
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
      {/* <div className="main-contain">
        <div className="main-contain-content-1"></div>
        <div className="main-contain-content-2"></div>
        <div className="main-contain-content-3"></div>
        <div className="main-contain-content-4"></div>
        <div className="main-contain-content-5"></div>
      </div> */}
    </div>
  );
}

export default Main;
