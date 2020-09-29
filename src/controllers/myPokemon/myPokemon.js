import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const MyPokemon = () => {
    const dispatch = useDispatch(); // hook dispatch

    const data = useSelector(state => state.pokemonxMy.mypokemons);
    const dataPokemons = useSelector(state => state.pokemonx.data);

    console.log('data');
    console.log(data);

    return(
        <>
           <div className="alert alert-notif">
               You haven't catch any pokemon yet -_-
           </div>
        </>
    )
}

export default MyPokemon;