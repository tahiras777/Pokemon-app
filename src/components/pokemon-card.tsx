import Link from "next/link";
import styled from "styled-components";

// Define a styled component for the Pokemon card container
const PokemonCardContainer = styled.div`
  margin: 5px;
  display: flex;
  height: fit-content;
  width: 14rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: rgba(229, 231, 235, 0.5);
  padding: 0.75rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
`;

// Define a styled component for the Pokemon card title
const PokemonCardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center; // Center align text
  margin: 0; // Remove default margin
`;

interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={{
        pathname: name,
        query: { Pokemon: "list" }, // Add your string parameter here
      }}
      as={`/${name}`}
    >
      <PokemonCardContainer>
        <PokemonCardTitle>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </PokemonCardTitle>
      </PokemonCardContainer>
    </Link>
  );
}