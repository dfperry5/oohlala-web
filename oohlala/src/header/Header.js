import React, { Component } from 'react';
import {Jumbotron, Button} from 'reactstrap';
import './Header.css';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Ooh La La Vinyl</h1>
          <p>T-shirts, signs, bachelorette party necessities & more!</p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
