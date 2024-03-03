import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function PaymentPage() {
  const [method, setMethod] = useState('Qris'); // State untuk metode pembayaran Qris
  const [password8, setPassword] = useState('');

  return (
    <div className="payment-container">
      <form className="payment-form1">
        <h2>Metode Pembayaran</h2>
        <label className='label-input'>
          <select
            className="payment-input1"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="Qris">Qris</option>
            {/* Tambahkan opsi pembayaran lainnya di sini */}
          </select>
        </label>
        <label>
          <input
            className="payment-input11"
            type="password" placeholder="Cash"
            value={password8}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="payment-buttons">
        <NavLink to="/MenuPage">
          <button className="payment-button1 cancel-button">Batal</button>
        </NavLink>  
        <NavLink to="/PembayaranPage">
          <button className="payment-button2" >Bayar</button>
        </NavLink>
        </div>
      </form>
    </div>
  );
}

export default PaymentPage;
