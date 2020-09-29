import {
    POKEMON_DETAIL_FETCH,
    POKEMON_DETAIL_SUCCESS,
    POKEMON_DETAIL_ERROR
} from '../actions/actionPokemonDetail';

const initialState = {
    count: 0,
    data: {},
    isFetching: false,
    error: null,
}

export default function (state = initialState, action){
    switch (action.type) {
        case POKEMON_DETAIL_FETCH:
            return{
                ...state,
                isFetching: true
            };
        case POKEMON_DETAIL_SUCCESS:
            return{
                ...state,
                isFetching: false,
                data: {
                    name: action.payload.data.name,
                    other: action.payload.data
                },
                error: null
            };
        case POKEMON_DETAIL_ERROR:
            return{
                ...state,
                isFetching: false,
                data: {},
                error: action.payload
            };
        default:
            return state;
    }
}