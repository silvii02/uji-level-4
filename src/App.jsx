import React from "react";
import { Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import Home1Page from "./pages/Home1Page";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import PembayaranPage from "./pages/PembayaranPage";
import DaftarPage from "./pages/DaftarPage";
import KodePage from "./pages/KodePage";
import Kode1Page from "./pages/Kode1Page";
import PaymentPage from "./pages/PaymentPage";


//header dan footer


function App(){
  return(
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/home" Component={Home1Page} />
        <Route path="/LoginPage" Component={LoginPage} />
        <Route path="/MenuPage" Component={MenuPage} />
        <Route path="/PaymentPage" Component={PaymentPage} />
        <Route path="/PembayaranPage" Component={PembayaranPage} />
        <Route path="/KodePage" Component={KodePage} />
        <Route path="/Kode1Page" Component={Kode1Page} />
        <Route path="/Daftar" Component={DaftarPage} />
      </Routes>
    </div>
  );
  
}

export default App;