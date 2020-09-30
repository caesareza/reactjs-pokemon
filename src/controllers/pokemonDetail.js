import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {fetchOnePokemon, catchThePokemon} from '../redux/reduxPokemonList';

const Loading = _ => (
    <div className="pokemon-loader">
        <div className="top"></div>
        <div className="mid"></div>
        <div className="btm">
            <div className="btm-l"></div>
            <div className="btm-l"></div>
            <div className="btm-l"></div>
            <div className="btm-l"></div>
            <div className="btm-l"></div>
            <div className="btm-l"></div>
        </div>
    </div>
)

const Toaster = _ => (
    <div className="toaster">
        Catch failed, your pokemon ball broken, catch again!
    </div>
)

const SavePokemon = ({selectedPokemon}) => {
    const [nickName, setNickNamne] = useState('');
    const [toaster, setToaster] = useState(false);
    const dispatch = useDispatch(); // hook dispatch
    const myPocketMonster = useSelector(state => state.pokemonxMy.mypokemons);
    const history = useHistory();

    const savePokemonButton = (event) => {
        event.preventDefault();
        let data = [];
        if(myPocketMonster.length > 0){
            const findMyPokemon = myPocketMonster.find(poke => poke.nickname === nickName)
            if(findMyPokemon){
                setToaster(true);
                return false;
            } else {
                data = myPocketMonster.concat([
                    {
                        pokemonname: selectedPokemon.name,
                        nickname: nickName
                    }
                ]);
            }
        } else {
            data = [{
                pokemonname: selectedPokemon.name,
                nickname: nickName
            }]
        }

        dispatch(catchThePokemon({mypokemons : data}));
        history.push('/my-pokemon');
    }

    return (
        <div className="pokemon-form">
            {
                toaster ? (
                    <div className="alert alert-red">Nickname already taken</div>
                ) : (
                    <div className="alert alert-success">Yeay, you caught this pokemon</div>
                )
            }
            <form onSubmit={savePokemonButton}>
                <input type="text" value={nickName} onChange={e => setNickNamne(e.target.value)}
                       placeholder="Give your pokemon nick name .. " required="required"/>
                <input type="submit" value="Save Pokemon"/>
            </form>
        </div>
    )
}

const CatchPokemon = ({lempar, throwing}) => (
    <div className="catch" onClick={lempar}>
        {
            throwing ? ('Catching ...') : ('Catch The Pokemon')
        }
    </div>
)

const PokemonDetailContainer = ({detail}) => (
    <>
        {
            detail.name && (
                <>
                    <div className="foto">
                        <img src={detail.other.sprites.front_default} alt={detail.name} width="200px"/>
                    </div>
                    <div className="nama">{detail.name}</div>
                    <div className="stats">
                        {
                            detail.other.stats.map((value, index) => (
                                <div className="stats-item" key={index}>
                                    <label>{value.stat.name}</label>
                                    <span>{value.base_stat}</span>
                                </div>
                            ))
                        }
                    </div>
                </>
            )
        }
    </>
)

const PokemonDetail = () => {
    const dispatch = useDispatch(); // hook dispatch
    const {name} = useParams(); // ambil nama pokemon
    const [isCaught, setIsCaught] = useState(false);
    const [throwing, setThrowing] = useState(false);
    const [notif, setNotif] = useState(false);
    const data = useSelector(state => state.pokemonxDetail.data); // data pokemon
    const isFetching = useSelector(state => state.pokemonxDetail.isFetching); // loading status

    // throw pokemon ball
    const catchUsingPokemonBall = () => {
        setThrowing(true);
        let throwProbability = Math.floor(Math.random() * Math.floor(2));
        if (throwProbability === 1) {
            setIsCaught(true);
            // console.log('pokemon tertangkap');
        } else {
            setNotif(true);
        }
    }

    // boundAction fungsi untuk request ke api untuk mengambil data dari server
    const loadPokemon = useCallback(() => {
        return dispatch(fetchOnePokemon(name));
    }, [dispatch, name]);

    // fetch pokemon data using useEffect
    useEffect(() => {
        // page title
        document.title = `${name} - Pokemon`;

        // load pokemon datas
        if (data.length === 0 || data.name !== name) loadPokemon()

        }, [loadPokemon, data, name]);

    useEffect(() => {
        // unmount throwing state
        return () => {
            setTimeout(() => {
                setNotif(false);
            }, 3000);

            setTimeout(() => {
                setThrowing(false);
            }, 3000);
        }
    });

    return (
        <>
            {isFetching ? (
                <Loading/>
            ) : (
                <div className="pokemons-detail">
                    {
                        notif && (<Toaster />)
                    }

                    <PokemonDetailContainer detail={data}/>
                    {
                        isCaught ? (
                            <SavePokemon selectedPokemon={data} />
                        ) : (
                            <CatchPokemon lempar={catchUsingPokemonBall} throwing={throwing}/>
                        )
                    }
                </div>
            )}
        </>
    )
}

export default PokemonDetail;