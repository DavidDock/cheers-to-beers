import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import logo from "../../assets/beer-cheers.png";

import { Form, Button, Row, Col, Container } from "react-bootstrap";

const SignUpForm = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center p-2">
            {/* Heading */}
            <div className="d-flex justify-content-center align-items-center my-4" >
                <img className={styles.Image} src={logo} alt="Beer Glass" height="25"></img>
                <h1 className={styles.RedTitle}>Register</h1>
                <img className={styles.Image} src={logo} alt="Beer Glass" height="25"></img>
            </div>

            {/* Form */}
            <div>Form</div>
            
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