import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import { useHistory } from "react-router-dom";
import {fetchPokemon} from '../../redux/reduxPokemonList';

const Loading = _ => (
    <>
        Loading ..
    </>
)

const Pokemonnya = ({data = [], detailPokemon}) => (
    <div className="pokemons">
        {data.map((pokemon, index) => (
            <div key={index} className="list">
                <div className="link" onClick={() => detailPokemon(pokemon.name)}>
                    {pokemon.name}
                </div>
            </div>
        ))}
    </div>
)

const PokemonList = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {
        count,
        data,
        isFetching,
        error
    } = useSelector(
        state => ({
            count: state.pokemonx.count,
            data: state.pokemonx.data,
            isFetching: state.pokemonx.isFetching,
            error: state.pokemonx.error,
        }), shallowEqual);

    const loadPokemon = useCallback(() => {
        return dispatch(fetchPokemon());
    }, [dispatch]);

    const handleDetailPokemon = (name) => {
        history.push(`pokemon/${name}`);
    }

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
                <Pokemonnya data={data} detailPokemon={handleDetailPokemon} />
            )}
        </>
    )
}

export default PokemonList;