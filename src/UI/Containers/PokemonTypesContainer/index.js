import React from 'react';
import { Typography } from '@mui/material';
import PokemonTypesTemplate from '../../Components/Templates/PokemonTypesTemplate';
import Styles from './styles';

const PokemonTypesContainer = () => {
  return (
    <Styles>
      <Typography className="title" variant="h4" gutterBottom component="div" fontFamily="Flexo">
        Select a Pokemon type
      </Typography>
      <PokemonTypesTemplate/>
    </Styles>
  );
}

export default PokemonTypesContainer;