import React from 'react';
import { Movie } from 'core/types/Movie';
import './styles.scss';

type Props = {
    movie: Movie
}

const MovieCard = ({ movie }: Props) => (
    <div className="card-base border-radius-10 movie-card">
        <img src={movie.imgUrl} alt={movie.title} className="movie-card-image"/>
        <div className="movie-info">
            <h4 className="movie-title">
                {movie.title}
            </h4>
            <h5 className='movie-year'>
                {movie.year}
            </h5>
            <h6 className='movie-subtitle'>
                {movie.subTitle}
            </h6>
        </div>
    </div>

)

export default MovieCard;