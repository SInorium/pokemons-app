import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PokemonsPage } from './pages';

import './App.css';

const HomePage = () => <div>HomePage</div>;
const NoMatch = () => <div>No match</div>;
const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='pokemon-page' element={<PokemonsPage />} />

      <Route path='*' element={<NoMatch />} />
    </Routes>
  </div>
);

export default App;
