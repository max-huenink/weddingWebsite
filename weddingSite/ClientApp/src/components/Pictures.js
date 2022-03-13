import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Pictures() {
  return (
    <>
      <h1>Pictures of our Engagement!</h1>
      <Row xs={1} md={2} lg={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="http://placekitten.com/457/200" />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="http://placekitten.com/457/200" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
