import React from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import './Home.css'

export default function Home() {

    return (
        <>
            <div className="home-page-container">
                <div className="text-container">
                    <h1>Gustavo Pospi</h1>
                    <br />
                    <h3>Desenvolvedor Full-Stack</h3>
                    <br />
                    <p className="home-paragraph">
                        Oi, sou um <span>Desenvolvedor de Software</span>,
                        <br />
                        seja bem-vindo ao meu portfólio, aqui você vai encontrar <span>todos</span> os <span>meus trabalhos</span>.
                        <br />
                        <br />
                        Tenho como objetivo me aprofundar cada vez mais na área, e através dos meus projetos
                        <br />
                        publicados você vai poder <span>acompanhar minha trajetória</span>.
                    </p>
                </div>
                <div className="columns-container">
                    <div className="column-1">
                        <span className="stack-title">Front-End</span>
                        <ul className="stack-ul">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>React Hooks</li>
                            <li>Context API</li>
                            <li>Testes com RTL</li>
                            <li>Estado e Eventos </li>
                        </ul>
                    </div>
                    <div className="column-2">
                        <span className="stack-title">Back-End</span>
                        <ul className="stack-ul">
                            <li>Docker</li>
                            <li>SQL</li>
                            <li>NoSQL</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Mocha Chai Sinon</li>
                            <li>API's em Camada</li>
                            <li>REST</li>
                            <li>JWT</li>
                            <li>ORM</li>
                            <li>TypeScript</li>
                            <li>POO</li>
                            <li>SOLID</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Cards />
        </>
    )

} 