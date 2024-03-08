import React from "react";
import Logo from "../assets/icon/logoKreyaFull.svg?react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Logo width="130px" />
      </div>
      <div className="navbar-link">
        <ul>
          <li><a>Template</a></li>
          <li><a>Cara Pembelian</a></li>
          <li><a>Harga</a></li>
          <li><a>Portofolio</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-contact">
        <button>Konsultasi Website</button>
      </div>
    </div>
  );
}

export default Navbar;
