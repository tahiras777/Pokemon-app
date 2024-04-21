import React, { useState } from "react";
import { FormLabel, Input } from "@chakra-ui/react";

interface FormInputProps {
    onChange: (text: string) => void;
}

export const FormInput: React.FC<FormInputProps> = ({ onChange }) => {
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className="flex flex-col gap-4">
            <FormLabel htmlFor="pokemonName" className="text-lg font-medium text-white">
                Pokémon Name:
            </FormLabel>
            <Input
                type="text"
                autoComplete="off"
                value={searchText}
                id="pokemonName"
                placeholder="e.g. Pikachu, Charizard, etc."
                onChange={handleInputChange}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
        </div>
    );
};
