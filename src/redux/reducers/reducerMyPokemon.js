import {
    POKEMON_CATCH,
    POKEMON_RELEASE,
    POKEMON_RELEASE_ALL
} from '../actions/actionMyPokemon';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    loading: false,
    message: null,
    mypokemons: []
}

const persistConfig = {
    key: 'myPokemons',
    storage: storage,
    whitelist: ['mypokemons'],
};

export default persistReducer(persistConfig,(state = initialState, action) => {
    switch (action.type) {
        case POKEMON_CATCH:
            return {
                ...state,
                message: 'pokemon catch',
                mypokemons: action.payload.mypokemons
            };
        case POKEMON_RELEASE:
            return {
                ...state,
                message: 'pokemon release',
                mypokemons: action.payload.mypokemons
            }
        case POKEMON_RELEASE_ALL:
            return {
                ...state,
                message: 'pokemon release all',
                mypokemons: []
            }
        default:
            return state;
    }
});