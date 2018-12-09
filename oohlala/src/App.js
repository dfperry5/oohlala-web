import React, { Component } from 'react';
import {Jumbotron, Button} from 'reactstrap';
import './App.css';
import Header from './header/Header';
import Home from './home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container-fluid">
          <Home></Home>
        </div>
      </div>
    );
  }
}

export default App;
