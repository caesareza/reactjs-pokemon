import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import { useHistory } from "react-router-dom";
import {fetchPokemon} from '../../redux/reduxPokemonList';

const Loading = _ => (
    <>
        Loading ..
    </>
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
                        <div className="own">{t(pokemon.name)}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const PokemonList = () => {
    const dispatch = useDispatch();
    const {
        count,
        data,
        isFetching,
        error,
        mypokemons
    } = useSelector(
        state => ({
            count: state.pokemonx.count,
            data: state.pokemonx.data,
            isFetching: state.pokemonx.isFetching,
            error: state.pokemonx.error,
            mypokemons: state.pokemonxMy.mypokemons,
        }), shallowEqual);

    const totalPokemon = (p) => {
        let total = mypokemons.filter(poke => poke.pokemonname === p);
        return total.length;
    }

    const loadPokemon = useCallback(() => {
        return dispatch(fetchPokemon());
    }, [dispatch]);

    useEffect(() => {
        // page title
        document.title = 'Catch - Pokemon';
        // jika data exist tapi nama pokemon yang direquest tidak ada di redux maka hit fungsi boundAction()
        if (data.length === 0) loadPokemon();
    }, [loadPokemon, data])

    return (
        <>
            { isFetching ? (
                <Loading/>
            ) : (
                <Pokemonnya data={data} t={totalPokemon} />
            )}
        </>
    )
}

export default PokemonList;