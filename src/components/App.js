import React from 'react';
import NavBar from './NavBar'
import HomeList from './HomeList'
import ExperienceList from './ExperienceList'

function App(){
  return (
    <React.Fragment>
      <NavBar />
      <HomeList />
      <ExperienceList />
    </React.Fragment>
  );
}

export default App;