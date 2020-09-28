import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchOnePokemon} from '../../redux/reduxPokemonList';
import {catchThePokemon} from '../../redux/reduxPokemonList';

const Loading = _ => (
    <>
        Loading ..
    </>
)

const SavePokemon = ({simpan}) => (
    <div className="save" onClick={simpan}>
        Save Pokemon
    </div>
)

const CatchPokemon = ({lempar, throwing}) => (
    <div className="catch" onClick={lempar}>
        {
            throwing ? ( 'Catching ...' ) : ('Catch The Pokemon')
        }
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
    const dispatch = useDispatch(); // hook dispatch
    const {name} = useParams(); // ambil nama pokemon
    const [isCaught, setIsCaught] = useState(false);
    const [throwing, setThrowing] = useState(false);

    const data = useSelector(state => state.pokemonxDetail.data); // data pokemon
    const isFetching = useSelector(state => state.pokemonxDetail.isFetching); // loading status

    // throw pokemon ball
    const catchUsingPokemonBall = () => {
        setThrowing(true);
        let throwProbability = Math.floor(Math.random() * Math.floor(2));
        if(throwProbability === 1){
            setIsCaught(true);
            console.log('pokemon tertangkap');
        }
    }

    const savePokemon = () => {
        const p = [
            {
                id: 1,
                name: 'aaa'
            },
            {
                id: 2,
                name: 'bbb'
            },
        ];

        console.log(p);

        dispatch(catchThePokemon({mypokemons: p}));
    }

    // boundAction fungsi untuk request ke api untuk mengambil data dari server
    const loadPokemon = useCallback(() => {
        return dispatch(fetchOnePokemon(name));
    }, [dispatch, name]);



    // fetch pokemon data using useEffect
    useEffect(() => {
        // page title
        document.title = `${name} - Pokemon`;

        // jika data tidak exist di redux maka hit fungsi boundAction()
        // jika data exist tapi nama pokemon yang direquest tidak ada di redux maka hit fungsi boundAction()
        if (data.length === 0 || data.name !== name) loadPokemon()

    }, [loadPokemon, data, name]);

    useEffect(() => {
        return () => {
            setTimeout(() => {
                setThrowing(false);
            }, 3000);
        }


    },[])

    return (
        <>
            {isFetching ? (
                <Loading/>
            ) : (
                <div className="pokemons-detail">
                    <PokemonDetailContainer detail={data} />
                    {
                        <SavePokemon simpan={savePokemon} />
                        // isCaught ? (
                        //     <SavePokemon simpan={savePokemon} />
                        // ) : (
                        //     <CatchPokemon lempar={catchUsingPokemonBall} throwing={throwing} />
                        // )
                    }
                </div>
            )}
        </>
    )
}

export default PokemonDetail;