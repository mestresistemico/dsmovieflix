import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
//import  { MovieCard, SearchInput } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../styles';
//import { api, getProducts } from '../services';

const Movies: React.FC = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fillProducts() {
        setLoading(true);
        //        const res = await getProducts();
        //        setProducts(res.data.content);
        setLoading(false);
    };

    useEffect(() => {
        fillProducts();
    }, []);

    //  const data = search.length > 0 ?
    //        products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())) : 
    //        products;

    //<SearchInput placeholder={"Nome do produto"} search={search} setSearch={setSearch}/>
    //{loading ? (<ActivityIndicator size="large" />) :
    //(data.map((product) => (
    //    <MovieCard {...product} key={product.id}/>
    //)))}

    return (
        <View style={theme.container}>
            <ScrollView contentContainerStyle={theme.scrollContainer}>
                <Text>Lista de filmes</Text>
            </ScrollView>
        </View>
    )

}

export default Movies;