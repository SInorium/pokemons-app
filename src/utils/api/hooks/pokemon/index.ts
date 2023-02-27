import { useQuery } from "react-query";

import { requestPokemon } from "../../requests";

interface UseRequestPokemonQueryInterface {
  id: number
}

export const useQueryPokemonQuery = ({ id }: UseRequestPokemonQueryInterface) =>
  useQuery<unknown>(
    ['pokemon', id], () => requestPokemon({ params: { id } }),
  )