export const POKEMON_DETAIL_FETCH = 'POKEMON_DETAIL_FETCH';
export const POKEMON_DETAIL_SUCCESS = 'POKEMON_DETAIL_SUCCESS';
export const POKEMON_DETAIL_ERROR = 'POKEMON_DETAIL_ERROR';

export const findOnePokemonBegin = () => {
    return{
        type: POKEMON_DETAIL_FETCH
    }
}

export const findOnePokemonSuccess = data => {
    return{
        type: POKEMON_DETAIL_SUCCESS,
        payload: data
    }
}

export const findOnePokemonError = error => {
    return{
        type: POKEMON_DETAIL_ERROR,
        payload: error
    }
}