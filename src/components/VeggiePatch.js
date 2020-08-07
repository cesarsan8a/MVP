import React, { Component } from 'react';
import Patch from './Patch';
import Plants from './Plants';
import '../styles/VeggiePatch.css';
import Form from 'react-bootstrap/Form'

// plant icons
import leaf from '../icons/leaf.png';
import corn from '../icons/corn.png';
import chilli from '../icons/chilli.png';
import rhubarb from '../icons/rhubarb.png';



class VeggiePatch extends Component {
  render() {
    return (
      <div className="veggie-patch-container">
        <div className="form-container">
          <h3>My Veggies</h3>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Month</Form.Label>
              <Form.Control as="select">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
        <div className='all-plants-container'>
          <Plants plant={chilli}/>
          <Plants plant={rhubarb}/>
          <Plants plant={leaf}/>
          <Plants plant={corn}/>
        </div>
        <Patch height='220' width='220' />
      </div>
    );
  }
}

export default VeggiePatch;
