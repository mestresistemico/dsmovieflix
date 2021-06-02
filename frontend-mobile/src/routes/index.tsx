import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Movies, Login, MovieDetails } from '../pages';
import { colors, nav } from '../styles';
import NavBar from '../components/NavBar'

const Stack = createStackNavigator();
const HeaderText: React.FC = () => <Text style={nav.leftText}>DSMovieflix</Text>


const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: " ",
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerLeft: () => <HeaderText />,
                headerRight: () => <NavBar />,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Movies" component={Movies} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
    )

}

export default Routes;