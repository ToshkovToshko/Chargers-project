import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateAd.css';

const CreateAd = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('Монофазна');
  const [address, setAddress] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAd = { name, type, address, imageUrl, price: Number(price) };

    try {
      await axios.post('http://localhost:5000/ads', newAd);
      alert("Обявата е качена успешно!");
      navigate('/catalog');
    } catch (error) {
      alert("Грешка при качване на обявата.");
    }
  };

  return (
    <div className="form-container">
      <h2>Качване на нова обява</h2>
      <form onSubmit={handleSubmit} className="ad-form">
        <label>Име на станцията:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Тип:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Монофазна">Монофазна</option>
          <option value="Трифазна">Трифазна</option>
        </select>

        <label>Местоположение (адрес):</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

        <label>Линк към снимка (URL):</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />

        <label>Цена (€ на час):</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

        <button type="submit" className="save-btn">Запази обявата</button>
      </form>
    </div>
  );
};

export default CreateAd;