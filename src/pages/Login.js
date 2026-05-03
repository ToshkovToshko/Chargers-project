import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        
      // Използвам Рест Апи (приложението комуникира със сървъра) - Вземаме всички потребители и проверяваме дали въведения имейл и парола съвпадат с някой от записите
      // Гет заявка
      const res = await axios.get('http://localhost:5000/users');
      const user = res.data.find(u => u.email === email && u.password === password);

      if (user) {
        login(user);
        navigate('/catalog');
      } else {
        alert("Грешен имейл или парола!");
      }
    } catch (error) {
      alert("Грешка при свързване със сървъра!");
    }
  };

  return (
    <div className="login-box">
      <h2>Влез в профила си</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" placeholder="Имейл" 
          onChange={(e) => setEmail(e.target.value)} required 
        />
        <input 
          type="password" placeholder="Парола" 
          onChange={(e) => setPassword(e.target.value)} required 
        />
        <button type="submit">Влез</button>
      </form>
    </div>
  );
};

export default Login;