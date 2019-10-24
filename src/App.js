import React, { Component } from 'react';
import './App.css';
//import RacesContainer from './containers/races/racesContainer';
//import KlassesContainer from './containers/klasses/klassesContainer';
//import WeaponsContainer from './containers/weapons/weaponsContainer';
//import Navigation from './containers/navbar/navbar';
import Routes from './components/routes'

class App extends Component {

  render() {
  return (
    <div className="App">
      <Routes/>
    </div>
  )};
}

export default App;
