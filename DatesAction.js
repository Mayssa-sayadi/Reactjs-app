import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';

const DatesAction = ({deleteData,onViewData}) => {
  return (
    <Row className="justify-content-center mt-3">
      <Col sm={8} className="text-center d-flex justify-content-between">
        <Button
          onClick={onViewData}
          variant="primary"
          className="btn-style mx-2"
        >
          Save Appointments
        </Button>
        <Button
          onClick={deleteData}
          variant="danger"
          className="btn-style mx-2"
        >
          Delete Appointments
        </Button>
      </Col>
    </Row>
  );
}

export default DatesAction
