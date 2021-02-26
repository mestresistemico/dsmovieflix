import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './styles.scss'
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { makePrivateRequest } from 'core/utils/request';
import { Movie } from 'core/types/Movie';
import MovieInfoLoader from '../Loaders/MovieInfoLoader';
import MovieDescriptionLoader from '../Loaders/MovieDescriptionLoader';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
    const { movieId } = useParams<ParamsType>();

    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [movieId]);

    return (
        <div className="movie-details-container">
            <div className="card-base border-radius-20 movie-details">
                <Link to="/movies" className="movie-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
                <div className="movie-details-info">
                    <div className="movie-details-img-name-price">
                        {isLoading ? <MovieInfoLoader /> : (
                            <>
                                <div className="movie-details-card text-center">
                                    <img src={movie?.imgUrl} alt={movie?.title} className="movie-details-image" />
                                </div>
                                <div className='movie-info-fields'>
                                    <h1 className="movie-details-name">
                                        {movie?.title}
                                    </h1>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="movie-details-card">
                        {isLoading ? <MovieDescriptionLoader /> : (
                            <>
                                <h1 className="movie-description-title">
                                    Descrição do produto
                                </h1>
                                <p className="movie-description-text">
                                    {movie?.subTitle}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;