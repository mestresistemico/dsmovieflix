import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { theme, text } from '../styles';
//import arrow from 'src/core/assets/images/arrow.svg';
//import draw from 'src/core/assets/images/draw.png';
//import menu from '../assets/menu.svg';
import { useNavigation } from '@react-navigation/core';

//<Image source={draw} style={theme.draw} />
//<Image source={arrow} />

const Home: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={theme.container}>
            <View style={theme.textContainer}>
                <Text style={text.bold}>
                    Avalie filmes
                    </Text>
                <Text style={text.regular}>
                    Diga o que você achou do seu filme favorito.
                    </Text>
            </View>
            <TouchableOpacity
                style={theme.primaryButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Movies")}
            >
                <Text style={text.primaryText}>
                    Fazer login
                </Text>
                <View style={theme.arrowContainer}>

                </View>
            </TouchableOpacity>
        </View>
    )

}

export default Home;