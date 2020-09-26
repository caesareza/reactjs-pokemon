import axios from './axios';

export async function apiFindAllPokemon() {
    const uri = 'pokemon?limit=10';
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
    const uri = `pokemon/${name}`;
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