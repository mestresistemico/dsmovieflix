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
                <Link to="/movies" className="movie-details-goback">
                    <ArrowIcon className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
            <div className="card-base border-radius-10 movie-details">
                <div className="movie-details-info">
                    <div className="movie-details-img">
                        {isLoading ? <MovieInfoLoader /> : (
                            <>
                                <div className="movie-details-card text-center">
                                    <img src={movie?.imgUrl} alt={movie?.title} className="movie-details-image" />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="movie-details-card">
                        {isLoading ? <MovieDescriptionLoader /> : (
                            <>
                                <div className='movie-info-fields'>
                                    <h1 className="movie-details-title">
                                        {movie?.title}
                                    </h1>
                                    <h2 className="movie-details-year">
                                        {movie?.year}
                                    </h2>
                                    <h3 className="movie-details-subtitle">
                                        {movie?.subTitle}
                                    </h3>
                                </div>
                                <p className="movie-synopsis-text">
                                    {movie?.synopsis}
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