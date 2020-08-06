import React, { Component } from 'react';
import Patch from './Patch';
import Plants from './Plants';
import '../styles/VeggiePatch.css';



class VeggiePatch extends Component {
  render() {
    return (
      <div>
        <Plants />
      <Patch height='220' width='220' />
      </div>
    )
  }
}

export default VeggiePatch;
