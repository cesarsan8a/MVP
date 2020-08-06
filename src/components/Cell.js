import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/items'


function Cell (props) {

  const [typeOfPlant, setTypeOfPlant] = useState(null);

  // Dnd drop specs
  const [{ isOver }, drop] = useDrop ({
    accept: ItemTypes.PLANT,
    drop: (item) => setTypeOfPlant(item.plant),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  })


  const i = props.i;
  const j = props.j;

  return (
    <div
      ref={drop}
      className="cell"
      style={{
        gridArea: i / j / i + 1 / j + 1,
        backgroundColor: isOver ? 'red' : '#569d36'
      }}
    >
      <img src={typeOfPlant} className='cell-plant'/>
    </div>
  );
}

export default Cell;
