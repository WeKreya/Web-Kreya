import React, { useEffect, useState } from "react";
import Whatsapp from "../assets/icon/whatsapp.svg?react";
import Gmail from "../assets/icon/gmail.svg?react";

function News() {
  const [pop, setPop] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPop(!pop);
    }, 20000);
  }, []);

  return (
    <div className={`new ${pop? 'active': ''}`}>
      <p>{`Senin - Minggu [ 08.00 - 20.00 ]`}</p>
      <div className="new-contact">
        <div className="new-contact-wa">
          <Whatsapp />
          <p>+62 000-000-000</p>
        </div>
        <div className="new-contact-email">
          <Gmail />
          <p>Marketing@Kreya.com</p>
        </div>
      </div>
    </div>
  );
}

export default News;
