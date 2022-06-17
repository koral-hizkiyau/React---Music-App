import React from 'react';
import './App.css';
import { createStore } from "redux";
import { Provider } from "react-redux"
import RootRed from './reducers/musicReducer';
import MusicStore from './comps/musicStore';
import FavoriteSongs from './comps/favoriteSongs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const myStore = createStore(RootRed)

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
      <Router>
        <div className="container">
          <h1>Music App</h1>
          <h3>Here you can listen to music you love and discover new music</h3>
        </div>
        <Switch>
        <Route exact path={`/`} component={MusicStore} />
        <Route exact path={`/:name`} component={MusicStore} />
        </Switch>

        <FavoriteSongs />
        </Router>
      </Provider>

    </div>
  );
}

export default App;
