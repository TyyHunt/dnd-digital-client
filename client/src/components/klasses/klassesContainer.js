import React from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

export const KlassesContainer = ({ klasses }) =>
  <Container style={{ padding: '10px', margain: '20px'}}>
    <Carousel style={{ height: '550px' }}>
      {klasses.map(klass =>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d1ielco78gv5pf.cloudfront.net/assets/clear-495a83e08fc8e5d7569efe6339a1228ee08292fa1f2bee8e0be6532990cb3852.gif"
            alt={klass.name}
            style={{ height: '550px' }}
          />
          <Carousel.Caption >
            <h3>{klass.name}</h3>
            <p>Hit Die: {klass.hit_die}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )}
    </Carousel>
  </Container>

const mapStateToProps = ({ klasses }) => ({
  klasses,
});


export default connect(mapStateToProps)(KlassesContainer);

