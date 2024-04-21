"use client"
import { useQuery } from "@tanstack/react-query";
import Chart from "react-apexcharts";
import { getPokemonDetail } from "@/api";
import { PokemonImage } from "@/components/pokemon-image";
import { ErrorScreen } from "@/components/error-screen";
import Loader from "@/components/loader";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding-top: 1rem;
`;

const ImageContainer = styled.div`
  margin: 1rem;
  position: relative;
  width: 300px;
  height: 300px;
`;

const Weight = styled.h3`
  margin-top: 1rem;
`;

// Rest of the styled components remain the same

export default function PokemonPage({ params }: { params: { pokemonName: string } }) {
  const { pokemonName } = params;

  const { data: pokemonDetail, isLoading, isError, error } = useQuery({
    queryKey: ["pokemonDetail", pokemonName],
    queryFn: () => getPokemonDetail(pokemonName),
  });

  if (isLoading)
    return (
      <LoaderWrapper>
        <Loader style={{ width: 40, height: 40 }} />
      </LoaderWrapper>
    );
  if (isError) return <ErrorScreen message={error.message}></ErrorScreen>;

  const statsChartData = {
    options: {
      labels: pokemonDetail?.stats.map((stat) => stat.stat.name),
    },
    series: pokemonDetail?.stats.map((stat) => stat.base_stat),
  };

  return (
    <Container>
      <LeftColumn>
        <Title>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</Title>
        <ImageContainer>
          <PokemonImage
            image={pokemonDetail?.sprites.other["official-artwork"].front_default}
            name={pokemonName}
          />
        </ImageContainer>
        <Weight>Weight: {pokemonDetail?.weight}</Weight>
      </LeftColumn>
      <RightColumn>
        <Chart options={statsChartData.options} series={statsChartData.series} type="donut" width="380" />
      </RightColumn>
    </Container>
  );
}