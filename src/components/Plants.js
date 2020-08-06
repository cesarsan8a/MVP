import React from 'react';
import leaf from '../icons/leaf.png';

import { ItemTypes } from '../utils/items';
import { useDrag } from 'react-dnd';

function Plants () {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.PLANT,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div className="plant-container" ref={drag} style={{opacity: isDragging ? '0.5' : '1'}}>
      <img src={leaf} className="plant-icon" />
    </div>
  );
}

export default Plants;
