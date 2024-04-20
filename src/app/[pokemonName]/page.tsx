'use client'
import { useQuery } from "@tanstack/react-query";
import Chart from 'react-apexcharts'
import { getPokemon } from "@/api";
import Image from "next/image";
import { PokemonImage } from "@/components/pokemon-image";

export default function PokemonPage ({ params } : { params: { pokemonName: string } }) {


    const { pokemonName } = params;

    const { data: pokemonObject, isLoading, isError } = useQuery({
        queryKey: ['pokemon', pokemonName], // Object form with query key
        queryFn: () => getPokemon(pokemonName) // Your query function
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;
    const chartData = {
      options: {
          labels: pokemonObject.stats.map((stat:any) => stat.stat.name)
      },
      series: pokemonObject.stats.map((stat:any) => stat.base_stat),
  };
console.log("test", chartData)
if(pokemonObject){

}
    return (
        <>
            <h1 className="text-4xl text-bold pt-4">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
            <div className="m-4" style={{ position: "relative", width: '300px', height: '300px'}}>
                <PokemonImage 
                    image={pokemonObject.sprites.other['official-artwork'].front_default }
                    name={pokemonName}
                />
            </div>
            <h3>Weight: {pokemonObject.weight}</h3>
            <div className="flex mt-6">
            <Chart options={chartData.options} series={chartData.series}  type="donut" width="380" />
            </div>
        </>
    );
}





