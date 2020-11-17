import React from 'react';
import Experience from './Experience';
import { Card, Button } from 'react-bootstrap';


const masterExperienceList = [
  {name:'Go treasure hunting', description:'Meet real life pirates and join them on a search for booty!'},
  {name:'Learn to operate a crane', description:'Work on an actual construction site and help build a skycraper!'},
  {name:'Sleep with the fishes', description:'And get fitted with your very own custom cinder block shoes!'},
]

function ExperienceList(){
  return(
    <React.Fragment>
      <div class="ExperienceHeader">
        <h1>Experiences</h1> 
        <p>Check 'em out</p>   
      </div>
      <div class="ExperienceList">
     
        <div class="row">
          {masterExperienceList.map((Experience, index) =>
            <div class='col'>
            <Card class='ExperienceCard' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="public/logo512.png" />
              <Card.Body>
                <Card.Title>{Experience.name}</Card.Title>
                <Card.Text>
                  <p>{Experience.description}</p>
                </Card.Text>
                <Button variant="primary">Book it!</Button>
              </Card.Body>
            </Card>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default ExperienceList;