import React from "react";
// сменяме станциите
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EVChargers</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Начало</Link>
        <Link to="/catalog" className="nav-link">Каталог</Link>
        <Link to="/register" className="register-btn">Регистрация</Link>
      </div>
    </nav>
  );
};

export default Navbar;
