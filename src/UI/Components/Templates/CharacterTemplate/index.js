import React from 'react'
import { Box, Grid } from '@mui/material';
import ImageLink from '../../Atoms/ImageLink';
import Styles from './styles';
import Ash from '../../../Assets/Images/Character/Ash.png';
import Misty from '../../../Assets/Images/Character/Misty.png';

const CharacterTemplate = () => {
  return (
    <Styles>
      <Box className="box-character">
        <Grid className="grid-character" container spacing={2}>
          <Grid className="grid-character-image" item xs={6}>
            <ImageLink src={Ash} link="/pokemon-types" />
          </Grid>
          <Grid className="grid-character-image" item xs={6}>
            <ImageLink src={Misty} link="/pokemon-types" />
          </Grid>
        </Grid>
      </Box>
    </Styles>
  );
}

export default CharacterTemplate;