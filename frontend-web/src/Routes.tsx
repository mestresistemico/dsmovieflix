import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import Navbar from 'core/components/Navbar';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import history from 'core/utils/history';
//import MovieDetails from 'pages/Movies/components/MovieDetails';
//<Route path="/movies/:movieId">
//<MovieDetails />
//</Route>

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/movies" exact>
                <Movies />
            </Route>
        </Switch>
    </Router>
);

export default Routes;