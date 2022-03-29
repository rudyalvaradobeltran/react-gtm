import React from 'react';
import { Typography } from '@mui/material';
import PokemonsByTypeTemplate from '../../Components/Templates/PokemonsByTypeTemplate';
import Styles from './styles';

const PokemonsByTypeContainer = () => {
  return (
    <Styles>
      <Typography className="title" variant="h4" gutterBottom component="div" fontFamily="Flexo">
        Select a Pokemon
      </Typography>
      <PokemonsByTypeTemplate/>
    </Styles>
  );
}

export default PokemonsByTypeContainer;