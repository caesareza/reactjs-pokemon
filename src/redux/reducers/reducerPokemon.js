import {
    POKEMON_FETCH,
    POKEMON_SUCCESS,
    POKEMON_ERROR
} from '../actions/actionPokemonList';

const initialState = {
    count: 0,
    isFetching: false,
    data: [],
    error: null,
    url: 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0',
    nextUrl: null,
    prevUrl: null,
}

export default function (state = initialState, action) {
    switch (action.type){
        case POKEMON_FETCH:
            return{
                ...state,
                isFetching: true
            };
        case POKEMON_SUCCESS:
            return {
                ...state,
                count: action.payload.count,
                isFetching: false,
                data: action.payload.results,
                error: null,
                nextUrl: action.payload.next,
                prevUrl: action.payload.previous
            }
        case POKEMON_ERROR:
            return {
                ...state,
                count: 0,
                isFetching: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}