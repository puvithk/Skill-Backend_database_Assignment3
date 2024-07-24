import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

import Nav from 'react-bootstrap/Nav';
const OffCanvas = (props) => {
 
  const [show, setShow] = useState(false);

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
  
      <Button variant="primary" className="m-3" onClick={handleShow}>
      <div className='Ham'></div>
      <div className='Ham'></div>
      <div className='Ham'></div>
      </Button>

    
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Options</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/menu">Menu</Nav.Link>
      <Nav.Link href ="/orders">Orders</Nav.Link>
      <Nav.Link href="/Users">
        Users
      </Nav.Link>
    </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
