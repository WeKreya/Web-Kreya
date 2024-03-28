import React from "react";
import "./template.css";
import { template } from "../../listTemplate";

function Template() {
  return (
    <div className="template">
      <div className="template-title">
        <h2>Berbagai Template</h2>
        <p>
          Kami memberikan beberapa pilihan paket yang sesuai dengan apa ada
          butuhkan.
        </p>
      </div>
      <div className="template-list">
        {template.map((list, i)=>{
            return(
                <div className="template-item">
                    <div className="template-item-feed">
                        <img/>
                    </div>
                    <div className="template-item-caption">
                        <h4>{list.title}</h4>
                        <p>{list.desc}</p>
                        <button>Beli Sekarang</button>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
}

export default Template;
