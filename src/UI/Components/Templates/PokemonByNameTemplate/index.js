import React, { useEffect } from 'react'
import { Box, Grid } from '@mui/material';
import ImageLink from '../../Atoms/ImageLink';
import Styles from './styles';
import { useParams } from 'react-router-dom';
import charmander from '../../../Assets/Images/Pokemon/Charmander.png';
import cyndaquil from '../../../Assets/Images/Pokemon/Cyndaquil.png';
import torchic from '../../../Assets/Images/Pokemon/Torchic.png';
import squirtle from '../../../Assets/Images/Pokemon/Squirtle.png';
import totodile from '../../../Assets/Images/Pokemon/Totodile.png';
import mudkip from '../../../Assets/Images/Pokemon/Mudkip.png';
import bulbasaur from '../../../Assets/Images/Pokemon/Bulbasaur.png';
import chikorita from '../../../Assets/Images/Pokemon/Chikorita.png';
import treecko from '../../../Assets/Images/Pokemon/Treecko.png';
import PokemonList from '../../../../Data/PokemonList.json';

const PokemonByNameTemplate = () => {
  const { name } = useParams();

  useEffect(() => {
    if (!(PokemonList.pokemons.includes(name))) {
      window.location.href = '/';
    }
  }, [name]);

  const pokemons = {
    charmander,
    cyndaquil,
    torchic,
    squirtle,
    totodile,
    mudkip,
    bulbasaur,
    chikorita,
    treecko
  };

  return (
    <Styles>
      <Box className="box-pokemon-by-name">
        <Grid className="grid-pokemon-by-name" container spacing={2}>
          <Grid className="grid-pokemon-by-name-image" item xs={6}>
            <ImageLink src={pokemons[name]} />
          </Grid>
        </Grid>
      </Box>
    </Styles>
  );
}

export default PokemonByNameTemplate;