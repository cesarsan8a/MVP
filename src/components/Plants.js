import React from 'react';

import { ItemTypes } from '../utils/items';
import { useDrag } from 'react-dnd';

function Plants (props) {

  //Dnd drag specs
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.PLANT, // setting the item type
      plant: props.plant, // additional props
    },
    collect: monitor => ({ // collector function, what happens when it's being dragged
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div className="plant-container" ref={drag} style={{opacity: isDragging ? '0.5' : '1'}}>
      <img src={props.plant} className="plant-icon" />
    </div>
  );
}

export default Plants;
