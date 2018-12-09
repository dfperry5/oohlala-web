import React, { Component } from 'react';
import {Jumbotron, Button} from 'reactstrap';
import './App.css';
import Home from './home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Ooh La La Vinyl</h1>
          <p>T-shirts, signs, bachelorette party necessities & more!</p>
        </Jumbotron>
        <div className="container-fluid">
          <Home></Home>
        </div>
      </div>
    );
  }
}

export default App;
