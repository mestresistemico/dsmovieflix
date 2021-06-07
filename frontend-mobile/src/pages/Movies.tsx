import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { MovieCard, SearchInput } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../styles';
import { getMovies } from '../services';
import Toast from 'react-native-tiny-toast';

type Genre = {
    id: number;
    name: string;
    label: string;
    value: number;
}

const Movies: React.FC = () => {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState<Genre>();
    const [loading, setLoading] = useState(false);

    async function fillProducts() {
        const toast = Toast.showLoading("Carregando...");
        setLoading(true);
        const res = await getMovies();
        setMovies(res.data.content);
        setLoading(false);
        Toast.hide(toast);
    };

    useEffect(() => {
        fillProducts();
    }, []);

    const handleChangeGenre = (genreRes: Genre) => {
        setGenre(genreRes);
    }

    const data = genre ?
        movies.filter(movie => movie.genreId === genre) :
        movies;
    return (
        <View style={theme.container}>
            <ScrollView contentContainerStyle={theme.scrollContainer}>
                {!loading &&
                <SearchInput
                    genre={genre}
                    handleChangeGenre={handleChangeGenre} />}
                {loading ? (<ActivityIndicator size="large" />) :
                    (data.map((movie) => (
                        <MovieCard {...movie} key={movie.id} />
                    )))}
            </ScrollView>
        </View>
    )

}

export default Movies;