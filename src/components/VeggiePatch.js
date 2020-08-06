import React, { Component } from 'react';
import Patch from './Patch';
import Plants from './Plants';
import '../styles/VeggiePatch.css';
import leaf from '../icons/leaf.png';
import corn from '../icons/corn.png';
import chilli from '../icons/chilli.png';
import rhubarb from '../icons/rhubarb.png';



class VeggiePatch extends Component {
  render() {
    return (
      <div>
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
