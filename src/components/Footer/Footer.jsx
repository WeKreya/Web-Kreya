import React from "react";
import Logo from "../../assets/icon/logoKreyaFullColor.svg?react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-menu">
        <div className="footer-menu-content">
          <Logo width="180px" height="60px" fill="#ffffff" />
          <p>
            Kamu ragu atau ingin ngobrol dulu tentang kebutuhan bisnismu? Atau
            ingin memastikan layanan lainnya? Tidak perlu khawatir, kami
            bersedia membantumu.
          </p>
          <button>Konsultasikan Sekarang!</button>
        </div>
        <div className="footer-menu-link">
          <ul>
            <li>Menu</li>
            <li>Layanan</li>
            <li>Template</li>
            <li>About</li>
            <li>Harga</li>
          </ul>
          <ul>
            <li>Social</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Tiktok</li>
          </ul>
          <ul>
            <li>Support</li>
            <li>Help Center</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <div className="divider"></div>
        <div className="footer-right-field">
          <p>© 2023 Kreya. All right reserved</p>
          <div className="footer-right-field-sk">
            <p>Terms of Service</p>
            <p>Policy Service</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
