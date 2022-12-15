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
                        <h3>Docker Todo-List</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-docker-todo-list" target="_blank" rel="noreferrer noopener"><button>Ver repositório</button></a>
                    </div>
                </div>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>Store Manager</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-store-manager" target="_blank" rel="noreferrer noopener"><button>Ver repositório</button></a>
                    </div>
                </div >

                {/* ###################################### */}

                < div className="list-body-container" >
                    <div className="list-body-paragraph">
                        <h3>API de Blogs</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-blogs-api" target="_blank" rel="noreferrer noopener"><button>Ver repositório</button></a>
                    </div >
                </div >

                {/* ###################################### */}

                < div className="list-body-container" >
                    <div className="list-body-paragraph">
                        <h3>Trybesmith</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-trybesmith" target="_blank" rel="noreferrer noopener"><button>Ver repositório</button></a>
                    </div >
                </div >

                {/* ###################################### */}

                < div className="list-body-container" >
                    <div className="list-body-paragraph">
                        <h3>Trybers and Dragons</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-trybers-and-dragons" target="_blank" rel="noreferrer noopener"><button>Ver repositório</button></a>
                    </div >
                </div >

                {/* ###################################### */}

                < div className="list-body-container" >
                    <div className="list-body-paragraph">
                        <h3>TFC</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-trybe-futebol-clube" target="_blank" rel="noreferrer noopener"><button>Ver repositório</button></a>
                    </div >
                </div >

                {/* ###################################### */}

                < div className="list-body-container" >
                    <div className="list-body-paragraph">
                        <h3>Commerce</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-mongodb-commerce" target="_blank" rel="noreferrer noopener"><button>Ver repositório</button></a>
                    </div >
                </div >

                {/* ###################################### */}

                < div className="list-body-container" >
                    <div className="list-body-paragraph">
                        <h3>Car Shop</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-car-shop" target="_blank" rel="noreferrer noopener"><button>Ver repositório</button></a>
                    </div >
                </div >
            </div >
    }

    else {
        projectContent =
            <div className="project-list-container">
                <h2 className="subject-title">Projetos de Front-End</h2>

                {/* ###################################### */}

                <div className="list-body-container">
                    <div className="list-body-paragraph">
                        <h3>Trybewallet</h3>
                    </div>
                    <div>
                        <div className="warning-container">
                            <p className="error-warning">Site indisponível !</p>
                            <p className="error-warning">Para testar baixe o repositório</p></div>
                        <div className="list-body-buttons">
                            <a href="https://github.com/hw1te/project-trybewallet" target="_blank" rel="noreferrer noopener"><button>Repositório</button></a>
                            <button>App</button>
                        </div>
                    </div>
                </div >

                {/* ###################################### */}

                < div className="list-body-container" >
                    <div className="list-body-paragraph">
                        <h3>TrybeTunes</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-trybetunes" target="_blank" rel="noreferrer noopener"><button>Repositório</button></a>
                        <a href="https://project-trybetunes-zeta.vercel.app/" target="_blank" rel="noreferrer noopener"><button>App</button></a>
                    </div >
                </div >

                {/* ###################################### */}

                < div className="list-body-container" >
                    <div className="list-body-paragraph">
                        <h3>StarWars Planets Search</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-starwars-planets-search" target="_blank" rel="noreferrer noopener"><button>Repositório</button></a>
                        <a href="https://project-starwars-planets-search-orcin.vercel.app/" target="_blank" rel="noreferrer noopener"><button>App</button></a>
                    </div >
                </div >

                {/* ###################################### */}

                < div className="list-body-container" >
                    <div className="list-body-paragraph">
                        <h3>Solar System</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-solar-system" target="_blank" rel="noreferrer noopener"><button>Repositório</button></a>
                        <a href="https://project-solar-system-murex.vercel.app/" target="_blank" rel="noreferrer noopener"><button>App</button></a>
                    </div >
                </div >

                {/* ###################################### */}

                < div className="list-body-container" >
                    <div className="list-body-paragraph">
                        <h3>Shopping Cart</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-shopping-cart" target="_blank" rel="noreferrer noopener"><button>Repositório</button></a>
                        <a href="https://project-shopping-cart-three.vercel.app/" target="_blank" rel="noreferrer noopener"><button>App</button></a>
                    </div >
                </div >

                {/* ###################################### */}

                < div className="list-body-container" >
                    <div className="list-body-paragraph">
                        <h3>Tryunfo</h3>
                    </div>
                    <div className="list-body-buttons">
                        <a href="https://github.com/hw1te/project-tryunfo" target="_blank" rel="noreferrer noopener"><button>Repositório</button></a>
                        <a href="https://project-tryunfo-blond.vercel.app/" target="_blank" rel="noreferrer noopener"><button>App</button></a>
                    </div >
                </div >
            </div >
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