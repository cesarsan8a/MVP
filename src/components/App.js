import React from 'react';
import VeggiePatch from './VeggiePatch';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <VeggiePatch />
      </DndProvider>
    </div>
  );
}

export default App;
