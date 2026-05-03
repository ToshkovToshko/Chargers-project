import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import './Catalog.css';

const Catalog = () => {
  const [ads, setAds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 9;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    const res = await axios.get('http://localhost:5000/ads');
    setAds(res.data);
  };

  const handleBooking = async (adId) => {
    if (!user) return alert("Моля, влезте в профила си!");
    // Обновяваме обявата в сървъра, като добавяме имейл на резервиралия
    await axios.patch(`http://localhost:5000/ads/${adId}`, { bookedBy: user.email });
    fetchAds();
  };

  const handleCancel = async (adId) => {
    // Премахваме резервацията (bookedBy става null)
    await axios.patch(`http://localhost:5000/ads/${adId}`, { bookedBy: null });
    fetchAds();
  };

  const indexOfLastAd = currentPage * adsPerPage;
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  const currentAds = ads.slice(indexOfFirstAd, indexOfLastAd);
  const totalPages = Math.ceil(ads.length / adsPerPage);

  return (
    <div className="catalog-container">
      <div className="ads-grid">
        {currentAds.map(ad => (
          <div key={ad.id} className="ad-card">
            <div className="image-wrapper">
              <img src={ad.imageUrl} alt={ad.name} />
              <div className="price-tag">{ad.price} €/ч</div>
            </div>
            
            <div className="ad-info">
              <span className="ad-type">{ad.type}</span>
              <h3>{ad.name}</h3>
              <p className="address">📍 {ad.address}</p>

              <div className="actions">
                {ad.bookedBy ? (
                  ad.bookedBy === user?.email ? (
                    <button className="cancel-btn" onClick={() => handleCancel(ad.id)}>Отмени</button>
                  ) : (
                    <button className="disabled-btn" disabled>Запазена</button>
                  )
                ) : (
                  <button 
                    className="save-btn" 
                    onClick={() => handleBooking(ad.id)}
                    disabled={user?.role === 'provider'}
                  >
                    Запази
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button 
            key={i + 1} 
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Catalog;