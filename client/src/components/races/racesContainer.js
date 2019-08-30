import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns'


export const RacesContainer = ({ races }) =>
  <Container style={{backgroundColor: 'black', padding: '5px'}}>
    <h1>Races</h1>
    <CardColumns>
      {races.map(race =>
        <Card>
          <Card.Img variant="top" src={race.img_url} alt={race.name} />
          <Card.Body>
            <Card.Title>{race.name}</Card.Title>
            <Card.Text>
              <p>Race Bonus: {race.bonus}</p>
              <p>Size: {race.size}</p>
              <p>Speed: {race.speed}ft</p>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </CardColumns>
  </Container>;

const mapStateToProps = ({ races }) => ({
  races,
});


export default connect(mapStateToProps)(RacesContainer);

