import React from 'react';
import ComingSoon from './coming soon.jpg'
import './Cards.css'

export default function Cards() {

    return (
        <>
            <div className="cards-container">
                {/* Card 1 */}
                <div className="card">
                    <div className="card-content">
                        <img alt="Project Display" src={ComingSoon} />
                        <h1>Trybewallet</h1>
                        <p>aaaaaaaa</p>
                        <div className="card-button-container">
                            <a href="#"><button className="card-button">Repositório</button></a>
                            <a href="#"><button className="card-button">Git Page</button></a>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="card">
                    <div className="card-content">
                        <img alt="Project Display" src={ComingSoon} />
                        <h1>Blogs API</h1>
                        <p>aaaaaaaa</p>
                        <div className="card-button-container">
                            <a href="#"><button className="card-button">Repositório</button></a>
                            <a href="#"><button className="card-button">Git Page</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-button-container">
                <button className="project-button">
                    <a href="/projects" class="button_top"> Ver mais </a>
                </button>
            </div>
        </>
    )

}