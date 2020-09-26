import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import {fetchOnePokemon} from '../../redux/reduxPokemonList';

const Loading = _ => (
    <>
        Loading ..
    </>
)

const PokemonDetailContainer = ({detail}) => (
    <>
        {detail.name}
    </>
)

const PokemonDetail = () => {
    const dispatch = useDispatch(); // hook dispatch
    const { name } = useParams(); // ambil nama pokemon

    const data = useSelector(state => state.pokemonxDetail.data); // data pokemon
    const isFetching = useSelector(state => state.pokemonxDetail.isFetching); // loading status

    // boundAction fungsi untuk request ke api untuk mengambil data dari server
    const loadPokemon = useCallback(() => {
        return dispatch(fetchOnePokemon(name));
    }, [dispatch]);

    useEffect(() => {
        // page title
        document.title = `${name} - Pokemon`;

        // jika data tidak exist di redux maka hit fungsi boundAction()
        // jika data exist tapi nama pokemon yang direquest tidak ada di redux maka hit fungsi boundAction()
        if(data.length === 0 || data.name !== name) loadPokemon()
    }, [loadPokemon, data, name]);

    return(
        <>
            {isFetching ? (
                <Loading />
            ):(
                <PokemonDetailContainer detail={data} />
            )}
        </>
    )
}

export default PokemonDetail;