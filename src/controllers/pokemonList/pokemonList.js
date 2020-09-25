import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {fetchPokemon} from '../../redux/reduxPokemonList';


const Pokemonnya = ({data = []}) => (
    <>
        {data.map((pokemon, index) => (
            <div key={index}>
                {pokemon.name}
            </div>
        ))}
    </>
)

const Loading = () => (
    <>
        Loading ..
    </>
)

const PokemonList = () => {
    const dispatch = useDispatch();
    const {count, data, isFetching, error} = useSelector(
        state => ({
            count: state.pokemonx.count,
            data: state.pokemonx.data,
            isFetching: state.pokemonx.isFetching,
            error: state.pokemonx.error,
        }), shallowEqual);

    const boundAction = useCallback(() => {
        return dispatch(fetchPokemon());
    }, [dispatch]);

    useEffect(() => {
        if (data.length == 0) boundAction()
    }, [boundAction, data])

    return (
        <>
            {
                isFetching ? (<Loading/>) : (<Pokemonnya data={data}/>)
            }
        </>
    )
}

export default PokemonList;
//
// class PokemonList extends React.Component {
//     componentDidMount() {
//         this.props.fetchPokemon();
//     };
//
//     render() {
//         const {count, data, isFetching, error} = this.props;
//
//
//         if (isFetching) {
//             return <div>isFetching</div>
//         }
//
//
//         return (
//             <div>
//                 {/*<Pokemonnya data={data} />*/}
//             </div>
//         );
//     }
// }
//
// const mapsStateToProps = state => ({
//     count: state.pokemonx.count,
//     data: state.pokemonx.data,
//     isFetching: state.pokemonx.isFetching,
//     error: state.pokemonx.error,
// })
//
// const mapsDispatchToProps = {
//     fetchPokemon
// }
// export default connect(
//     mapsStateToProps,
//     mapsDispatchToProps
// )(PokemonList);