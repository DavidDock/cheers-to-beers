import React, { useState, useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";

import styles from "../../styles/About.module.css";
import { Container } from "react-bootstrap";
import Asset from "../../components/Asset";
import logo from "../../assets/beer-cheers.png";

import borderStyles from "../../styles/Borders.module.css";

function About() {
    const [abouts, setAbouts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {

        const handleMount = async () => {
            // fetch abouts and set data
            try {
                const { data } = await axiosReq.get(`/about`);
                setAbouts(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };
        setHasLoaded(false);
        // set has loaded timer fetching abouts
        const timer = setTimeout(() => {
            handleMount();
        }, 750);
        return () => {
            clearTimeout(timer);
        };
    }, []);


    return (
        <>
            {hasLoaded ? (
                <Container className="d-flex flex-column justify-content-center align-items-center px-2 my-4 my-md-0">
                    {/* Heading */}
                    <div className="d-flex justify-content-center align-items-center my-4" >
                        <img className={styles.Image} src={logo} alt="Beer Glass" height="25"></img>
                        <h1 className={styles.RedTitle}>
                            {abouts.results[0].title}
                        </h1>
                        <img className={styles.Image} src={logo} alt="Beer Glass" height="25"></img>
                    </div>

                    {/* Content */}
                    <div className={`mx-2 mx-sm-4 ${borderStyles.PurpleBorder}`}>
                        <p className="p-3 p-sm-4 my-0">
                            {abouts.results[0].content}
                        </p>
                    </div>

                </Container>
            ) : (
                <Container >
                    {/* spinner */}
                    <Asset spinner />
                </Container>
            )}
        </>
    );
};

export default About;