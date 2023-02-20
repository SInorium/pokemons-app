import React, { useEffect } from 'react';
import { isError, useQuery } from 'react-query';

import { useRequestPokemonQuery } from '../../utils/api/hooks';

type Response = {
  name: string;
  url: string;
};

const PokemonsPage = () => {
  const [offset, setOffset] = React.useState(0);
  const { data, isLoading } = useRequestPokemonQuery({ offset });
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <button
        className='rounded-sm bg-slate-400 p-2 mb-3'
        onClick={() => setOffset((prev) => prev + 10)}
      >
        offset +10
      </button>
      <ul className='flex-col items-center justify-center flex'>
        {data.results?.map((item: Response) => (
          <li className='rounded-md bg-green-200 mb-2 w-max' key={item.url}>
            <p>{item.name}</p>
            <p>{item.url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonsPage;
