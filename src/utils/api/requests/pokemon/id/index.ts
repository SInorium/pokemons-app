import { AxiosRequestConfig } from "axios"

import { api } from "../../../instance"

interface RequestPokemonInterface {
  params: { id: number }
  config?: AxiosRequestConfig
}

export const requestPokemon = ({ config, params }: RequestPokemonInterface) =>
  api.get(`pokemon/${params.id}`, { ...config }) 
