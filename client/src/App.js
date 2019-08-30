import React from 'react';
import './App.css';
import RacesContainer from './containers/races/racesContainer';
import KlassesContainer from './containers/klasses/klassesContainer';
import WeaponsContainer from './containers/weapons/weaponsContainer';
import Navigation from './containers/navbar/navbar';

function App() {

  return (
    <div className="App">
      <Navigation />
      <RacesContainer />
      <KlassesContainer />
      <WeaponsContainer />
    </div>
  );
}

export default App;
