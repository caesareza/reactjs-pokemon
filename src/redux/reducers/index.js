import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import pokemonx from './reducerPokemon';
import pokemonxDetail from './reducerPokemonDetail';
import pokemonxMy from './reducerMyPokemon';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    pokemonx: pokemonx,
    pokemonxDetail: pokemonxDetail,
    pokemonxMy: pokemonxMy
})

export default createRootReducer;