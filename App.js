/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Login from './components/Login.js';
import Details from './components/Details.js';
import Movies from './components/Movies.js';
import Books from './components/Books.js';
import Games from './components/Games.js';
import Series from './components/Series.js';
import SignIn from './components/SignIn.js';
import AddMovies from './components/AddMovie.js';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Login" component={Login} title="Login" initial={true} />
          <Scene key="Details" component={Details} title="Details" />
          <Scene key="Movies" component={Movies} title="Movies" />
          <Scene key="Books" component={Books} title="Books" />
          <Scene key="Games" component={Games} title="Games" />
          <Scene key="Series" component={Series} title="Series" />
          <Scene key="SignIn" component={SignIn} title="SignIn" />
          <Scene key="AddMovies" component={AddMovies} title="AddMovies" />
        </Scene>
      </Router>
    );
  }
}
