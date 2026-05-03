// "Куката" useState - използвам я за управлението на локални данни
import React, {useState, useContext} from "react";
import axios from "axios";
// "Куката" useNavigate - използвам я за навигация
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import './Register.css'

const Register = () => {

    // Пример за куката useState
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('renter');

    // Пример за куката useNavigate
    const navigate = useNavigate();

    // взимам логин от контекст
    const { login } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = {email, password, role};

        try{
            // Използвам Рест Апи (приложението комуникира със сървъра) - Изпращам данните за новия потребител към сървъра
            // Пост заявка
            await axios.post('http://localhost:5000/users', newUser);
            
            login(newUser);

            if (role === 'provider'){
                navigate('/create-ad');
            } else {
                navigate('/catalog');
            }
        } catch (error) {
            alert("Грешка при регистрация!");
        }
    };

    return (
        <div className="register-box">
            <h2>Създай профил</h2>
            <form onSubmit={handleRegister}>
                <input 
                    type="email" placeholder="Имейл"
                    onChange={(e) => setEmail(e.target.value)} required/>
                <input
                    type="password" placeholder="Парола"
                    onChange={(e) => setPassword(e.target.value)} required/>
                <select onChange={(e) => setRole(e.target.value)}>
                    <option value="renter">Искам да наемам</option>
                    <option value="provider">Искам да отдавам под наем</option>
                </select>
                <button type="submit">Регистрирай се</button>
            </form>
        </div>
    );
};

export default Register;