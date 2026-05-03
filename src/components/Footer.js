import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
            <h4>Контакти</h4>
            <p>📧 Имейл: info@evchargers.bg</p>
            <p>📞 Телефон: +359 888 123 456</p>
            <p>📍 Адрес: гр. София, бул. "Електричество" 100</p>
            </div>

            <div className="footer-section">
            <h4>Последвайте ни</h4>
            <div className="social-icons">
                <span className="social-icon">Facebook</span>
                <span className="social-icon">Instagram</span>
            </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2026 EVChargers. Всички права запазени.</p>
        </div>
        </footer>
    );
};

export default Footer;