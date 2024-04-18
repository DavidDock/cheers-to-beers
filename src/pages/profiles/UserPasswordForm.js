import React, { useEffect, useState } from "react";

import { Alert, Container, Col, Row, Button, Form } from "react-bootstrap";
import styles from "../../styles/UsernamePasswordEdit.module.css";
import borderStyles from "../../styles/Borders.module.css";

import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const UserPasswordForm = () => {
    const history = useHistory();
    const { id } = useParams();
    const currentUser = useCurrentUser();

    const [userData, setUserData] = useState({
        new_password1: "",
        new_password2: "",
    });
    const { new_password1, new_password2 } = userData;

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        if (currentUser?.profile_id?.toString() !== id) {
            // redirect user if they are not the owner of this profile
            history.push("/");
        }
    }, [currentUser, history, id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.post("/dj-rest-auth/password/change/", userData);
            history.goBack();
        } catch (err) {
            console.log(err);
            setErrors(err.response?.data);
        }
    };

    return (
        <Row>
            <Col className="py-2 mx-auto text-center" md={6}>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="password">New password</Form.Label>
                            <Form.Control
                                placeholder="new password"
                                id="password"
                                className={borderStyles.Input}
                                type="password"
                                value={new_password1}
                                onChange={handleChange}
                                name="new_password1"
                            />
                        </Form.Group>
                        {errors?.new_password1?.map((message, idx) => (
                            <Alert key={idx} className={styles.RedWarning}>
                                {message}
                            </Alert>
                        ))}
                        <Form.Group>
                            <Form.Label htmlFor="password2">Confirm password</Form.Label>
                            <Form.Control
                                placeholder="confirm new password"
                                className={borderStyles.Input}
                                id="password2"
                                type="password"
                                value={new_password2}
                                onChange={handleChange}
                                name="new_password2"
                            />
                        </Form.Group>
                        {errors?.new_password2?.map((message, idx) => (
                            <Alert key={idx} className={styles.RedWarning}>
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
                            type="submit"
                            className={`mx-2 my-3 ${borderStyles.NormalBorder}`}
                        >
                            save
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default UserPasswordForm;