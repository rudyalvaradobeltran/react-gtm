import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonsByType = () => {
  let { type } = useParams();

  return (
    <div>
      <div>PokemonsByType</div>
      <div>{type}</div>
    </div>
  );
}

export default PokemonsByType;