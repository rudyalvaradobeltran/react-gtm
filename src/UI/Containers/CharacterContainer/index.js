import React from 'react';
import { Typography } from '@mui/material';
import CharacterTemplate from '../../Components/Templates/CharacterTemplate';
import Styles from './styles';

const CharacterContainer = () => {
  return (
    <Styles>
      <Typography className="title" variant="h4" gutterBottom component="div" fontFamily="Flexo">
        Select your character
      </Typography>
      <CharacterTemplate/>
    </Styles>
  );
}

export default CharacterContainer;