"use client"
import Image from "next/image";
import { getPokemonList } from "@/api";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query"
import { PokemonGrid } from "@/components/pokemon-grid";

export default function Home() {
  const { isLoading, error, data: pokemonList } = useQuery({
    queryKey: ['fetch-all-pokemon'], 
    queryFn: getPokemonList, 
  });

  // Render the PokemonGrid component with pokemonList as props
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <PokemonGrid pokemonList={pokemonList} />
      )}
    </div>
  );
}














// "use client"
// import Image from "next/image";
// import { getPokemonList } from "@/api";
// import { useEffect } from "react";
// import { useQuery } from "@tanstack/react-query"
// import { PokemonGrid } from "@/components/pokemon-grid";

// export default function Home() {
//   const { isLoading, error, data: pokemonList } = useQuery({
//     queryKey: ['fetch-all-pokemon'], 
//     queryFn: getPokemonList, 
//   });

 
 
//   return (
//           <PokemonGrid />
//     // <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//     //   {isLoading && <p>Loading...</p>}
//     //   {error && <p>Error: {error.message}</p>}
//     //   {pokemonList && (
//     //     <div>
//     //       {pokemonList.map((item) => (
//     //         <div key={item.name}>
//     //           <h1>{item.name}</h1>
//     //           <p>{item.url}</p>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   )}
//     // </div>
//   );
// }
