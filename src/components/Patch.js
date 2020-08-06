import React from 'react';
import Cell from './Cell';
import '../styles/Patch.css'

function Patch (props) {
  const noBorderHeight = props.height - 20; // the length of the border is 20px
  const noBorderWidth = props.width - 20; // gets the length of the veggie patch

  const x = noBorderWidth / 50; // coversion from px to m (1cm is 2px)
  const y = noBorderHeight / 50; // x and y are the how many fractions the patch have to be divided

  const cells = [];

  const renderCell = (i, j) => {
    return (
      <Cell i={i} j={j}/>
    );
  }

  for (let i = 1; i <= x ; i++) {
    for (let j = 1; j <= y; j++){
      cells.push(renderCell(i, j))
    }
  }


  return (
      <div className="frame-outer-outer" style={{height: props.height + 'px', width: props.width + 'px'}}>
          <div
            className="patch"
            style={{
              gridTemplateColumns: `repeat(${x}, 1fr)`,
              gridTemplateRows: `repeat(${y}, 1fr)`,
              width: noBorderWidth + 'px'
            }}
          >
            {cells}
          </div>
      </div>
  );
}

export default Patch;
