import React from 'react';
import './styles.scss';
import { ReactComponent as MainImage } from 'core/assets/images/main-image.svg';

const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1 className="text-title">
                Avalie filmes
                </h1>
            <p className="text-subtitle">
                Diga o que você achou do seu filme favorito.
                </p>
            <MainImage className="main-image" />
        </div>
    </div >
)

export default Home;