import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container fluid className="bg-dark text-white py-5 text-center">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1>Welcome to Sahyadri Canteen</h1>
            <p>Your favorite place to enjoy delicious meals and snacks.</p>
            <Button variant="light" href="/menu">Explore Our Menu</Button>
          </Col>
        </Row>
      </Container>

     
    </>
  );
};

export default Home;
