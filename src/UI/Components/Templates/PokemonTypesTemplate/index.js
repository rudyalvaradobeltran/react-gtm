import React from 'react'
import { Box, Grid } from '@mui/material';
import ImageLink from '../../Atoms/ImageLink';
import Styles from './styles';
import Fire from '../../../Assets/Images/Types/Fire.svg';
import Water from '../../../Assets/Images/Types/Water.svg';
import Grass from '../../../Assets/Images/Types/Grass.svg';

const PokemonTypesTemplate = () => {
  return (
    <Styles>
      <Box className="box-pokemon-types">
        <Grid className="grid-pokemon-types" container spacing={2}>
          <Grid className="grid-pokemon-types-image" item xs={4}>
            <ImageLink src={Fire} link="/pokemons-by-type/fire" />
          </Grid>
          <Grid className="grid-pokemon-types-image" item xs={4}>
            <ImageLink src={Water} link="/pokemons-by-type/water" />
          </Grid>
          <Grid className="grid-pokemon-types-image" item xs={4}>
            <ImageLink src={Grass} link="/pokemons-by-type/grass" />
          </Grid>
        </Grid>
      </Box>
    </Styles>
  );
}

export default PokemonTypesTemplate;