import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {releaseOnePokemon, releaseAllMyPokemon} from '../../redux/reduxPokemonList';

const MyPokemonRelaseAll = ({releaseAllAction}) => (
    <>
        <div className="alert alert-notif" onClick={releaseAllAction}>
            Relase All Pokemons
        </div>
    </>
)

const MyPokemonNotification = _ => (
    <>
        <div className="alert alert-notif">
            You haven't catch any pokemon yet -_-
        </div>
    </>
)

const MyPokemonContainer = ({data, releaseAction}) => (
    <>
        <h1 title="My Pokemon">My Pokemon</h1>
        {
            data.map((pokemon, index) => (
                <div key={index}>
                    {pokemon.pokemonname}
                    {pokemon.nickname}
                    <nav onClick={() => releaseAction(pokemon.nickname)}>
                        Release
                    </nav>
                </div>
            ))
        }
    </>
)

const MyPokemon = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.pokemonxMy.mypokemons);

    const releaseOnePokeonAction = useCallback((data) => {
        return dispatch(releaseOnePokemon({ mypokemons: data }));
    }, [dispatch]);

    const releasePokemon = (nickname) => {
        const res = data.filter(nn => nn.nickname !== nickname);
        if(res) releaseOnePokeonAction(res);
    }

    const releaseAllPokemonAction = useCallback(() => {
        return dispatch(releaseAllMyPokemon())
    }, [dispatch])

    const releaseAllPokemon = () => {
        if(data) releaseAllPokemonAction();
    }

    return(
        <>
            { data.length > 0 ? (
                <>
                    <MyPokemonContainer data={data} releaseAction={releasePokemon} />
                    <MyPokemonRelaseAll releaseAllAction={releaseAllPokemon} />
                </>
            ) : (
                <MyPokemonNotification />
            )}
        </>
    )
}

export default MyPokemon;