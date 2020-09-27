import React, {useCallback, useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchOnePokemon} from '../../redux/reduxPokemonList';

const Loading = _ => (
    <>
        Loading ..
    </>
)

const SavePokemon = () => (
    <div className="save">
        Save Pokemon
    </div>
)

const CatchPokemon = ({lempar}) => (
    <div className="catch">
        <div onClick={lempar}>Catch The Pokemon</div>
    </div>
)

const PokemonDetailContainer = ({detail}) => (
    <>
        <div className="foto">
            <img src={detail.photo} alt={detail.name} width="200px"/>
        </div>
        <div className="nama">{detail.name}</div>
    </>
)

const PokemonDetail = () => {
    const throwProbability = Math.floor(Math.random() * Math.floor(2))
    const dispatch = useDispatch(); // hook dispatch
    const {name} = useParams(); // ambil nama pokemon
    const [isCaught, setIsCaught] = useState(false);

    // const data = useSelector(state => state.pokemonxDetail.data); // data pokemon
    // const isFetching = useSelector(state => state.pokemonxDetail.isFetching); // loading status

    const {
        count,
        data,
        isFetching,
        error
    } = useSelector(
        state => ({
            count: state.pokemonxDetail.count,
            data: state.pokemonxDetail.data,
            isFetching: state.pokemonxDetail.isFetching,
            error: state.pokemonxDetail.error,
        }), shallowEqual);


    // boundAction fungsi untuk request ke api untuk mengambil data dari server
    const loadPokemon = useCallback(() => {
        return dispatch(fetchOnePokemon(name));
    }, [dispatch, name]);


    useEffect(() => {
        document.title = `Detail - Pokemon`;
        console.log(throwProbability);

        // jika data tidak exist di redux maka hit fungsi boundAction()
        // jika data exist tapi nama pokemon yang direquest tidak ada di redux maka hit fungsi boundAction()
        if (data.length === 0 || data.name !== name) loadPokemon()

    }, [loadPokemon, data, name]);

    const catchUsingPokemonBall = () => {
        console.log('catchUsingPokemonBall')
    }

    return (
        <>
            {isFetching ? (
                <Loading/>
            ) : (
                <div className="pokemons-detail">
                    <PokemonDetailContainer detail={data} />
                    <CatchPokemon throw={catchUsingPokemonBall} />
                </div>
            )}
        </>
    )
}

export default PokemonDetail;