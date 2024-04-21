export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string | null | undefined;
  results: Result[];
}

export type Result = {
  name: string;
  url: string;
};

export interface PokemonDetailResponse {
  abilities: AbilityInfo[];
  base_experience: number;
  cries: Cries;
  forms: Forms[];
  game_indices: GameIndicies[];
  sprites: any;
  moves: any;
  species: Species;
  height: number;
  id: number;
  held_items: unknown[];
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_abilities: unknown[];
  past_types: unknown[];
  weight: number;
  stats: StatInfo[];
  types: PokemonTypes[];
}

interface Ability {
  name: string;
  url: string;
}

interface AbilityInfo {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}
type Cries = {
  latest: string;
  legacy: string;
};
type Forms = {
  name: string;
  url: string;
};

type GameIndicies = {
  game_index: number;
  version: { name: string; url: string };
};

type Species = { name: string; url: string };

interface Stat {
  name: string;
  url: string;
}

interface StatInfo {
  base_stat: number;
  effort: number;
  stat: Stat;
}
interface Type {
  name: string;
  url: string;
}

interface PokemonType {
  slot: number;
  type: Type;
}

type PokemonTypes = PokemonType[];
