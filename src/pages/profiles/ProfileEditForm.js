import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import styles from "../../styles/ProfileEditForm.module.css";
import appStyles from "../../App.module.css";
import borderStyles from "../../styles/Borders.module.css";
import { Image, Alert, Container, Col, Row, Button, Form } from "react-bootstrap";

import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";


const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    content: "",
    image: "",
    favourite: "",
  });
  const { name, content, image, favourite } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, content, image, favourite } = data;
          setProfileData({ name, content, image, favourite });
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);
    formData.append("favourite", favourite);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          className={borderStyles.TextArea}
          value={content}
          onChange={handleChange}
          name="content"
          rows={7}
        />
      </Form.Group>

      {errors?.content?.map((message, idx) => (
        <Alert className={styles.RedWarning} key={idx}>
          {message}
        </Alert>
      ))}

<Form.Group>
        <Form.Label>Favourite Beer</Form.Label>
        <Form.Control
          type="text"
          className={borderStyles.Input}
          value={favourite}
          onChange={handleChange}
          name="favourite"
          rows={7}
        />
      </Form.Group>

      {errors?.favourite?.map((message, idx) => (
        <Alert className={styles.RedWarning} key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`mx-2 my-3 ${borderStyles.NormalBorder}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button 
        className={`mx-3 my-3 ${borderStyles.NormalBorder}`} 
        type="submit"
      >
        save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={` ${styles.Container} d-flex flex-column justify-content-center align-items-center`}>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} className={appStyles.Image} />
                </figure>
              )}
              <div>
                <Form.Label
                  className={borderStyles.NormalBorder}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                className="d-none"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            {errors.image?.map((message, idx) => (
              <Alert key={idx} className={styles.RedWarning}>
                {message}
              </Alert>
            ))}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>

        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={""}>{textFields}</Container>
        </Col>
        
      </Row>
    </Form>
  );
};

export default ProfileEditForm;