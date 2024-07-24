import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 
import { Container, Row, Col, Table } from 'react-bootstrap';
const OrderList=()=>{
    const [isOn , setIsOn] = useState(true)
    const handleToggle = () => setIsOn(!isOn);
  const [count , setCount] = useState(0)
    const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/orders');
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
  
   return( <Container>
    <Row>
      {items.map((item) => (
     
        <Col key={item._id} md={4} className="mb-4">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{item.orderID}</Card.Title>
              <Card.Text>
                {item.orderDate}
              </Card.Text>
              {
                <h5>User Name : {item.userId.name}</h5>
              }
              <Table>
                <thead>
                  <tr>
                  <th>No</th>
                  <th>OrderList</th>
                  <th>Quntity</th></tr>
                </thead>
                <tbody>
                  {item.menuItems.map((itemOne) => (
                    <tr key={itemOne._id}>
                      <td>{count}</td>
                      <td>{itemOne.name}</td>
                      <td>{itemOne.quantity}</td>
                      { setCount(count+1) }
                      </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant={item.isAvaliableTodate ? "success" : "danger"} onClick={handleToggle}>
              {item.isAvaliableTodate ? "Available" : "Unavailable"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>)
}
export default OrderList;