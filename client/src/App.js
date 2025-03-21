import React, { useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";

import SavedList from './Movies/SavedList.js';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movies/:id" component={Movie} />
      </Switch>
    </div>
  );
};

export default App;
