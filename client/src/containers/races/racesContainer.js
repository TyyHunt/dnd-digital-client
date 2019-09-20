import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import '../../containers/containers.css'

class RacesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Dragonborn: 0,
      'Half-Elf': 0,
      Human: 0,
      Gnome: 0,
      'Half-Orc': 0,
      Dwarf: 0,
      Elf: 0,
      Halfling: 0,
      Tiefling: 0
    }
  }


  handleClick = event => {
    event.preventDefault();
    console.log(Number(event.target.value))
    this.setState({
      [event.target.id]: (Number(event.target.value)) + 1,
    });
  }

  render() {
    return (
      <div>
        <Container>
          <h1 className="title">Races</h1>
          <CardColumns>
            {this.props.races.map(race =>
              <Card className='shadow' style={{height: '730px', opacity: 0.85}} key={race.name}>
                <Card.Img variant="top" src={race.img_url} alt={race.name} style={{height: '500px'}}/>
                <Card.Body style={{backgroundColor: 'grey', borderRadius: '25px', margin: '5px', color: 'white', height: '220px'}}>
                  <Card.Title>{race.name}</Card.Title>
                  <Card.Text style={{color: 'white', lineHeight: 2, fontSize: '.9em'}}>
                    Race Bonus: {race.bonus}<br/>
                    Size: {race.size}<br/>
                    Speed: {race.speed}ft<br/>
                    <Button className="logoutButton" variant="primary" onClick={this.handleClick} id={race.name} value={this.state[race.name]}>Like! {this.state[race.name]}</Button>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            )}
          </CardColumns>
        </Container>
      </div>
    )
  } 
}
const mapStateToProps = state => ({
  races: state.races
});


export default connect(mapStateToProps)(RacesContainer);

