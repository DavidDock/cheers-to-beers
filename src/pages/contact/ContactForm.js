import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import styles from "../../styles/ContactForm.module.css";
import borderStyles from "../../styles/Borders.module.css";
import { Form, Button, Alert, Container } from "react-bootstrap";

import logo from "../../assets/beer-cheers.png";

const ContactForm = () => {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const { name, email, message } = contactData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        // Set the contactData upon input
        setContactData({
            ...contactData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        // Submits contact form
        event.preventDefault();
        try {
            await axios.post("/contact/", contactData);
            history.push("/");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center px-2 my-4 my-md-0">
            {/* Heading */}
            <div className="d-flex justify-content-center align-items-center my-4" >
                <img className={styles.Image} src={logo} alt="Beer Glass" height="25"></img>
                <h1 className={styles.RedTitle}>Contact</h1>
                <img className={styles.Image} src={logo} alt="Beer Glass" height="25"></img>
            </div>

            {/* Form */}
            <Form onSubmit={handleSubmit} className={styles.Form}>
                <Form.Group controlId="username">
                    <Form.Label className="sr-only">name</Form.Label>
                    <Form.Control
                        className={borderStyles.Input}
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                </Form.Group>
                {errors.name?.map((message, idx) => (
                    <Alert key={idx} className={styles.RedWarning}>
                        {message}
                    </Alert>
                ))}

                <Form.Group controlId="email">
                    <Form.Label className="sr-only">Email</Form.Label>
                    <Form.Control
                        className={borderStyles.Input}
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.email?.map((message, idx) => (
                    <Alert key={idx} className={styles.RedWarning}>
                        {message}
                    </Alert>
                ))}

                <Form.Group controlId="message">
                    <Form.Label className="sr-only">Message</Form.Label>
                    <Form.Control
                        className={`text-center ${borderStyles.TextArea}`}
                        as="textarea"
                        rows={4}
                        placeholder="Message"
                        name="message"
                        value={message}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.message?.map((message, idx) => (
                    <Alert key={idx} className={styles.RedWarning}>
                        {message}
                    </Alert>
                ))}

                <Button
                    className={`d-block mx-auto my-3 ${borderStyles.NormalBorder}`}
                    type="submit"
                >
                    Contact
                </Button>
                {errors.non_field_errors?.map((message, idx) => (
                    <Alert key={idx} className={`mt-3 ${styles.RedWarning}`}>
                        {message}
                    </Alert>
                ))}
            </Form>
        </Container>
    );
};

export default ContactForm;