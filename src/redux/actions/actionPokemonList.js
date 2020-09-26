export const POKEMON_FETCH = 'POKEMON_FETCH';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';
export const POKEMON_ERROR = 'POKEMON_ERROR';

export const findAllPokemonBegin = () => {
    return{
        type: POKEMON_FETCH
    }
}

export const findAllPokemonSuccess = data => {
    return{
        type: POKEMON_SUCCESS,
        payload: data
    }
}

export const findAllPokemonError = error => {
    return{
        type: POKEMON_ERROR,
        payload: error
    }
}