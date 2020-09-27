import React, {useCallback, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchOnePokemon} from '../../redux/reduxPokemonList';

const Loading = _ => (
    <>
        Loading ..
    </>
)

const savePokemon = () => (
    <div className="save">
        Save Pokemon
    </div>
)

const PokemonDetailContainer = ({detail}) => (
    <div className="pokemons-detail">
        <div className="foto">
            <img src={detail.photo} alt={detail.name} width="200px"/>
        </div>
        <div className="nama">{detail.name}</div>
    </div>
)

const PokemonDetail = () => {
    const dispatch = useDispatch(); // hook dispatch
    const {name} = useParams(); // ambil nama pokemon

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

        // jika data tidak exist di redux maka hit fungsi boundAction()
        // jika data exist tapi nama pokemon yang direquest tidak ada di redux maka hit fungsi boundAction()
        if (data.length === 0 || data.name !== name) loadPokemon()

    }, [loadPokemon, data, name]);


    return (
        <>
            {isFetching ? (
                <Loading/>
            ) : (
                <PokemonDetailContainer detail={data}/>
            )}
        </>
    )
}

export default PokemonDetail;