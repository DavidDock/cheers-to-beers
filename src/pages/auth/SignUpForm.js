import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import logo from "../../assets/beer-cheers.png";

import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
      });
      const { username, password1, password2 } = signUpData;
    
      const [errors, setErrors] = useState({});
    
      const history = useHistory();
    
      const handleChange = (event) => {
        setSignUpData({
          ...signUpData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post("/dj-rest-auth/registration/", signUpData);
          history.push("/signin");
        } catch (err) {
          setErrors(err.response?.data);
        }
      };
    return (
        <div className="d-flex flex-column justify-content-center align-items-center p-2">
            {/* Heading */}
            <div className="d-flex justify-content-center align-items-center my-4" >
                <img className={styles.Image} src={logo} alt="Beer Glass" height="25"></img>
                <h1 className={styles.RedTitle}>Register</h1>
                <img className={styles.Image} src={logo} alt="Beer Glass" height="25"></img>
            </div>
            
            {/* Form */}
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button
              type="submit"
            >
              Sign up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
          
            {/* Link */}
            <div className="mt-4 justify-content-center text-center">
                <span>Already Registered?
                    <Link className={`pl-2 ${styles.Link}`} to="/signin">
                          Login
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SignUpForm;