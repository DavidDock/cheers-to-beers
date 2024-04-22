import React, { useEffect, useState } from "react";

import { Alert, Container, Col, Row, Button, Form } from "react-bootstrap";
import styles from "../../styles/UsernamePasswordEdit.module.css";
import borderStyles from "../../styles/Borders.module.css";

import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

const UsernameForm = () => {
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState({});

    const history = useHistory();
    const { id } = useParams();

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    useEffect(() => {
        if (currentUser?.profile_id?.toString() === id) {
            setUsername(currentUser.username);
        } else {
            history.push("/");
        }
    }, [currentUser, history, id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put("/dj-rest-auth/user/", {
                username,
            });
            setCurrentUser((prevUser) => ({
                ...prevUser,
                username,
            }));
            history.goBack();
        } catch (err) {
            //console.log(err);
            setErrors(err.response?.data);
        }
    };

    return (
        <Row>
            <Col className="py-2 mx-auto text-center" md={6}>
                <Container>
                    <Form onSubmit={handleSubmit} className="my-2 mx-auto w-75 w-md-50">
                        <Form.Group>
                            <Form.Label htmlFor="username">Change username</Form.Label>
                            <Form.Control
                                placeholder="username"
                                className={borderStyles.Input}
                                id="username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </Form.Group>
                        {errors?.username?.map((message, idx) => (
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
                            className={`mx-2 my-3 ${borderStyles.NormalBorder}`}
                            type="submit"
                        >
                            save
                        </Button>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
};

export default UsernameForm;