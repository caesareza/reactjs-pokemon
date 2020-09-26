import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import PokemonList from './controllers/pokemonList';
import PokemonDetail from './controllers/pokemonDetail';

function App() {
    return (
        <Router>
            <header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/detail">Pokemon Detail</Link></li>
                </ul>
            </header>

            <div className="container">
                <Switch>
                    <Route exact path="/" component={PokemonList}></Route>
                    <Route exact path="/pokemon/:name" component={PokemonDetail}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
