import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Navbar from 'core/components/Navbar';
import Auth from 'pages/Auth';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/Movies/components/MovieDetails';
import history from 'core/utils/history';

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Route exact={true} path="/">
                <Auth />
            </Route>
            <Route exact={true} path="/movies">
                <Movies />
            </Route>
            <Route path="/movies/:movieId">
                <MovieDetails />
            </Route>
        </Switch>
    </Router>
);

export default Routes;