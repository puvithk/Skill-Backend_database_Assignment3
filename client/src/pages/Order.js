import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Container, Row, Col, Table } from 'react-bootstrap';

const OrderList = () => {
  const [isOn, setIsOn] = useState(true);
  const handleToggle = () => setIsOn(!isOn);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders');
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
            <Card style={{ width: '18rem', height: '100%' }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.orderID}</Card.Title>
                <Card.Text>{item.orderDate}</Card.Text>
                <h5>User Name: {item.userId.name}</h5>
                <Table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Order List</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.menuItems.map((itemOne, index) => (
                      <tr key={itemOne._id}>
                        <td>{index + 1}</td>
                        <td>{itemOne.item ? itemOne.item.name : "NA"}</td>
                        <td>{itemOne.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className="mt-auto">
                  <Button
                    className="mr-2 mb-2 "
                    variant={
                      item.orderStatus === 'Completed' ? 'success' :
                      item.orderStatus === 'Pending' ? 'warning' :
                      item.orderStatus === 'canceled' ? 'danger' :
                      'secondary'
                    }
                    onClick={handleToggle}
                  >
                    {item.orderStatus === 'Completed' ? 'Completed' :
                    item.orderStatus === 'Pending' ? 'Pending' :
                    item.orderStatus === 'canceled' ? 'Cancelled' :
                    'Unknown Status'}
                  </Button>
                  <Button
                    className="ml mb-2"
                    variant="outline-primary"
                    onClick={handleToggle}
                  >
                    {item.orderStatus === 'Completed' ? 'Delete' :
                    item.orderStatus === 'Pending' ? 'Cancel' : 'Delete'}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OrderList;
