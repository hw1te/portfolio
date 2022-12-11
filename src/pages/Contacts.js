import React from 'react';
import Navbar from '../components/Navbar';
import "./Contacts.css"
import LinkedIn from "./images/linkedin.svg"
import GitHub from "./images/github.svg"
import Gmail from "./images/gmail.svg"
import WhatsApp from "./images/whatsapp.svg"

export default function Contacts() {

    return (
        <>
            <Navbar />
            <div className="container">
                {/* # Card 1 */}
                <div className="contacts-container">
                    <div className="contacts-title">
                        <img className="logo-image" alt="LinkedIn" src={LinkedIn} />
                        <h4>LinkedIn</h4>
                    </div>
                    <br />
                    <p>Esse aqui é um texto falando brevemente sobre algo relacionado a rede.</p>
                    <div className="link-container">
                        <i class="gg-attachment"></i>
                        <a className="contact-link" href="#">Ver perfil</a>
                    </div>
                </div>
                {/* # Card 2 */}
                <div className="contacts-container">
                    <div className="contacts-title">
                        <img className="logo-image" alt="GitHub" src={GitHub} />
                        <h4>GitHub</h4>
                    </div>
                    <br />
                    <p>Esse aqui é um texto falando brevemente sobre algo relacionado a rede.</p>
                    <div className="link-container">
                        <i class="gg-attachment"></i>
                        <a className="contact-link" href="#">Ver perfil</a>
                    </div>
                </div>
                {/* # Card 3 */}
                <div className="contacts-container">
                    <div className="contacts-title">
                        <img className="logo-image" alt="Gmail" src={Gmail} />
                        <h4>Email</h4>
                    </div>
                    <br />
                    <p>Esse aqui é um texto falando brevemente sobre algo relacionado a rede.</p>
                    <div className="link-container">
                        <i class="gg-attachment"></i>
                        <a className="contact-link" href="#">Enviar e-mail</a>
                    </div>
                </div>
                {/* # Card 4 */}
                <div className="contacts-container">
                    <div className="contacts-title">
                        <img className="logo-image" alt="WhatsApp" src={WhatsApp} />
                        <h4>WhatsApp</h4>
                    </div>
                    <br />
                    <p>Esse aqui é um texto falando brevemente sobre algo relacionado a rede.</p>
                    <div className="link-container">
                        <i class="gg-attachment"></i>
                        <a className="contact-link" href="#">Enviar mensagem</a>
                    </div>
                </div>
            </div>
        </>
    )
}