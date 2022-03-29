import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import PokemonByNameTemplate from '../../Components/Templates/PokemonByNameTemplate';
import Styles from './styles';
import { capitalize } from '../../../Utils';

const PokemonByNameContainer = () => {
  const { name } = useParams();

  return (
    <Styles>
      <Typography className="title" variant="h4" gutterBottom component="div" fontFamily="Flexo">
        {capitalize(name)}
      </Typography>
      <PokemonByNameTemplate name={name} />
    </Styles>
  );
}

export default PokemonByNameContainer;