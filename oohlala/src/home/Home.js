import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div>
        <Row>
        <Col sm="6">
          <Card body>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardTitle>T-Shirts</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button  tag={Link} to="/tShirts">Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardTitle>Signs</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <Card body>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardTitle>Party Supplies</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardTitle>Knicks & Knacks</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
      </div>
    );
  }
}

export default Home;
