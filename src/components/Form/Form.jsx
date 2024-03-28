import React, { useState } from "react";
import "./form.css";

function Form() {
  const [formList, setFormList] = useState({
    name: "",
    email: "",
    telp: "",
    company: "",
    detail: "",
  });
  return (
    <div className="form">
      <div className="form-title">
        <h2>Beritahu kami tentang websitemu!</h2>
        <p>
          Silahkan masukkan data diri Anda di bawah ini untuk menggunakan jasa
          pembuatan website
        </p>
      </div>
      <div className="form-content">
        <form>
          <div className="form-content-field">
            <label>Nama Lengkap</label>
            <input name="name" placeholder="Nama Lengkap Kamu" />
          </div>
          <div className="form-content-field">
            <label>Alamat Email</label>
            <input
              name="email"
              type="email"
              placeholder="Example.email@gaul.com"
            />
          </div>
          <div className="form-content-field">
            <label>Nomor Telepon</label>
            <input name="telp" type="tel" placeholder="+62 811 222 333" />
          </div>
          <div className="form-content-field">
            <label>Nama Perusahaan</label>
            <input
              name="company"
              placeholder="Masukkan Nama Perusahaan/usaha"
            />
          </div>
          <div className="form-content-field">
            <label>Tambahkan detail yang ingin dibuat</label>
            <textarea name="company" rows={4} cols={40} />
          </div>
          <div className="form-content-btn">
            <button type="submit">Kirimkan</button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
