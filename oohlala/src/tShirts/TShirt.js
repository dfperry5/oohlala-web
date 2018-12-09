import React, { Component } from 'react';
import {Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import './TShirt.css';

class TShirt extends Component {

  componentWillMount() {
    fetch("/users")
    .then( (response) => { 
       //do something awesome that makes the world a better place
      //  console.log(response.body);
       response.json().then(function(json) {
         console.log(json);
       })
    });
    // this.setState({data : data});
  }

  render() {
    return (
      <div>
          <h1>T-Shirts!</h1> 
      </div>
    );
  }
}

export default TShirt;
