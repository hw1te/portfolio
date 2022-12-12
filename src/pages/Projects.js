import React, { useState } from 'react';
import styled from 'styled-components';
import './Projects.css'

const Button = styled.button`
  background-color: rgb(6, 130, 255);
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 6px;
  margin: 10px 0px;
  cursor: pointer;
`;

const ButtonToggle = styled(Button)`
background-color: rgb(6, 130, 255);
  ${({ active }) =>
        active &&
        `
    background-color: rgb(6, 113, 220);
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%
`;


const types = ['Front-End', 'Back-End'];
export default function Navbar() {
    let projectContent = '';
    const [active, setActive] = useState(types);
    if (active === 'Back-End') {
        projectContent =
            <div className="project-list-container">
                <h2 className="subject-title">Projetos de Back-End</h2>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>Trybewallet</h3>
                        <p>Essa aqui é a descrição de um projeto falando um pouco sobre ele e o funcionamento</p>
                    </div>
                    <div className="list-body-buttons">
                        <button><a href="https://github.com/hw1te/project-trybewallet" target="_blank" rel="noreferrer noopener">Ver repositório</a></button>
                    </div>
                </div>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>TrybeTunes</h3>
                        <p>Essa aqui é a descrição de um projeto falando um pouco sobre ele e o funcionamento</p>
                    </div>
                    <div className="list-body-buttons">
                        <button><a href="https://github.com/hw1te/project-trybetunes" target="_blank" rel="noreferrer noopener">Ver repositório</a></button>
                    </div>
                </div>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>StarWars Planets Search</h3>
                        <p>Essa aqui é a descrição de um projeto falando um pouco sobre ele e o funcionamento</p>
                    </div>
                    <div className="list-body-buttons">
                        <button><a href="https://github.com/hw1te/project-starwars-planets-search" target="_blank" rel="noreferrer noopener">Ver repositório</a></button>
                    </div>
                </div>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>Solar System</h3>
                        <p>Essa aqui é a descrição de um projeto falando um pouco sobre ele e o funcionamento</p>
                    </div>
                    <div className="list-body-buttons">
                        <button><a href="https://github.com/hw1te/project-solar-system" target="_blank" rel="noreferrer noopener">Ver repositório</a></button>
                    </div>
                </div>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>Shopping Cart</h3>
                        <p>Essa aqui é a descrição de um projeto falando um pouco sobre ele e o funcionamento</p>
                    </div>
                    <div className="list-body-buttons">
                        <button><a href="https://github.com/hw1te/project-shopping-cart" target="_blank" rel="noreferrer noopener">Ver repositório</a></button>
                    </div>
                </div>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>Tryunfo</h3>
                        <p>Essa aqui é a descrição de um projeto falando um pouco sobre ele e o funcionamento</p>
                    </div>
                    <div className="list-body-buttons">
                        <button><a href="https://github.com/hw1te/project-tryunfo" target="_blank" rel="noreferrer noopener">Ver repositório</a></button>
                    </div>
                </div>
            </div>
    }

    else {
        projectContent =
            <div className="project-list-container">
                <h2 className="subject-title">Projetos de Front-End</h2>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>Trybewallet</h3>
                        <p>Essa aqui é a descrição de um projeto falando um pouco sobre ele e o funcionamento</p>
                    </div>
                    <div className="list-body-buttons">
                        <button><a href="https://github.com/hw1te/project-trybewallet" target="_blank" rel="noreferrer noopener">Repositório</a></button>
                        <button><a href="#" target="_blank" rel="noreferrer noopener">App</a></button>
                    </div>
                </div>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>TrybeTunes</h3>
                        <p>Essa aqui é a descrição de um projeto falando um pouco sobre ele e o funcionamento</p>
                    </div>
                    <div className="list-body-buttons">
                        <button><a href="https://github.com/hw1te/project-trybetunes" target="_blank" rel="noreferrer noopener">Repositório</a></button>
                        <button><a href="https://project-trybetunes-zeta.vercel.app/" target="_blank" rel="noreferrer noopener">App</a></button>
                    </div>
                </div>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>StarWars Planets Search</h3>
                        <p>Essa aqui é a descrição de um projeto falando um pouco sobre ele e o funcionamento</p>
                    </div>
                    <div className="list-body-buttons">
                        <button><a href="https://github.com/hw1te/project-starwars-planets-search" target="_blank" rel="noreferrer noopener">Repositório</a></button>
                        <button><a href="#" target="_blank" rel="noreferrer noopener">App</a></button>
                    </div>
                </div>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>Solar System</h3>
                        <p>Essa aqui é a descrição de um projeto falando um pouco sobre ele e o funcionamento</p>
                    </div>
                    <div className="list-body-buttons">
                        <button><a href="https://github.com/hw1te/project-solar-system" target="_blank" rel="noreferrer noopener">Repositório</a></button>
                        <button><a href="https://project-solar-system-murex.vercel.app/" target="_blank" rel="noreferrer noopener">App</a></button>
                    </div>
                </div>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>Shopping Cart</h3>
                        <p>Essa aqui é a descrição de um projeto falando um pouco sobre ele e o funcionamento</p>
                    </div>
                    <div className="list-body-buttons">
                        <button><a href="https://github.com/hw1te/project-shopping-cart" target="_blank" rel="noreferrer noopener">Repositório</a></button>
                        <button><a href="https://project-shopping-cart-three.vercel.app/" target="_blank" rel="noreferrer noopener">App</a></button>
                    </div>
                </div>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>Tryunfo</h3>
                        <p>Essa aqui é a descrição de um projeto falando um pouco sobre ele e o funcionamento</p>
                    </div>
                    <div className="list-body-buttons">
                        <button><a href="https://github.com/hw1te/project-tryunfo" target="_blank" rel="noreferrer noopener">Repositório</a></button>
                        <button><a href="https://project-tryunfo-blond.vercel.app/" target="_blank" rel="noreferrer noopener">App</a></button>
                    </div>
                </div>
            </div>
    }
    return (
        <div>
            <div className="project-buttons-container">
                <ButtonGroup>
                    {types.map(type => (
                        <ButtonToggle
                            className="project-button"
                            key={type}
                            value={type}
                            active={active === type}
                            onClick={() => setActive(type)}
                        >
                            {type}
                        </ButtonToggle>
                    ))
                    }
                </ButtonGroup >
            </div>
            {projectContent}
            {/* {
                active === 'Front-End' ? (
                    <p>aa</p>
                ) : (
                    <p>bb</p>
                )} */}
        </div>
    )
}