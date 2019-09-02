import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import '../../containers/containers.css'

export const RacesContainer = ({ races }) =>
  <div >
    <Container style={{ padding: '10px'}}>
      <h1 className="title">Races</h1>
      <CardColumns>
        {races.map(race =>
          <Card className='shadow' style={{height: '700px'}}>
            <Card.Img variant="top" src={race.img_url} alt={race.name} style={{height: '500px'}}/>
            <Card.Body style={{backgroundColor: 'grey', 'border-radius': '25px'}}>
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

