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
    <>
        {data.map((pokemon, index) => (
            <div key={index}>
                <span onClick={() => detailPokemon(pokemon.name)}>
                    {pokemon.name}
                </span>
            </div>
        ))}
    </>
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

    const boundAction = useCallback(() => {
        return dispatch(fetchPokemon());
    }, [dispatch]);

    const handleDetailPokemon = (name) => {
        history.push(`pokemon/${name}`);
    }

    useEffect(() => {
        if (data.length === 0) boundAction()
    }, [boundAction, data])

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