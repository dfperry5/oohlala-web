import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import './TShirt.css';
import Header from '../header/Header.js';

class TShirt extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tShirts: []
    };

}   
  componentWillMount() {
    const self = this;
    fetch("/api/tShirts")
    .then( (response) => { 
       //do something awesome that makes the world a better place
      //  console.log(response.body);
       response.json().then(function(json) {
         console.log(json.TShirts);
         self.setState({tShirts: json.TShirts})
       })
    });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Row><Col className="card-padding-bottom" sm="6"><h3> T-Shirts </h3></Col></Row>
        <Row> {
            this.state.tShirts.map(function (tShirt) {
              return  (
                <Col className="card-padding-bottom" sm="6">
                  <Card body id={tShirt.id}>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardTitle>{tShirt.name}</CardTitle>
                    <CardText>{tShirt.description}</CardText>
                    <Button  tag={Link} to="/tShirts">Buy</Button>
                  </Card>
                </Col>
              )
            })
        }
        </Row>
      </div>
    )
  }

  
  }

export default TShirt;
