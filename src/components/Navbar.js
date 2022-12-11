import React from 'react';
import './Navbar.css'

export default function Navbar() {

    return (
        <div className="navbar-container">
            <ul className="navbar">
                <li><a href="/portfolio/">Home</a></li>
                <li><a href="/portfolio/projects">Projetos</a></li>
                <li><a href="/portfolio/contacts">Contatos</a></li>
                <li><a href="/portfolio/about">Sobre</a></li>
            </ul>
        </div>
    )

}