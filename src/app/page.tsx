"use client"
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import styled from "styled-components"; // Import styled-components
import { getPokemonCategoryList } from "@/api";
import { PokemonGrid } from "@/components/pokemon-grid";
import { useIntersectionObserver } from "./hooks/useInfiniteScroll";
import { ErrorScreen } from "@/components/error-screen";
import Loader from "@/components/loader";

// Styled components
const StyledWrapper = styled.div`
  //no need for any styles here 
`;

const StyledLoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledBottomSpacer = styled.div`
  width: 100%;
  height: 50px;
`;

export default function Home() {
  const ref = useRef(null);
  const isBottomVisible = useIntersectionObserver(
    ref,
    {
      threshold: 0,
    },
    false
  );

  const {
    isLoading,
    isError,
    error,
    data: pokemonCategories,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["fetch-all-pokemon"],
    queryFn: ({ pageParam = 0 }) => getPokemonCategoryList(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) {
        return undefined; // No more pages to fetch
      }
      const url = new URL(lastPage.next);
      const nextPageOffset = url.searchParams.get("offset");
      return nextPageOffset ? parseInt(nextPageOffset) : undefined;
    },
  });

  useEffect(() => {
    if (isBottomVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isBottomVisible, fetchNextPage, hasNextPage]);

  // Extracting results from pages
  const filteredPokemonCategories = pokemonCategories?.pages.flatMap(
    (page) => page.results
  ) || [];

  return (
    <StyledWrapper>
      {isError ? (
        <ErrorScreen message={error.message}></ErrorScreen>
      ) : (
        <>
          <PokemonGrid pokemonList={filteredPokemonCategories} />
          {isLoading && (
            <StyledLoaderWrapper>
              <Loader style={{ width: 40, height: 40 }} />
            </StyledLoaderWrapper>
          )}
        </>
      )}
      <StyledBottomSpacer ref={ref}></StyledBottomSpacer>
    </StyledWrapper>
  );
}
