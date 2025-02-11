import React from 'react'
import { Col, Row } from 'react-bootstrap';

const DatesList = ({ person }) => {  
  return (
    <Row className="justify-content-center">
      <Col sm={8}>
        <div className="rectangle overflow-scroll">
          {person.length ? (
            person.map((item) => {  
              return (
                <div className="d-flex border-bottom">
                  <img className="img-logo mx-2 my-2" src={item.img} alt="" />
                  <div className="mx-2 mt-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">At {item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="d-flex justify-content-center align-items-center ">
              <h5 className="text-muted mt-5">
                No appointments scheduled for today 😊.
              </h5>
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default DatesList
