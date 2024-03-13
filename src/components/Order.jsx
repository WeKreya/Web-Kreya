import React from "react";

function Order() {
  return (
    <div className="order">
      <h2>Bagaimana Cara Pemesanannya?</h2>
      <p>
        Bikin website sesuai kebutuhan, cukup hubungi kami dan beritahukan
        kebutuhan Anda.
      </p>
      <div className="order-content">
        <div>
          <div className="order-content-icon"></div>
          <div className="order-content-value">
            <h3>Whatsapp / Call</h3>
            <p>Hubungi tim profesional kami via WA/telp.</p>
          </div>
        </div>
        <div>
          <div className="order-content-icon"></div>
          <div className="order-content-value">
            <h3>Live Chat</h3>
            <p>Chat langsung dengan operator kami via Live Chat.</p>
          </div>
        </div>
        <div>
          <div className="order-content-icon"></div>
          <div className="order-content-value">
            <h3>Email</h3>
            <p>Minta penawaran via Email melalui info@kreya.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
