import React, { Component } from 'react';
import Patch from './Patch'

class VeggiePatch extends Component {
  render() {
    return (
      <div>
        <Patch depth='2' length='3' />
      </div>
    )
  }
}

export default VeggiePatch;
