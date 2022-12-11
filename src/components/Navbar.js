import React from 'react';
import './Navbar.css'

export default function Navbar() {

    return (
        <div className="navbar-container">
            <ul className="navbar">
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projetos</a></li>
                <li><a href="/contacts">Contatos</a></li>
                <li><a href="/about">Sobre</a></li>
            </ul>
        </div>
    )

}