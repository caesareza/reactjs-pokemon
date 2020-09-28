import { combineReducers } from 'redux';

import pokemonx from './reducerPokemon';
import pokemonxDetail from './reducerPokemonDetail';
import pokemonxMy from './reducerMyPokemon';
export default combineReducers({
    pokemonx,
    pokemonxDetail,
    pokemonxMy
});