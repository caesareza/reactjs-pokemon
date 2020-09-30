import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import { useHistory } from "react-router-dom";
import {fetchPokemon} from '../redux/reduxPokemonList';

const Loading = _ => (
    <div className="pokemon-loader-home">
        <div className="h"></div>
        <div className="h"></div>
        <div className="h"></div>
        <div className="h"></div>
        <div className="h"></div>
    </div>
)

const Pokemonnya = ({data = [], t}) => {
    const history = useHistory();
    const linkDetailPokemon = (name) => {
        history.push(`pokemon/${name}`);
    }

    return(
        <div className="pokemons">
            {data.map((pokemon, index) => (
                <div key={index} className="list">
                    <div className="link" onClick={() => linkDetailPokemon(pokemon.name)}>
                        <div className="name">{pokemon.name}</div>
                        <div className="own">Owning: {t(pokemon.name)}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const PokemonList = () => {
    const dispatch = useDispatch();
    const { data, isFetching, url, prevUrl, nextUrl, mypokemons } = useSelector(
        state => ({
            data: state.pokemonx.data,
            isFetching: state.pokemonx.isFetching,
            url: state.pokemonx.url,
            prevUrl: state.pokemonx.prevUrl,
            nextUrl: state.pokemonx.nextUrl,
            mypokemons: state.pokemonxMy.mypokemons,
        }), shallowEqual);

    const totalPokemon = (p) => {
        let total = mypokemons.filter(poke => poke.pokemonname === p);
        return total.length;
    }

    const loadPokemon = useCallback((uri) => {
        return dispatch(fetchPokemon(uri));
    }, [dispatch]);

    const nextPage = () => {
        loadPokemon(nextUrl);
    }

    const prevPage = () => {
        loadPokemon(prevUrl);
    }

    useEffect(() => {
        // page title
        document.title = 'Catch - Pokemon';
        // jika data exist tapi nama pokemon yang direquest tidak ada di redux maka hit fungsi boundAction()
        if (data.length === 0) loadPokemon(url);
    }, [loadPokemon, data, url])

    return (
        <>
            { isFetching ? (
                <Loading/>
            ) : (
                <div className="pokemon-home">
                    <Pokemonnya data={data} t={totalPokemon} />
                    <div className="pager">
                        <nav onClick={prevPage}>Prev Page</nav>
                        <nav onClick={nextPage}>Next Page</nav>
                    </div>
                </div>
            )}
        </>
    )
}

export default PokemonList;