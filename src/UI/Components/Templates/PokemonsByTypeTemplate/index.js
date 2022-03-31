import React, { useEffect } from 'react'
import { Box, Grid } from '@mui/material';
import ImageLink from '../../Atoms/ImageLink';
import Styles from './styles';
import { useParams } from 'react-router-dom';
import Pokemon from '../../../../Data/Pokemon.json';
import charmander from '../../../Assets/Images/Pokemon/Charmander.png';
import cyndaquil from '../../../Assets/Images/Pokemon/Cyndaquil.png';
import torchic from '../../../Assets/Images/Pokemon/Torchic.png';
import squirtle from '../../../Assets/Images/Pokemon/Squirtle.png';
import totodile from '../../../Assets/Images/Pokemon/Totodile.png';
import mudkip from '../../../Assets/Images/Pokemon/Mudkip.png';
import bulbasaur from '../../../Assets/Images/Pokemon/Bulbasaur.png';
import chikorita from '../../../Assets/Images/Pokemon/Chikorita.png';
import treecko from '../../../Assets/Images/Pokemon/Treecko.png';
import TypeList from '../../../../Data/TypeList.json';

const PokemonsByTypeTemplate = () => {
  const { type } = useParams();

  useEffect(() => {
    if (!(TypeList.types.includes(type))) {
      window.location.href = '/';
    }
  }, [type]);

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
      <Box className="box-pokemons-by-type">
        <Grid className="grid-pokemons-by-type" container spacing={2}>
          {Pokemon.pokemon.map((pType) => {
            return(
              type in pType &&
                pType[type].map((pokemon) => {
                  return(
                    <Grid key={pokemon.id} className="grid-pokemons-by-type-image" item xs={4}>
                      <ImageLink src={pokemons[pokemon.name]} link={`/pokemon-by-name/${pokemon.name}`}/>
                    </Grid>
                  )
                })
              )
          })}
        </Grid>
      </Box>
    </Styles>
  );
}

export default PokemonsByTypeTemplate;