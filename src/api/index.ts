import { BASE_API_URL } from "@/constants";
import { PokemonListResponse } from "@/types";

export const getPokemonList = async ( offset: number = 0): Promise<PokemonListResponse> => {
    const response = await fetch(`${BASE_API_URL}pokemon?limit=20&offset=${offset}`);
    const data = await response.json();
    return data;
};


export async function getPokemon(name: string) {
  
    
    // pokemon/ditto
    const response = await fetch(BASE_API_URL + "pokemon/" + name);
    const data = await response.json();
    return data;
}