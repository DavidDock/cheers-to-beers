import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import appStyles from "../../App.module.css";
import logo from "../../assets/beer-cheers.png";

import { Form, Button, Row, Col, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
      <Col>
          <Row className="p-4 justify-content-center align-items-center" >
              <img className={styles.Image} src={logo} alt="Beer Glass" height="25"></img>
              <h1 className={styles.RedTitle}>Register</h1>
              <img className={styles.Image} src={logo} alt="Beer Glass" height="25"></img>

              {/* add your form here */}

          </Row>
          <Row className="mt-4 justify-content-center">
              <span>Already Registered?
                  <Link className={`p-2 ${styles.Link}`} to="/signin">
                      Login
                  </Link>
              </span>
          </Row>
      </Col>
  );
};

export default SignUpForm;