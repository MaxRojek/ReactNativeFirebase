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
import AddSeries from './components/AddSeries.js';
import NewGame from './components/AddNewGame.js';
import NewBook from './components/AddNewBook.js';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);
YellowBox.ignoreWarnings(['Animated: `useNativeDriver` was not specified.']);
YellowBox.ignoreWarnings([
  'Animated.event now requires a second argument for options',
]);
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="Login"
            component={Login}
            navigationBarStyle={{backgroundColor: '#3c6a89'}}
            title="Login"
            initial={true}
          />
          <Scene
            key="SignIn"
            navigationBarStyle={{backgroundColor: '#3c6a89'}}
            component={SignIn}
            title="SignIn"
          />
          <Scene
            key="Details"
            hideNavBar={true}
            component={Details}
            title="Details"
          />
          <Scene
            key="Movies"
            navigationBarStyle={{backgroundColor: '#3c6a89'}}
            component={Movies}
            title="Movies"
          />
          <Scene
            key="Books"
            navigationBarStyle={{backgroundColor: '#3c6a89'}}
            component={Books}
            title="Books"
          />
          <Scene
            key="Games"
            navigationBarStyle={{backgroundColor: '#3c6a89'}}
            component={Games}
            title="Games"
          />
          <Scene
            key="Series"
            navigationBarStyle={{backgroundColor: '#3c6a89'}}
            component={Series}
            title="Series"
          />

          <Scene
            key="AddMovies"
            navigationBarStyle={{backgroundColor: '#3c6a89'}}
            component={AddMovies}
            title="AddMovies"
          />
          <Scene
            key="AddSeries"
            navigationBarStyle={{backgroundColor: '#3c6a89'}}
            component={AddSeries}
            title="AddSeries"
          />
       
        <Scene
            key="NewGame"
            navigationBarStyle={{backgroundColor: '#3c6a89'}}
            component={NewGame}
            title="Add Game"
          />
          <Scene
            key="NewBook"
            navigationBarStyle={{backgroundColor: '#3c6a89'}}
            component={NewBook}
            title="Add Book"
          />
        </Scene>
      </Router>
    );
  }
}
