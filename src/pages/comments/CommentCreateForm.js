import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, InputGroup, Alert } from "react-bootstrap";
import styles from "../../styles/CommentCreateEditForm.module.css";
import borderStyles from "../../styles/Borders.module.css"

import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      //console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Label className="sr-only" htmlFor="add-new-content">comment</Form.Label>
          <Form.Control
            className={` ${styles.Form} ${borderStyles.TextArea}`}
            placeholder="my comment..."
            as="textarea"
            value={content}
            id="add-new-content"
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      {errors.content?.map((message, idx) => (
        <Alert key={idx} className={styles.RedWarning}>
          {message}
        </Alert>
      ))}
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default CommentCreateForm;