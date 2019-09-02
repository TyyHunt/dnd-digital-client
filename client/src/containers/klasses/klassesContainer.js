import React from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import '../../containers/containers.css'

export const KlassesContainer = ({ klasses }) =>
  <div className='klassContainer'>
    <h1 style={{color: 'white'}}>Classes</h1>
    <Container style={{ padding: '10px', margain: '20px', opacity: 0.7}}>
      <Carousel style={{ height: '620px' }} >
        {klasses.map(klass =>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.stack.imgur.com/xDoyU.png"
              style={{ height: '600px', 'border-radius': '25px' }}  
              alt="white backdrop"
            />
            <Carousel.Caption style={{color: 'black'}} >
              <img src={klass.img_url} alt={klass.name} style={{ height: '400px' }}/>
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

