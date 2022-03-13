import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Cards.css';

export default function Cards() {
  return (
    <Row xs={1} md={2} lg={2} className="g-4">
      <Col>
        <a href="/how-we-met" className="cardLink">
          <Card>
            <Card.Img variant="top" src="http://placekitten.com/457/160" />
            <Card.Body>
              <Card.Title>How we met</Card.Title>
            </Card.Body>
          </Card>
        </a>
      </Col>
      <Col>
        <a href="/how-we-got-engaged" className="cardLink">
          <Card>
            <Card.Img variant="top" src="http://placekitten.com/457/160" />
            <Card.Body>
              <Card.Title>How we got engaged</Card.Title>
            </Card.Body>
          </Card>
        </a>
      </Col>
      <Col>
        <a href="/pictures" className="cardLink">
          <Card>
            <Card.Img variant="top" src="http://placekitten.com/457/160" />
            <Card.Body>
              <Card.Title>Engagement Pictures</Card.Title>
            </Card.Body>
          </Card>
        </a>
      </Col>
      <Col>
        <a href="/registry" className="cardLink">
          <Card>
            <Card.Img variant="top" src="http://placekitten.com/457/160" />
            <Card.Body>
              <Card.Title>Registry</Card.Title>
            </Card.Body>
          </Card>
        </a>
      </Col>
      <Col>
        <a href="/wedding-details" className="cardLink">
          <Card>
            <Card.Img variant="top" src="http://placekitten.com/457/160" />
            <Card.Body>
              <Card.Title>Wedding Details</Card.Title>
            </Card.Body>
          </Card>
        </a>
      </Col>
    </Row>
  );
}
