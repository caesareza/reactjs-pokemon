import axios from './axios';

export async function apiFindAllPokemon(url) {
    const uri = url;
    try{
        const response = await axios({
            method: 'GET',
            url: uri
        })
        return response.data;
    } catch (error){
        return error;
    }
}

export async function apiFindOnePokemon(name){
    const uri = `https://pokeapi.co/api/v2/pokemon/${name}`;
    try{
        const response = await axios({
            method: 'GET',
            url: uri
        })
        return response;
    } catch (error){
        return error;
    }
}