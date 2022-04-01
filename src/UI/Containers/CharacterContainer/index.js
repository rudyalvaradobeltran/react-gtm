import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import CharacterTemplate from '../../Components/Templates/CharacterTemplate';
import Styles from './styles';
import { createDataLayer } from '../../../Utils/TagManager';

const CharacterContainer = () => {
  useEffect(() => {
    createDataLayer('Init', '/', 'none');
  }, []);

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