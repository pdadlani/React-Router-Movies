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
      <SavedList list={savedList} setSavedList = {addToSavedList}/>
      <Switch>
        <Route path="/" exact component={MovieList} />
        {/* <Route path="/movies/:id" component={Movie} /> */}
        <Route 
          path="/movies/:id" 
          render={(props) => (
            <Movie 
              {...props}
              addToSavedList = {addToSavedList}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
