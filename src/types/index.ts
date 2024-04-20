export interface PokemonListResponse {
count : number,
next: string,
previous: string | null | undefined,
results: Result[]
};

export type Result={
name : string;
url: string
}