import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import './UI/Assets/Theme/Font.css';
import CharacterContainer from './UI/Containers/CharacterContainer';
import PokemonTypesContainer from './UI/Containers/PokemonTypesContainer';
import PokemonsByTypeContainer from './UI/Containers/PokemonsByTypeContainer';
import PokemonByNameContainer from './UI/Containers/PokemonByNameContainer';
import GlobalStyles from './UI/Assets/Theme/Global';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles/>
      <Container className="container" maxWidth="lg" disableGutters>
        <Router>
          <Switch>
            <Route path="/" exact component={CharacterContainer} />
            <Route path="/pokemon-types" exact component={PokemonTypesContainer} />
            <Route path="/pokemons-by-type/:type" exact component={PokemonsByTypeContainer} />
            <Route path="/pokemon-by-name/:name" exact component={PokemonByNameContainer} />
            <Route component={CharacterContainer} />
          </Switch>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
