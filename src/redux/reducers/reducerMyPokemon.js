import {
    POKEMON_CATCH,
    POKEMON_RELEASE,
    POKEMON_RELEASE_ALL
} from '../actions/actionMyPokemon';

const initialState = {
    loading: false,
    message: null,
    mypokemons: []
}

export default function (state = initialState, action){
    switch (action.type) {
        case POKEMON_CATCH:
            return{
                ...state,
                message: 'pokemon catch',
                mypokemons: action.payload.mypokemons
            };
        case POKEMON_RELEASE:
            return{
                ...state,
                message: 'pokemon release',
                mypokemons: action.payload.mypokemons
            }
        case POKEMON_RELEASE_ALL:
            return{
                ...state,
                message: 'pokemon release all',
                mypokemons: []
            }
        default:
            return state
    }
}