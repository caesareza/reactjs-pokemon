import { apiFindAllPokemons } from './api/apiPokemon';
import { findAllPokemonBegin, findAllPokemonSuccess, findAllPokemonError } from './actionPokemonList';

export const fetchPokemon = payload => async dispatch => {
    try{
        dispatch(findAllPokemonBegin());
        const res = await apiFindAllPokemons(payload);
        dispatch(findAllPokemonSuccess(res));
        return res;
    } catch (e){
        dispatch(findAllPokemonError(e));
        return e
    }
}