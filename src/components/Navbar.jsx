import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Logo from "../assets/icon/logoKreyaFull.svg?react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Logo width="130px" fill="#FFFFFF" />
      </div>
      <div className="navbar-link">
        <ul>
          <li>
            <a>Layanan</a>
          </li>
          <li>
            <a>Portofolio</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-contact">
        <button>
          Hubungi Kami <MdOutlineArrowOutward />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
