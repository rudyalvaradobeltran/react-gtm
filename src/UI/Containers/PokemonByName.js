import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonByName = () => {
  let { name } = useParams();

  return (
    <div>
      <div>PokemonByName</div>
      <div>{name}</div>
    </div>
  );
}

export default PokemonByName;