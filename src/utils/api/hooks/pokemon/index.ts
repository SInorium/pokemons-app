import { useInfiniteQuery, useQuery } from "react-query";

import { requestPokemon } from "../../requests";

interface UseRequestPokemonQueryInterface {
  offset: number
}

export const useRequestPokemonQuery = ({ offset }: UseRequestPokemonQueryInterface) =>
  useQuery<any>(
    ['pokemon', offset],
    () => requestPokemon({ params: { limit: 20, offset } }).then((res) => res.data))