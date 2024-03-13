import React from "react";
import { listPackage } from "../listPackage";
import { FaCheck } from "react-icons/fa6";

function Package() {
  function rupiah(amount) {
    amount = String(amount).replace(/\D/g, "");

    var parts = [];
    while (amount.length > 3) {
      parts.unshift(amount.slice(-3));
      amount = amount.slice(0, -3);
    }
    parts.unshift(amount);

    return parts.join(".");
  }
  return (
    <div className="package">
      <h4>Harga Paket Jasa Pembuatan Website</h4>
      <div className="package-list">
        {listPackage.map((list, i) => {
          return (
            <div className="package-list-contain" key={list.id}>
              <h5>{list.name}</h5>
              <div className="package-list-contain-price">
                <p>Rp</p>
                <h2>{rupiah(list.harga)}</h2>
                <p>/Tahun</p>
              </div>
              {list.key ? (
                <div className="package-list-contain-key">{list.key}</div>
              ) : null}
              <div className="package-divider"></div>
              <div className="package-list-contain-fitur">
                <ul>
                  {list.fitur.map((fitur, i) => {
                    return (
                      <div className="package-list-contain-fitur-item">
                        <FaCheck className="icon-check" />
                        <li>{fitur}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="package-divider"></div>
              <div className="package-list-contain-button">
                <button>Pilih Template</button>
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default Package;
