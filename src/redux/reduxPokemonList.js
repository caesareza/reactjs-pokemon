import {apiFindAllPokemon, apiFindOnePokemon} from './api/apiPokemon';
import { findAllPokemonBegin, findAllPokemonSuccess, findAllPokemonError } from './actions/actionPokemonList';
import { findOnePokemonBegin, findOnePokemonSuccess, findOnePokemonError } from './actions/actionPokemonDetail';
import { catchPokemon, releasePokemon, releaseAllPokemon } from './actions/actionMyPokemon';

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

export const catchThePokemon = payload => async dispatch => {
    try{
        dispatch(catchPokemon(payload))
        return true;
    }catch (e){
        dispatch(catchPokemon(e))
        return e;
    }
}

export const releaseOnePokemon = payload => async dispatch => {
    try{
        dispatch(releasePokemon(payload))
        return true;
    }catch (e) {
        dispatch(releasePokemon(e))
        return e;
    }
}

export const releaseAllMyPokemon = payload => async dispatch => {
    try{
        dispatch(releaseAllPokemon(payload))
        return true;
    }catch (e) {
        dispatch(releaseAllPokemon())
        return e;
    }
}