import { AxiosRequestConfig } from "axios"

import { api } from "../../instance"

interface RequestPokemonInterface {
  params: { limit: number; offset: number; }
  config?: AxiosRequestConfig
}

export const requestPokemon = ({ config, params }: RequestPokemonInterface) =>
  api.get('pokemon', { ...config, params })
