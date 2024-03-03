import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function KodePage() {

  return (
    <div className="kode-container">
      <form className="kode-form1">
        <h1>KODE PESANAN</h1>
        <p className='kodee1'>Silahkan pergi ke kantin untuk menyelesaikan transaksi️‍</p>
        <p className='kodee2'>Jika dalam waktu 10 menit tidak datang, maka pesanan anda akan dibatalkan</p>
        <NavLink to="/home">
          <button className="kode-button2" >Done</button>
        </NavLink>
      </form>
    </div>
  );
}

export default KodePage;
