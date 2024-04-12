import React from "react";

import { Col, Row } from "react-bootstrap";

function PostsPage() {
  
  return (
    <Row className="d-flex justify-content-center">
      <Col className= "mx-4 mx-md-5 my-4 lg={7}">
        <p>List of posts here</p>
      </Col>
    </Row>
  );
}

export default PostsPage;