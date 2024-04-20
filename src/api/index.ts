import { BASE_API_URL } from "@/constants";
import { Result } from "@/types";

export const  getPokemonList = async() :Promise<Result[]>=> {
    const response = await fetch(BASE_API_URL + "pokemon?limit=251&offset=0");
    const data = await response.json();
    return data.results;
}

export async function getPokemon(name: string) {
  
    
    // pokemon/ditto
    const response = await fetch(BASE_API_URL + "pokemon/" + name);
    const data = await response.json();
    return data;
}