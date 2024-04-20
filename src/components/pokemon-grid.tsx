import { FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import {PokemonCard} from '@/components/pokemon-card'
import { Interface } from "readline";

interface PokemonGripProps {
    pokemonList: any
}
export function PokemonGrid({pokemonList}: PokemonGripProps) {
    const [searchText, setSearchText] = useState("");
    
    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (item: any) => item.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }
    //filtered array
    const filteredPokemonList = searchFilter(pokemonList);
    return (
        <>
        <div className="mx-auto max-w-lg p-6 rounded-lg shadow-sm">
            <h3 className="text-3xl text-center mb-6 font-semibold text-white">Find Your Pokémon!</h3>
            <div className="flex flex-col gap-4">
                <FormLabel htmlFor="pokemonName" className="text-lg font-medium text-white">Pokémon Name:</FormLabel>
                <Input 
                    type="text" 
                    autoComplete="off"
                    value={searchText}
                    id="pokemonName"
                    placeholder="e.g. Pikachu, Charizard, etc."
                    onChange={(e) => setSearchText(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <h3 className=" text-3xl pb-6 pt-12 text-center">Pokemon Collection </h3>
        </div>
         <div className=" mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
            {filteredPokemonList.map((pokemon: any) => {
                return (
                    <PokemonCard 
                    name = {pokemon.name} 
                    key={pokemon.name} />
                )
            })}
         </div>
        </>
        
    );
}   

