import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Kode1Page() {

  return (
    <div className="kode1-container">
      <form className="kode1-form1">
        <h1>KODE PESANAN</h1>
        <p className='kodee11'>Terimakasih sudah jajan
     di Kedai Katresna ❤️‍</p>
        <NavLink to="/home">
          <button className="kode-button21" >Done</button>
        </NavLink>
      </form>
    </div>
  );
}

export default Kode1Page;
