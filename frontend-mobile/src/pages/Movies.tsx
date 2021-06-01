import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MovieCard } from '../components';
//import  { MovieCard, SearchInput } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../styles';
import { api, getMovies } from '../services';

const Movies: React.FC = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fillProducts() {
        setLoading(true);
        const res = await getMovies();
        setMovies(res.data.content);
        setLoading(false);
    };

    useEffect(() => {
        fillProducts();
    }, []);

      const data = movies;
    //  const data = search.length > 0 ?
    //        products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())) : 
    //        products;

    //<SearchInput placeholder={"Nome do produto"} search={search} setSearch={setSearch}/>

    return (
        <View style={theme.container}>
            <ScrollView contentContainerStyle={theme.scrollContainer}>
                {loading ? (<ActivityIndicator size="large" />) :
                    (data.map((movie) => (
                        <MovieCard {...movie} key={movie.id} />
                    )))}
            </ScrollView>
        </View>
    )

}

export default Movies;