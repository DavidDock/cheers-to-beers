import React, { useRef, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import borderStyles from "../../styles/Borders.module.css";
import { Image, Alert, Container, Col, Row, Button, Form } from "react-bootstrap";

function PostCreateForm() {
  useRedirect("loggedOut");
  // Set Post data, errors and rating

  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    type: "",
  });

  const { title, content, type, image } = postData;

  const [rating, setRating] = useState(0);
  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    // Handle change in form and setData for title, content and type
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    // Handle change in form for image
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleRating = (rate) => {
    // Handle change in form for rating
    setRating(rate / 20);
  };

  const handleSubmit = async (event) => {
    // Send new form data to API to create a post
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("type", type);
    formData.append("score", rating);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      //console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };


  const textFields = (
    // Textfields for form
    <div className="text-center">
      <Form.Group>
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control
          className={borderStyles.Input}
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.title?.map((message, idx) => (
        <Alert key={idx} className={styles.RedWarning}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label htmlFor="content">Content</Form.Label>
        <Form.Control
          className={borderStyles.TextArea}
          id="content"
          as="textarea"
          rows={4}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.content?.map((message, idx) => (
        <Alert key={idx} className={styles.RedWarning}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label htmlFor="type">Beer Type</Form.Label>
        <Form.Control
          className={borderStyles.Input}
          id="type"
          type="text"
          name="type"
          value={type}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.type?.map((message, idx) => (
        <Alert key={idx} className={styles.RedWarning}>
          {message}
        </Alert>
      ))}

      <div>
        <Button
          className={`mx-2 my-3 ${borderStyles.NormalBorder}`}
          onClick={() => history.goBack()}
        >
          cancel
        </Button>
        <Button className={`mx-3 my-3 ${borderStyles.NormalBorder}`} type="submit">
          create
        </Button>
      </div>
    </div>
  );

  const textFieldsLarger = (
    // Textfields for form
    <div className="text-center">
      <Form.Group>
        <Form.Label htmlFor="larger-title">Title</Form.Label>
        <Form.Control
          className={borderStyles.Input}
          type="text"
          id="larger-title"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.title?.map((message, idx) => (
        <Alert key={idx} className={styles.RedWarning}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label htmlFor="larger-content">Content</Form.Label>
        <Form.Control
          className={borderStyles.TextArea}
          id="larger-content"
          as="textarea"
          rows={4}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.content?.map((message, idx) => (
        <Alert key={idx} className={styles.RedWarning}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label htmlFor="larger-type">Beer Type</Form.Label>
        <Form.Control
          className={borderStyles.Input}
          id="larger-type"
          type="text"
          name="type"
          value={type}
          onChange={handleChange}
        />
      </Form.Group>
      {errors.type?.map((message, idx) => (
        <Alert key={idx} className={styles.RedWarning}>
          {message}
        </Alert>
      ))}

      <div>
        <Button
          className={`mx-2 my-3 ${borderStyles.NormalBorder}`}
          onClick={() => history.goBack()}
        >
          cancel
        </Button>
        <Button className={`mx-3 my-3 ${borderStyles.NormalBorder}`} type="submit">
          create
        </Button>
      </div>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="px-2">
        <Col className="py-2 p-0 p-md-2" md={7}>
          <Container
            className={` ${styles.Container} d-flex flex-column justify-content-center align-items-center`}
          >
            <Form.Group className="text-center">
              {/* Form Image, change image and errors */}
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={borderStyles.NormalBorder}
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
                ref={imageInput}
              />
            </Form.Group>
            {errors.image?.map((message, idx) => (
              <Alert key={idx} className={styles.RedWarning}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              {/* Form rating and errors */}
              <Rating onClick={handleRating} size={20} />
            </Form.Group>
            {errors.score?.map((message, idx) => (
              <Alert key={idx} className={styles.RedWarning}>
                {message}
              </Alert>
            ))}
            {/* Form textfields */}
            <div className="d-md-none">{textFields}</div>
          </Container>

        </Col>
        {/* Form textfields on larger devices */}
        <Col md={5} className="d-none d-md-block p-0 p-md-2">
          <Container className="">{textFieldsLarger}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;