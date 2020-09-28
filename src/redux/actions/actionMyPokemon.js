export const POKEMON_CATCH = 'POKEMON_CATCH';
export const POKEMON_RELEASE = 'POKEMON_RELEASE';
export const POKEMON_RELEASE_ALL = 'POKEMON_RELEASE_ALL';

export const pokemonCatch = data => {
    return{
        type: POKEMON_CATCH,
        payload: data
    }
}

export const pokemonRelease = data => {
    return{
        type: POKEMON_RELEASE,
        payload: data
    }
}

export const pokemonReleaseAll = () => {
    return{
        type: POKEMON_RELEASE_ALL,
        payload:{}
    }
}