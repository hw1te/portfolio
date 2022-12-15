import React from 'react';
import LinkedIn from "../images/linkedin.svg"
import GitHub from "../images/github.svg"
import Gmail from "../images/gmail.svg"
import WhatsApp from "../images/whatsapp.svg"
import Curriculo from "../files/Gustavo Pospi - Currículo.pdf"
import Resume from "../files/Gustavo Pospi - Resume.pdf"
import "./Contacts.css"

export default function Contacts() {

    return (
        <>
            <div className="contacts-page-container">
                {/* # Card 1 */}
                <div className="contact-column">
                    <div className="contacts-container">
                        <div className="contacts-title">
                            <img className="logo-image" alt="LinkedIn" src={LinkedIn} />
                            <h4>LinkedIn</h4>
                        </div>
                        <p>Por onde eu posto os meus avanços profissionais e técnicos, demonstro projetos e envio certificados que adquiri. Venha me Acompanhar.</p>
                        <div className="link-container">
                            <i class="gg-attachment"></i>
                            <a className="contact-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gustavopospi/">Ver perfil</a>
                        </div>
                    </div>
                    {/* # Card 2 */}
                    <div className="contacts-container">
                        <div className="contacts-title">
                            <img className="logo-image" alt="GitHub" src={GitHub} />
                            <h4>GitHub</h4>
                        </div>
                        <p>No meu perfil você vai poder me conhecer melhor e ver todos os projetos que já publiquei, estou desenvolvedo e projetos que pretendo dar continuação.</p>
                        <div className="link-container">
                            <i class="gg-attachment"></i>
                            <a className="contact-link" target="_blank" rel="noopener noreferrer" href="https://github.com/hw1te">Ver perfil</a>
                        </div>
                    </div>
                </div>

                <div className="contact-column">
                    {/* # Card 3 */}
                    <div className="contacts-container">
                        <div className="contacts-title">
                            <img className="logo-image" alt="Gmail" src={Gmail} />
                            <h4>Email</h4>
                        </div>
                        <p>Me mande um e-mail sobre ideias, feedbacks ou até mesmo propostas, sempre estou aberto a conversar.</p>
                        <div className="link-container">
                            <i class="gg-attachment"></i>
                            <a className="contact-link" target="_blank" rel="noopener noreferrer" href="mailto:gutxander@gmail.com">Enviar e-mail</a>
                        </div>
                    </div>
                    {/* # Card 4 */}
                    <div className="contacts-container">
                        <div className="contacts-title">
                            <img className="logo-image" alt="WhatsApp" src={WhatsApp} />
                            <h4>WhatsApp</h4>
                        </div>
                        <p>Clique para enviar uma mensagem, ou fazer uma chamada de voz por WhatsApp.</p>
                        <div className="link-container">
                            <i class="gg-attachment"></i>
                            <a className="contact-link" target="_blank" rel="noopener noreferrer" href="https://wa.me/5512996276929">Enviar mensagem</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="download-container">
                <div className="resume-attachment">
                    <div className="download-title">
                        <i class="gg-software-download"></i>
                        <h4>Download</h4>
                    </div>
                    <p className="download-paragraph">Baixe meu currículo atualizado em ambas linguas, fique a vontade para entrar em contato.</p>
                    <div>
                        <div>
                            <p className="resume-paragraph">Currículo em Português</p>
                            <div className="download-link-container">
                                <i class="gg-attachment"></i>
                                <a className="download-link" href={Curriculo} target="_blank" rel="noopener noreferrer">Baixar</a>
                            </div>
                        </div>
                        <div>
                            <p className="resume-paragraph">English Resume</p>
                            <div className="download-link-container">
                                <i class="gg-attachment"></i>
                                <a className="download-link" href={Resume} target="_blank" rel="noopener noreferrer">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}