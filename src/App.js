import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Character from './UI/Containers/Character';
import PokemonTypes from './UI/Containers/PokemonTypes';
import PokemonsByType from './UI/Containers/PokemonsByType';
import PokemonByName from './UI/Containers/PokemonByName';
import GlobalStyles from './UI/Assets/Theme';
import Container from '@mui/material/Container';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles/>
      <Container className="container" maxWidth="lg" disableGutters>
        <Router>
          <Switch>
            <Route path="/" exact component={Character} />
            <Route path="/pokemon-types" exact component={PokemonTypes} />
            <Route path="/pokemons-by-type/:type" exact component={PokemonsByType} />
            <Route path="/pokemon-by-name/:name" exact component={PokemonByName} />
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
