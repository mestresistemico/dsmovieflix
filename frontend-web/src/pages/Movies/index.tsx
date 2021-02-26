import React, { useCallback, useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import { Link } from 'react-router-dom';
import './styles.scss';
import { makePrivateRequest } from 'core/utils/request';
import { Genre, MoviesResponse } from 'core/types/Movie';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import Pagination from 'core/components/Pagination';
import MovieFilters from 'core/components/MovieFilters';

const Catalog = () => {

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const [genre, setGenre] = useState<Genre>();


    const getMovies = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage: 12,
            genreId: genre?.id
        }
        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(response => {
                console.log('response.data');
                console.log(response.data);
                setMoviesResponse(response.data)
            }
            )
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage, genre])

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    const handleChangeGenre = (genre: Genre) => {
        setActivePage(0);
        setGenre(genre);
    }

    const clearFilters = () => {
        setActivePage(0);
        setGenre(undefined);
    }

    return (
        <div className="catalog-container">
            <div className="filters-container">
                <MovieFilters
                    genre={genre}
                    handleChangeGenre={handleChangeGenre}
                    clearFilters={clearFilters}
                />
            </div>
            <div className="catalog-movies">
                {isLoading ? <MovieCardLoader /> : (
                    moviesResponse?.content.map(movie => (
                        <Link to={`movies/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))
                )}
            </div>
            {moviesResponse && (
                <Pagination totalPages={moviesResponse.totalPages}
                    activePage={activePage}
                    onChange={(page: React.SetStateAction<number>) => setActivePage(page)}
                />)}
        </div>
    );
}

export default Catalog;