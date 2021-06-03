import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { text, theme } from '../styles';
import { getMovie } from '../services';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import ReviewCard from './ReviewCard';
import ReviewInsertCard from './ReviewInsertCard';
import { isAllowedByRole } from '../services/auth';

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
    const [allowed, setAllowed] = useState(true);

    async function loadMovieData() {
        setLoading(true);
        const res = await getMovie(id);
        setMovie(res.data);
        setLoading(false);
        setAllowed(await isAllowedByRole(['ROLE_MEMBER']));
    };

    useEffect(() => {
        loadMovieData();
    }, []);

/*
*/

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
                    {allowed && (
                        <ReviewInsertCard movieId={id} />)}
                    {movie.reviews.length > 0 ?
                        <View style={theme.reviewCard}>
                            <View style={theme.movieDescription}>
                                <Text style={text.movieAvalicoesText}>
                                    Avaliações
                            </Text>
                            </View>
                            {movie.reviews?.map((review) => (
                                <ReviewCard reviewText={review.text} reviewUsername={review.userName} />))}
                        </View> : null
                    }
                </ScrollView>
            )
        }
    </View>
)
}

export default MovieDetails;