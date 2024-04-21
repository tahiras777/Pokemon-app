import React, { useState, useEffect } from "react";
import { PokemonCard } from "@/components/pokemon-card";
import { Result } from "@/types/index";
import { FormInput } from "./form-input";
import styled from 'styled-components';

interface PokemonGridProps {
    pokemonList: Result[];
}

// Styled Components
const Container = styled.div`
    margin: auto;
    max-width: 52rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`;

const Title = styled.h3`
    font-size: 1.875rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    color: white;
`;

const CollectionTitle = styled.h3`
    font-size: 1.875rem;
    padding-bottom: 1.5rem;
    padding-top: 3rem;
    text-align: center;
`;

const PokemonGridContainer = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(12rem, 1fr)); /* Adjusted columns */
    gap: 1.5rem; /* Increased gap */
    justify-content: space-around; /* Center cards */
`;

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
            <Container>
                <Title>Find Your Pokémon!</Title>
                <div className="flex flex-col gap-4">
                    <FormInput onChange={handleSearch} />
                </div>
                <CollectionTitle>Pokemon Collection</CollectionTitle>
            </Container>
            <PokemonGridContainer>
                {filteredPokemonList.map((pokemon: Result) => (
                    <PokemonCard name={pokemon.name} key={pokemon.name} />
                ))}
            </PokemonGridContainer>
        </>
    );
};
