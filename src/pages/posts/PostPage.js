import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function PostPage() {
  // Add your logic here


  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Post component</p>
        <Container className="">
          Comments
        </Container>
      </Col>
    </Row>
  );
}

export default PostPage;