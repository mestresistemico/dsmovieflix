import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { text, theme } from '../styles';
import { api, getMovie } from '../services';
import arrowBack from '../assets/arrowBack.png';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const MovieDetails = ({ route: { params: { id } } }) => {

    const navigation = useNavigation();

    const [movie, setMovie] = useState({
        id: null,
        title: null,
        synopsis: null,
        year: null,
        imgUrl: null,
        subTitle: null,
        reviews: []
    });

    const [loading, setLoading] = useState(false);

    async function loadMovieData() {
        setLoading(true);
        const res = await getMovie(id);
        setMovie(res.data);
        setLoading(false);
    };

    useEffect(() => {
        loadMovieData();
    }, []);

    return (
        <View style={theme.container}>
            {loading ? (<ActivityIndicator size="large" />) :
                (
                    <ScrollView>
                        <View style={theme.detailCard}>
                            <Text style={text.movieTitleDetails}>
                                {movie.title}
                            </Text>
                            <Image source={{ uri: movie.imgUrl }}
                                style={theme.movieImgDetails} />
                            <View style={theme.movieDescription}>
                                <Text style={text.movieYearDetails}>
                                    {movie.year}
                                </Text>
                                <Text style={text.movieSubtitleDetails}>
                                    {movie.subTitle}
                                </Text>
                                <Text style={text.movieSynopsisText}>
                                    Sinopse
                            </Text>
                                <ScrollView style={theme.scrollTextContainer}>
                                    <Text style={text.movieSynopsis}>
                                        {movie.synopsis}
                                    </Text>
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                )
            }
        </View>
    )
}

export default MovieDetails;