import { combineReducers } from 'redux';

import pokemonx from './reducerPokemon';
import pokemonxDetail from './reducerPokemonDetail';

export default combineReducers({
    pokemonx,
    pokemonxDetail
});