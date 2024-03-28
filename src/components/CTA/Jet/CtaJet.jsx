import React from "react";
import JetPack from "../../../assets/img/jetpack.png";
import './jet.css'

function CtaJet() {
  return (
    <div className="jet">
      <div className="jet-image">
        <img src={JetPack} alt="Jet" />
      </div>
      <div className="jet-content">
        <h1>Butuh solusi lebih lanjut?</h1>
        <p>
          Kamu ragu atau ingin ngobrol dulu tentang kebutuhan bisnismu? Atau
          ingin memastikan layanan lainnya? Tidak perlu khawatir, kami bersedia
          membantumu.
        </p>
        <button>Hubungi Kami</button>
      </div>
    </div>
  );
}

export default CtaJet;
