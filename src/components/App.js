import React from 'react';
import VeggiePatch from './VeggiePatch';
import '../styles/App.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../icons/rural.svg'

function App() {
  return (
    <div className='container'>

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          MVP - My Veggie Patch
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>On Season</Nav.Link>
          <Nav.Link>Vegetables and Herbs</Nav.Link>
          <Nav.Link>Veggie Patch Planer</Nav.Link>
        </Nav>
      </Navbar>

      <br/>

      <div className="body">
        <DndProvider backend={HTML5Backend}>
          <VeggiePatch />
        </DndProvider>
      </div>

      <br/>

      <footer>MVP - 2020©</footer>

    </div>
  );
}

export default App;
