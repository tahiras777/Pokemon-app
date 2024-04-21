"use client";
import { useQuery } from "@tanstack/react-query";
import Chart from "react-apexcharts";
import { getPokemonDetail } from "@/api";
import { PokemonImage } from "@/components/pokemon-image";
import { ErrorScreen } from "@/components/error-screen";
import Loader from "@/components/loader";  

export default function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const {
    data: pokemonDetail,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["pokemonDetail", pokemonName], // Object form with query key
    queryFn: () => getPokemonDetail(pokemonName), // Your query function
  });

  if (isLoading)
    return (
      <div className=" w-full flex justify-center">
        <Loader style={{ width: 40, height: 40 }} />
      </div>
    );
  if (isError) return <ErrorScreen message={error.message}></ErrorScreen>;

  const statsChartData = {
    options: {
      labels: pokemonDetail?.stats.map((stat) => stat.stat.name),
    },
    series: pokemonDetail?.stats.map((stat) => stat.base_stat),
  };

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div
        className="m-4"
        style={{ position: "relative", width: "300px", height: "300px" }}
      >
        <PokemonImage
          image={pokemonDetail?.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
      </div>
      <h3>Weight: {pokemonDetail?.weight}</h3>
      <div className="flex mt-6">
        <Chart
          options={statsChartData.options}
          series={statsChartData.series}
          type="donut"
          width="380"
        />
      </div>
    </>
  );
}
