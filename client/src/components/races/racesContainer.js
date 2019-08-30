import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns'


export const RacesContainer = ({ races }) =>
  <div style={{backgroundColor: 'olive'}}>
    <Container style={{ padding: '10px'}}>
      <h1>Races</h1>
      <CardColumns >
        {races.map(race =>
          <Card style={{height: '550px'}}>
            <Card.Img variant="top" src={race.img_url} alt={race.name} style={{height: '350px'}}/>
            <Card.Body style={{backgroundColor: 'grey'}}>
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
    </Container>
  </div>;

const mapStateToProps = ({ races }) => ({
  races,
});


export default connect(mapStateToProps)(RacesContainer);

