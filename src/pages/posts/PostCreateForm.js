import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import boarderStyles from "../../styles/Boarders.module.css";

function PostCreateForm() {

  const [errors, setErrors] = useState({});


  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          className={boarderStyles.Input}
          type="text"
          name="title"
          value={""}
          onChange={""}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          className={boarderStyles.Input}
          as="textarea"
          rows={4}
          name="content"
          value={""}
          onChange={""}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Beer Type</Form.Label>
        <Form.Control
          className={boarderStyles.Input}
          type="text"
          name="type"
          value={""}
          onChange={""}
        />
      </Form.Group>
      
        <div>
            <Button
                className={`mx-2 my-3 ${boarderStyles.NormalBoarder}`}
                onClick={() => { }}
            >
                cancel
            </Button>
            <Button className={`mx-2 my-3 ${boarderStyles.NormalBoarder}`} type="submit">
                create
            </Button>
        </div>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={` ${styles.Container} d-flex flex-column justify-content-center align-items-center`}
          >
            <Form.Group className="text-center">
              
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
            </Form.Group>
            <Form.Group className="text-center">
        <Form.Label>Rating</Form.Label>
        <Form.Control
            className={boarderStyles.Input}
            type="text"
            name="rating"
            value={""}
            onChange={""}
        />
    </Form.Group>

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className="">{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;