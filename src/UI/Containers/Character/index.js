import React from 'react'
import { Box, Grid } from '@mui/material';
import Styles from './styles';

const Character = () => {
  return (
    <Styles>
      <Box className="box-character">
        <Grid className="grid-character" container spacing={2}>
          <Grid item xs={6}>
            xs=8
          </Grid>
          <Grid item xs={6}>
            xs=4
          </Grid>
        </Grid>
      </Box>
    </Styles>
  );
}

export default Character;