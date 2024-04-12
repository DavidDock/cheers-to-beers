import React, { useEffect, useState } from "react";

import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/PostsPage.module.css";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import Post from "./Post";
import Asset from "../../components/Asset";

function PostsPage({ message, filter = "" }) {
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

useEffect(() => {
    // fetch posts depending on filter and set
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
  }, [filter, pathname]);
  
  return (
    <Row className="d-flex justify-content-center">
        <Col className= "mx-4 mx-md-5 my-4" lg={7}>
            {/* Display posts or spinner*/}
            {hasLoaded ? (
                <>
                    {posts.results.length ? (
                    posts.results.map((post) => (
                        <Post key={post.id} postsPage {...post} setPosts={setPosts} />
                    ))
                    ) : (
                    <Container >
                        {/* Display no-results asset if no posts*/}
                        <Asset src={NoResults} message={message} />
                    </Container>
                    )}
                </>
                ) : (
                <Container >
                    <Asset spinner />
                </Container>
                )}
        </Col>
    </Row>
  );
}

export default PostsPage;