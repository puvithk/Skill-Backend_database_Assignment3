import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 
import { Container, Row, Col } from 'react-bootstrap';
const MenuList = () => {
  // State to manage the toggle status
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the button state
  const handleToggle = () => setIsOn(!isOn);
  
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
      <Row>
        {items.map((item) => (
          <Col key={item._id} md={4} className="mb-4">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Button variant={item.isAvaliableTodate ? "success" : "danger"} onClick={handleToggle}>
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
