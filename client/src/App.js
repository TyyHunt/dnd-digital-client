import React from 'react';
import './App.css';
import RacesContainer from './components/races/racesContainer';
import KlassesContainer from './components/klasses/klassesContainer';
import WeaponsContainer from './components/weapons/weaponsContainer';

function App() {

  return (
    <div className="App">
      <h1>DnD Digital</h1>
      <RacesContainer />
      <KlassesContainer />
      <WeaponsContainer />
    </div>
  );
}

export default App;
