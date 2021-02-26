import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'core/components/Navbar';
import Auth from 'pages/Auth';
import Movies from 'pages/Movies';
import history from 'core/utils/history';
import MovieDetails from 'pages/Movies/components/MovieDetails';

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Redirect from="/" to="/auth/login" exact />
            <Redirect from="/auth" to="/auth/login" exact />
            <Route path="/auth/login">
                <Auth />
            </Route>
            <Route path="/movies" exact>
                <Movies />
            </Route>
            <Route path="/movies/:movieId">
                <MovieDetails />
            </Route>
        </Switch>
    </Router>
);

export default Routes;