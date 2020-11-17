import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from 'react-bootstrap';


function Home(props){
  return (
    <React.Fragment>
            <div class='col'>
            <Card class='HomeCard' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="public/logo512.png" />
              <Card.Body>
                <Card.Title>Check out this jointzzzz</Card.Title>
                <Card.Text>
                  <p>City: {props.city}</p>
                  <p>State: {props.state}</p>
                  <p>Rooms: {props.rooms}</p>
                  <p>Baths: {props.baths}</p>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </div>
    </React.Fragment>
  );
}

Home.propTypes = {
  city: PropTypes.string,
  state: PropTypes.string,
  type: PropTypes.string,
  occupancy: PropTypes.string,
  rooms: PropTypes.string,
  baths: PropTypes.string,
}

export default Home;