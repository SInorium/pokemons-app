import React from 'react';

import { useQueryPokemonQuery } from '../../../utils/api/hooks/pokemon/index';

interface PokemonProps {
  id: number;
}

export const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, status } = useQueryPokemonQuery({ id });

  if (status === 'error') return <div>Error</div>;

  if (status === 'loading') return <div>loading...</div>;

  const pokemonData = data.data;

  return (
    <li className='flex justify-center shadow p-2 rounded items-center'>
      <img src={pokemonData.sprites.front_shiny} alt='' />
      <h2 className='text-left w-full capitalize font-semibold text-sm'>{pokemonData.name}</h2>
    </li>
  );
};
