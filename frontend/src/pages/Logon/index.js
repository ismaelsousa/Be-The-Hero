import React, { useState } from 'react';
import App from '../../App';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import api from '../../services/api';


export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();
        try {
            const res = await api.post("session", { id });

            localStorage.setItem("ongId", id);
            localStorage.setItem("onName", res.data.name);

            history.push('profile');

        } catch{
            alert("Falha no login, tente novamente. ");
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input
                        type="text"
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>

                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />

        </div>


    )
}