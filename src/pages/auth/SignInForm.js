import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import styles from "../../styles/SignInUpForm.module.css";
import borderStyles from "../../styles/Borders.module.css";
import { Form, Button, Alert } from "react-bootstrap";

import logo from "../../assets/beer-cheers.png";

import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleSubmit = async (event) => {
    // Submit sign in form
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    // Set the signInData state upon input
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center px-2 my-4 my-md-0">
      {/* Heading */}
      <div className="d-flex justify-content-center align-items-center my-4" >
        <img className={styles.Image} src={logo} alt="Beer Glass" height="25"></img>
        <h1 className={styles.RedTitle}>Login</h1>
        <img className={styles.Image} src={logo} alt="Beer Glass" height="25"></img>
      </div>

      {/* Form */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label className="sr-only">username</Form.Label>
          <Form.Control
            className={borderStyles.Input}
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
            autoComplete="off"
          />
        </Form.Group>
        {errors.username?.map((message, idx) => (
          <Alert key={idx} className={styles.RedWarning}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="password1">
          <Form.Label className="sr-only">Password</Form.Label>
          <Form.Control
            className={borderStyles.Input}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password?.map((message, idx) => (
          <Alert key={idx} className={styles.RedWarning}>
            {message}
          </Alert>
        ))}

        <Button
          className={`d-block mx-auto my-3 ${borderStyles.NormalBorder}`}
          type="submit"
        >
          Login
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} className={`mt-3 ${styles.RedWarning}`}>
            {message}
          </Alert>
        ))}
      </Form>

      {/* Link */}
      <div className="justify-content-center text-center">
        <span>Haven't Registered?
          <Link className={`ml-2 ${styles.Link}`} to="/signup">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignInForm;