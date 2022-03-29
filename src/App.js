import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Character from './UI/Containers/Character';
import PokemonTypes from './UI/Containers/PokemonTypes';
import PokemonsByType from './UI/Containers/PokemonsByType';
import PokemonByName from './UI/Containers/PokemonByName';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Character} />
        <Route path="/pokemon-types" exact component={PokemonTypes} />
        <Route path="/pokemons-by-types/:type" exact component={PokemonsByType} />
        <Route path="/pokemon-by-name/:name" exact component={PokemonByName} />
      </Switch>
    </Router>
  );
}

export default App;
