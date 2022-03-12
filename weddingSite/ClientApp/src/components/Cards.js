import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Cards() {
  return (
    <Row xs={1} md={2} lg={2} className="g-4">
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160px" />
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>Body</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160px" />
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>Body</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160px" />
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>Body</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160px" />
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>Body</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
