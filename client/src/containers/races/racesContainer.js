import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import '../../containers/containers.css'

export const RacesContainer = ({ races }) =>
  <div>
    <Container>
      <h1 className="title">Races</h1>
      <CardColumns>
        {races.map(race =>
          <Card className='shadow' style={{height: '702px', opacity: 0.85}} key={race.name}>
            <Card.Img variant="top" src={race.img_url} alt={race.name} style={{height: '500px'}}/>
            <Card.Body style={{backgroundColor: 'grey', borderRadius: '25px', margin: '5px', color: 'white', height: '190px'}}>
              <Card.Title>{race.name}</Card.Title>
              <Card.Text style={{color: 'white', lineHeight: 2, fontSize: '.9em'}}>
                Race Bonus: {race.bonus}<br/>
                Size: {race.size}<br/>
                Speed: {race.speed}ft
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

