import React, {useState, useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('renter');
    const navigate = useNavigate();

    // взимам логин от контекст
    const { login } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = {email, password, role};

        try{
            await axios.post('http://localhost:5000/users', newUser);
            
            login(newUser);

            alert("Регистрацията е успешна!");

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