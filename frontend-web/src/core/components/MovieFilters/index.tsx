import React, { useEffect, useState } from 'react';
import './styles.scss';
import Select from 'react-select';
import { Genre } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import { toast } from 'react-toastify';

export type FilterForm = {
    genreId?: number;
}

type Props = {
    genre?: Genre;
    handleChangeGenre: (genre: Genre) => void;
    clearFilters: () => void;
}

const MovieFilters = ({ 
    genre, 
    handleChangeGenre,
    clearFilters
}: Props) => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoadingGenres, setIsLoadingGenres] = useState(false);

    useEffect(() => {
        setIsLoadingGenres(true);
        makePrivateRequest({
            url: '/genres'
        })
            .then(response => {
                setGenres(response.data); /* .content); */
            })
            .catch(() => {
                toast.error('Erro ao carregar gêneros!');
            })
            .finally(() => setIsLoadingGenres(false));
    }, []);

    return (
        <div className='card-base movie-filters-container'>
            <Select
                name='genres'
                value={genre}
                key={`select-${genre?.id}`}
                options={genres}
                getOptionLabel={(option: Genre) => option.name}
                getOptionValue={(option: Genre) => String(option.id)}
                className='filter-select-container'
                classNamePrefix='movie-genres-select'
                placeholder='Gêneros'
                isLoading={isLoadingGenres}
                onChange={value => handleChangeGenre(value as Genre)}
                isClearable
            />
            <button
                className='btn btn-outline-light btn-clear-filters'
                onClick={clearFilters}
            >
                LIMPAR FILTRO
            </button>
        </div>
    )
}

export default MovieFilters;