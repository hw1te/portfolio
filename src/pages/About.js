import React from 'react';
import "./About.css"

export default function About() {

    return (
        <div className="about-container">
            <img className="typing-cat-gif" alt="fidget spinner" src="https://media.giphy.com/media/K3fXQ1YWZFUFBIF4mM/giphy.gif" />
            <div className="about-paragraph-title">
                <h2>Gustavo Pospi,  21 anos.</h2>
                <h3>Moro no estado de <span>São Paulo - Brasil</span></h3>
            </div>
            <div className="about-paragraph-container">
                <p> Quando não estou trabalhando gosto de <span>assistir algo, jogar</span> ou <span>ler</span>. Todo dia vou na academia, de preferência de manhã, quando a temperatura está mais agradevel.</p>
                <br />
                <p><span>Tenho uma gata preta</span> que adotei quando ela era filhote, toda vez que estou no computador ela vem no meu quarto dormir perto de mim ou em cima da CPU.</p>
            </div>
        </div>
    )
}