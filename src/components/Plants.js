import React from 'react';


import { ItemTypes } from '../utils/items';
import { useDrag } from 'react-dnd';

function Plants (props) {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.PLANT,
      plant: props.plant,
    },
    collect: monitor => ({
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
