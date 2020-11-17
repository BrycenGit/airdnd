import React from 'react';
import Home from './Home';
import { Card, Button } from 'react-bootstrap';


const masterHomeList = [
  {city:'portland', state:'oregon',rooms:'2', baths:'1'},
  {city:'portland', state:'oregon',rooms:'3', baths:'4'},
  {city:'portland', state:'oregon',rooms:'1', baths:'8'},
]

function HomeList(){
  return(
    <React.Fragment>
      <div class="HomeHeader">
      <h3>Homes</h3>
      </div>
      <div class="HomeList">

        <div class="row">
          {masterHomeList.map((home, index) =>
            <Home city={home.city}
            state={home.state}
            rooms={home.rooms}
            baths={home.baths}/>
          )}
        </div>
      </div>
        

    </React.Fragment>
  )
}

export default HomeList;