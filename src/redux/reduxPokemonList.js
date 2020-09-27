import {apiFindAllPokemon, apiFindOnePokemon} from './api/apiPokemon';
import { findAllPokemonBegin, findAllPokemonSuccess, findAllPokemonError } from './actions/actionPokemonList';
import { findOnePokemonBegin, findOnePokemonSuccess, findOnePokemonError } from './actions/actionPokemonDetail';

export const fetchPokemon = payload => async dispatch => {
    try{
        dispatch(findAllPokemonBegin());
        const res = await apiFindAllPokemon(payload);
        dispatch(findAllPokemonSuccess(res));
        return res;
    } catch (e){
        dispatch(findAllPokemonError(e));
        return e
    }
}

export const fetchOnePokemon = payload => async dispatch => {
    try{
        dispatch(findOnePokemonBegin());
        const res = await apiFindOnePokemon(payload);
        dispatch(findOnePokemonSuccess(res));
        return res;
    }catch (e) {
        dispatch(findOnePokemonError(e));
        return e;
    }
}

