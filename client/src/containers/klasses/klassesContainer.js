import React from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import '../../containers/containers.css'

export const KlassesContainer = ({ klasses }) =>
  <div className='klassContainer'>
    <h1 className="title">Classes</h1>
    <Container style={{ padding: '10px', opacity: 0.8}}>
      <Carousel style={{ height: '575px' }} >
        {klasses.map(klass =>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.stack.imgur.com/xDoyU.png"
              style={{ height: '520px', 'border-radius': '25px' }}  
              alt="white backdrop"
            />
            <Carousel.Caption style={{color: 'black'}} >
              <img src={klass.img_url} alt={klass.name} style={{ height: '350px' }}/>
              <h3>{klass.name}</h3>
              <p>Hit Die: {klass.hit_die}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
    </Container>
  </div>

const mapStateToProps = ({ klasses }) => ({
  klasses,
});


export default connect(mapStateToProps)(KlassesContainer);

