import React from 'react'
import { Col, Row } from 'react-bootstrap';

// DatesCount
const DatesCount = ({ person }) => { 
  return (
    <Row className="justify-content-center">
      <Col className="p-4 text-center">
        <h4>You have {person.length} Appointments today!</h4> 
      </Col>
    </Row>
  );
}


export default DatesCount
