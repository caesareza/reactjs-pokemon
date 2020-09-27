import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import PokemonList from './controllers/pokemonList';
import PokemonDetail from './controllers/pokemonDetail';
import logo from './pokeapi-logo.png';

function App() {
    return (
        <Router>
            <div className="page">
                <header>
                    <div className="logo">
                        <Link to="/"><img src={logo} /></Link>
                    </div>
                    <div className="menu">
                        <Link to="/">Home</Link>
                        <Link to="/my-pokemon">My Pokemon</Link>
                    </div>
                </header>

                <div className="container">
                    <Switch>
                        <Route exact path="/" component={PokemonList}></Route>
                        <Route exact path="/pokemon/:name" component={PokemonDetail}></Route>
                    </Switch>
                </div>
                <footer>
                    <div className="container">
                        &copy; September 2020
                        <p>
                            Pokémon and Pokémon character names are trademarks of Nintendo.
                        </p>
                        <div className="sitemap">
                            <Link to="/">Home</Link>
                            <Link to="/my-pokemon">My Pokemon</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
