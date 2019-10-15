import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withRouter, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { getProfileFetch } from '../../actions/userActions';
import '../../containers/containers.css'

class IndexCharacters extends Component {

  componentWillMount = () => {
    this.props.getProfileFetch();
  }


  deleteCharacter = event => {
    event.preventDefault()
  }
  
  render() {
    console.log(this.props.user.characters);
    return (
      
      <Container>
        <hr className="characterHeaderHR"/>
          {this.props.characters.map(character =>
          <div key={character.id}>
            <div key={character.id}>
              <Row className="individualCharacter">
                <Col md={4}>
                  <Image src="https://cdn.sstatic.net/Sites/rpg/img/apple-touch-icon@2.png?v=4c03147b9ffe" alt={character.name} className="charactersIndexImg"  />
                </Col>
                <Col md={8} className="characterInfo">
                  <h1><em>{character.name}</em></h1>
                  <p>level: {character.level}</p>
                  <p>health: {character.health}</p>
                  <Row>
                    <Col md={4}>
                      <NavLink to={`/characters/${character.id}`}>
                        <Button className="loadCharacterButton" type="submit" >
                          Load Character
                        </Button>
                      </NavLink>
                    </Col>
                    <Col md={4}>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <hr className="characterIndexHR"/>
          </div>

          )}
          <div className="extraSpace"></div>
        </Container>
    )}
}



const mapStateToProps = state => ({
  user: state.user,
  characters: state.user.characters,
  races: state.races,
  klasses: state.klasses
});

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IndexCharacters));
