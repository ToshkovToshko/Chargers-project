import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Препраща към начална страница
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">EVChargers</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Начало</Link>
        <Link to="/catalog" className="nav-link">Каталог</Link>

        {user && user.role === 'provider' && (
         <Link to="/create-ad" className="nav-link">Качи обява</Link>
        )}

        {user ? (
          <>
            <span className="user-email">{user.email}</span>
            <button onClick={handleLogout} className="logout-btn">Изход</button>
          </>
        ) : (
          <>
            <Link to="/login" className="register-btn">Влез</Link>
            <Link to= "/Register" className="register-btn">Регистрация</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;





