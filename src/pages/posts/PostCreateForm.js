import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";

import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import boarderStyles from "../../styles/Boarders.module.css";

function PostCreateForm() {

  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    type: "",
  });
  const { title, content, type, image } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };


  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          className={boarderStyles.Input}
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          className={boarderStyles.TextArea}
          as="textarea"
          rows={4}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Beer Type</Form.Label>
        <Form.Control
          className={boarderStyles.Input}
          type="text"
          name="type"
          value={type}
          onChange={handleChange}
        />
      </Form.Group>
      
        <div>
            <Button
                className={`mx-2 my-3 ${boarderStyles.NormalBoarder}`}
                onClick={() => { }}
            >
                cancel
            </Button>
            <Button className={`mx-3 my-3 ${boarderStyles.NormalBoarder}`} type="submit">
                create
            </Button>
        </div>
    </div>
  );

  return (
    <Form>
      <Row className="px-2">
        <Col className="py-2 p-0 p-md-2" md={7}>
          <Container
            className={` ${styles.Container} d-flex flex-column justify-content-center align-items-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={boarderStyles.NormalBoarder}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                className="d-none"
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
              />
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
        <Col md={5} className="d-none d-md-block p-0 p-md-2">
          <Container className="">{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;