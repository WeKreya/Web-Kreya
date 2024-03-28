import React from "react";
import { listPackage } from "../../listPackage";
import { FaCheckCircle } from "react-icons/fa";
import "./package.css";

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
      <div className="package-title">
        <h4>Harga Paket Jasa Pembuatan Website</h4>
        <p>
          Kami memberikan beberapa pilihan paket yang sesuai dengan apa ada
          butuhkan.
        </p>
      </div>
      <div className="package-list">
        {listPackage.map((list, i) => {
          return (
            <div className="package-list-contain" key={list.id}>
              {list.key ? (
                <div className="package-list-contain-key">
                  <p>{list.key}</p>
                </div>
              ) : null}
              <div className="package-list-contain-title">
                <h5>{list.name}</h5>
                <p>{list.description}</p>
              </div>
              {typeof list.harga === "number" ? (
                <div className="package-list-contain-price">
                  <p>Rp</p>
                  <h2>{rupiah(list.harga)}</h2>
                  <p>/Tahun</p>
                </div>
              ) : (
                <div className="package-list-contain-price">
                  <h2>{list.harga}</h2>
                </div>
              )}
              <div className="package-list-contain-fitur">
                <ul>
                  {list.fitur.map((fitur, i) => {
                    return (
                      <div className="package-list-contain-fitur-item">
                        <FaCheckCircle className="icon-check" />
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
