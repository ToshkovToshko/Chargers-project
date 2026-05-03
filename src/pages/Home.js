import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="container">
            <div className="home-hero">
            
                <div className="slideshow">
                    <div className="slide slide-1"></div>
                    <div className="slide slide-2"></div>
                    <div className="slide slide-3"></div>
                </div>

                <div className="hero-content">
                    <h1>Добре дошли в EVChargers!</h1>
                    <p>
                        Здравейте приятели, ние сме най-голямата платформа за отдаване на зарядни 
                        станции под наем. Нашата мисия е да направим пътуването с електрически автомобили 
                        по-достъпно и удобно за всеки. Разгледайте нашите налични станции или се регистрирайте, 
                        за да споделите своята собствена станция.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/catalog" className="btn-primary">Към каталога</Link>

                        {! user && (
                            <>
                                <Link to="/register" className="btn-secondary">Влез в профила си</Link>
                                <Link to="/register" className="btn-secondary">Регистрация</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;