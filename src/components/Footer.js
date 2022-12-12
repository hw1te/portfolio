import React from 'react';
import './Footer.css'

export default function Footer() {

    return (
        <div className="footer-container">
            <p className="copyright">Gustavo Pospi ©</p>
            <ul className="footer-list">
                <a className="footer-links" href="/"><li>Home</li></a>
                <a className="footer-links" href="/projects"><li>Projetos</li></a>
                <a className="footer-links" href="/contacts"><li>Contatos</li></a>
                <a className="footer-links" href="/about"><li>Sobre</li></a>
            </ul>
        </div>
    )

}