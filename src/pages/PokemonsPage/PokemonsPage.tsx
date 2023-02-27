import React from 'react';

import { Pokemon } from './Pokemon/Pokemon';

const PokemonsPage = () => {
  const [pokemons, setPokemons] = React.useState(Array.from({ length: 20 }));

  return (
    <div className='container'>
      <ul className='grid grid-cols-3 gap-3'>
        {pokemons.map((_data, index) => (
          <Pokemon key={index} id={index + 1} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonsPage;
