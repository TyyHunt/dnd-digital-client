import React from 'react';
import { connect } from 'react-redux';
import { Table, Container } from 'react-bootstrap';

export const WeaponsContainer = ({ weapons }) =>
  <div style={{backgroundColor: 'olive'}}>
    <Container style={{ padding: '10px'}}>
      <h1>Weapons</h1>
      <Table striped bordered hover variant="dark" style={{backgroundColor: 'grey'}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Weapon</th>
            <th>Damage</th>
            <th>Damage Type</th>
          </tr>
        </thead>
        <tbody>
          {weapons.map(weapon =>
          <tr>
            <td>{weapon.id}</td>
            <td>{weapon.name}</td>
            <td>{weapon.damage}</td>
            <td>{weapon.dmg_type}</td>
          </tr>
          )}
        </tbody>
      </Table>
    </Container>
  </div>;

const mapStateToProps = ({ weapons }) => ({
  weapons,
});


export default connect(mapStateToProps)(WeaponsContainer);

