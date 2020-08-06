import React from 'react';
import Square from './Square';
import '../styles/Patch.css'
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/items'

function Patch (props) {
  const noBorderHeight = props.height - 20; // the length of the border is 20px
  const noBorderWidth = props.width - 20; // gets the length of the veggie patch

  const x = noBorderWidth / 50; // coversion from px to m (1cm is 2px)
  const y = noBorderHeight / 50; // x and y are the how many fractions the patch have to be divided

  // Dnd drop specs
  const [{ isOver }, drop] = useDrop ({
    accept: ItemTypes.PLANT,
    drop: (item, monitor) => console.log(item, monitor),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  })

  const squares = [];

  const renderSquare = (i, j, num) => {
    return (
      <div
        key={num}
        style={{
          gridArea: i / j / i + 1 / j + 1
        }}
        ref={drop}
      >
        {`item ${ num }`}
      </div>
    );
  }

  let num = 1;
  for (let i = 1; i <= x ; i++) {
    for (let j = 1; j <= y; j++){
      squares.push(renderSquare(i, j, num, drop))
      num++
    }
  }


  return (
    <div className="frame-outer-outer" style={{height: props.height + 'px', width: props.width + 'px'}}>
      {/* <div className="frame-outer"> */}
        <div
          className="patch"
          style={{
            gridTemplateColumns: `repeat(${x}, 1fr)`,
            gridTemplateRows: `repeat(${y}, 1fr)`,
            width: noBorderWidth + 'px'
          }}
        >
          {squares}
        </div>
      {/* </div> */}
    </div>
  );
}

export default Patch;
