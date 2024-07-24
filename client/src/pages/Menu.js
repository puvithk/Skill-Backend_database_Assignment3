import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 
import { Container, Row, Col } from 'react-bootstrap';
import './MenuList.css';

const MenuList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/menus');
        console.log(response.data)
        setItems(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <Row className='.rowCards'>
        {items.map((item) => (
          <Col key={item._id} md={4} className="mb-4 justify-content-md-center d-flex align-items-stretch">
            <Card style={{ width: '18rem' }} className="d-flex flex-column justify-content-between">
              <Card.Img width={300} height={168} variant="top" src={`data:image/jpeg;base64,${item.image}`} />
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Card.Title className="text-center">{item.name}</Card.Title>
                <Card.Text className="text-center">
                  {item.description}
                </Card.Text>
                <Button variant={item.isAvaliableTodate ? "success" : "danger"} onClick={() => {}}>
                  {item.isAvaliableTodate ? "Available" : "Unavailable"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuList;
