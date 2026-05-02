import React from 'react';
//Инстр. за навигация
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';

// Временни страници (placeholder), докато създадем истинските файлове
const Home = () => <h1>Добре дошли в EV Rent! 🚗⚡</h1>;
const Catalog = () => <h1>Каталог със зарядни станции</h1>;
//const Register = () => <h1>Форма за регистрация</h1>;

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;