import React from "react";
import Service1 from "../../assets/img/Service1.png";
import Service2 from "../../assets/img/Service2.png";
import Service3 from "../../assets/img/Service3.png";
import './order.css'

function Order() {
  return (
    <div className="order">
      <h2>Bagaimana Cara Pemesanannya?</h2>
      <p>
        Bikin website sesuai kebutuhan, cukup hubungi kami dan beritahukan
        kebutuhan Anda.
      </p>
      <div className="order-content">
        <div className="order-content-main">
          <div className="order-content-icon">
            <img src={Service1} />
          </div>
          <div className="order-content-value">
            <h3>Konsultasikan Website Anda</h3>
            <p>
              Anda dapat berkonsultasi dengan tim kami melalui telepon, email,
              atau chat untuk menentukan jenis website yang sesuai dengan tujuan
              dan anggaran Anda.
            </p>
          </div>
        </div>
        <div className="order-content-main">
          <div className="order-content-icon">
            <img src={Service2} />
          </div>
          <div className="order-content-value">
            <h3>Pengembangan Website</h3>
            <p>
              Kami akan menjamin bahwa website Anda tidak hanya memiliki desain
              menarik tetapi juga dikembangkan secara cermat untuk memastikan
              mencapai tujuan yang Anda inginkan.
            </p>
          </div>
        </div>
        <div className="order-content-main">
          <div className="order-content-icon">
            <img src={Service3} />
          </div>
          <div className="order-content-value">
            <h3>Website siap diluncurkan!</h3>
            <p>
              Kami akan terus berkomunikasi dengan Anda untuk memastikan
              kepuasan dan kebutuhan Anda terpenuhi, melakukan pengujian sebelum
              website diluncurkan secara online untuk diakses oleh publik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
