import React, { useState, useEffect } from "react";
import { PokemonCard } from "@/components/pokemon-card";
import { Result } from "@/types/index";
import { FormInput } from "./form-input";

interface PokemonGridProps {
    pokemonList: Result[];
}

export const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemonList }) => {
    const [searchText, setSearchText] = useState("");
    const [filteredPokemonList, setFilteredPokemonList] = useState<Result[]>(pokemonList);

    useEffect(() => {
        const filteredList = pokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredPokemonList(filteredList);
    }, [pokemonList, searchText]);

    const handleSearch = (text: string) => {
        setSearchText(text);
    };

    return (
        <>
            <div className="mx-auto max-w-lg p-6 rounded-lg shadow-sm">
                <h3 className="text-3xl text-center mb-6 font-semibold text-white">Find Your Pokémon!</h3>
                <div className="flex flex-col gap-4">
                    <FormInput onChange={handleSearch} />
                </div>
                <h3 className="text-3xl pb-6 pt-12 text-center">Pokemon Collection</h3>
            </div>
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
                {filteredPokemonList.map((pokemon: Result) => (
                    <PokemonCard name={pokemon.name} key={pokemon.name} />
                ))}
            </div>
        </>
    );
};
