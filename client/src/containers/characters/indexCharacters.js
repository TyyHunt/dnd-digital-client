import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {withRouter} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import '../../containers/containers.css'

class IndexCharacters extends Component {

  loadCharacter = event => {
    event.preventDefault()
  }

  deleteCharacter = event => {
    event.preventDefault()
  }
  
  render() {
    
    return (
      <Container>
          {this.props.user.characters.map(character =>
          <div>
            <div  key={character.name}>
              <Row className="individualCharacter">
                <Col md={4}>
                  <Image src={this.props.races[0].img_url} alt={this.props.races[0].name} className="charactersRaceImg" thumbnail />
                  <Image src={this.props.klasses[0].img_url} alt={this.props.klasses[0].name} className="charactersKlassImg" roundedCircle />
                </Col>
                <Col md={8} className="characterInfo">
                  <h3>{character.name}</h3>
                  <p>level: {character.level}</p>
                  <p>health: {character.health}</p>
                  <Row>
                    <Col md={4}>
                      <Button className="loadCharacterButton" type="submit" onClick={this.loadCharacter}>
                        Load Character
                      </Button>
                    </Col>
                    <Col md={4}>
                      <Button className="deleteCharacterButton" type="submit" onClick={this.deleteCharacter}>
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
          )}
        </Container>
    )}
}



const mapStateToProps = state => ({
  user: state.user,
  characters: state.user.characters,
  races: state.races,
  klasses: state.klasses
});

export default withRouter(connect(mapStateToProps)(IndexCharacters));
