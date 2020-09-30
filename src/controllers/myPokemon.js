import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {releaseOnePokemon, releaseAllMyPokemon} from '../redux/reduxPokemonList';

const MyPokemonRelaseAll = ({releaseAllAction}) => (
    <>
        <nav className="release-all" onClick={releaseAllAction}>
            Relase All My Pokemon(s)
        </nav>
    </>
)

const MyPokemonNotification = _ => (
    <>
        <div className="alert alert-notif">
            You haven't catch any pokemon yet
        </div>
    </>
)

const MyPokemonContainer = ({data, releaseAction}) => (
    <div className="my-pokemon-list">
        <h1 title="My Pokemon">My Pokemon</h1>
        {
            data.map((pokemon, index) => (
                <div className="i" key={index}>
                    <div className="name">Pokemon: {pokemon.pokemonname}</div>
                    <div className="nickname">Nick Name: {pokemon.nickname}</div>
                    <nav className="release-one" onClick={() => releaseAction(pokemon.nickname)}>
                        Release
                    </nav>
                </div>
            ))
        }
    </div>
)

const MyPokemon = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.pokemonxMy.mypokemons);

    const releaseOnePokemonAction = useCallback((data) => {
        return dispatch(releaseOnePokemon({ mypokemons: data }));
    }, [dispatch]);

    const releaseSelectedPokemon = (nickname) => {
        const res = data.filter(nn => nn.nickname !== nickname);
        if(res) releaseOnePokemonAction(res);
    }

    const releaseAllPokemonAction = useCallback(() => {
        return dispatch(releaseAllMyPokemon())
    }, [dispatch])

    const releaseAllPokemon = () => {
        if(data) releaseAllPokemonAction();
    }

    useEffect(() => {
        // page title
        document.title = 'My Pokemon - Pokemon';
    }, [data])

    return(
        <>
            { data.length > 0 ? (
                <div className="my-pokemon">
                    <MyPokemonContainer data={data} releaseAction={releaseSelectedPokemon} />
                    <MyPokemonRelaseAll releaseAllAction={releaseAllPokemon} />
                </div>
            ) : (
                <MyPokemonNotification />
            )}
        </>
    )
}

export default MyPokemon;