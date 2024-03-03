import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function PembayaranPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="pembayaran-container">
      <form className="pembayaran-form1">
        <h2>BUKTI PEMBAYARAN</h2>
        <input type="file" onChange={handleFileChange} />
        <NavLink to="/KodePage">
          <button className="pembayaran-button1 cancel-button1">Cash</button>
        </NavLink>  
        <NavLink to="/Kode1Page">
          <button className="pembayaran-button2" >Kirim</button>
        </NavLink>
      </form>
    </div>
  );
}

export default PembayaranPage;
