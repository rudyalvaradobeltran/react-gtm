import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import PokemonTypesTemplate from '../../Components/Templates/PokemonTypesTemplate';
import Styles from './styles';
import { createDataLayer } from '../../../Utils/TagManager';
import { encryptStorage } from '../../../Utils/EncryptStorage';

const PokemonTypesContainer = () => {
  useEffect(() => {
    createDataLayer('Pokemon Types', '/pokemon-types', encryptStorage.getItem('c'));
  }, []);

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