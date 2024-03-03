import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MenuPage = () => {
  // Data menu makanan (contoh)
  const menuItems = [
    { id: 1, nama: 'Nasi Goreng', harga: 5000, gambar: '/src/assets/img/nasgor.png' },
    { id: 2, nama: 'Lumpia Basah', harga: 3000, gambar: '/src/assets/img/lumbas.png' },
    { id: 3, nama: 'Dimsum', harga: 1000, gambar: '/src/assets/img/dimsum.png' },
    { id: 4, nama: 'Sosis Pedas', harga: 2000, gambar: '/src/assets/img/sosis.png' },
    { id: 5, nama: 'Martabak Mie', harga: 1000, gambar: '/src/assets/img/lumpia.png' },
    { id: 6, nama: 'Kebab', harga: 5000, gambar: '/src/assets/img/kebab.png' },
    { id: 7, nama: 'Burger', harga: 4000, gambar: '/src/assets/img/burger.png' },
    { id: 8, nama: 'Pisang Coklat', harga: 2000, gambar: '/src/assets/img/piscok.png' },
    // Tambahkan item menu lainnya
  ];

  return (
    <header style={{ background: 'transparent' }}>
      <div className="menu-container">
      <NavLink to="/">
        <FontAwesomeIcon className='icon22' icon={faArrowLeft} />
        <span22>Kembali</span22>
      </NavLink>
        <h1>
          <div className="mb-4">
            <span className="color10">Menu</span>
            <span className="split-text5"> bestseller</span>
          </div>
        </h1>
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.gambar} alt={item.nama} />
            <div className="menu-details">
              <h3 className="menu-item-name">{item.nama}</h3>
              <p>Rp {item.harga}</p>
              <NavLink to="/PaymentPage">
                <button className="add-to-cart-button">Beli</button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default MenuPage;
