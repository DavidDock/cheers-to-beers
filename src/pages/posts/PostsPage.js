import React, { useEffect, useState } from "react";

import { Form, Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/PostsPage.module.css";
import borderStyles from "../../styles/Borders.module.css";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import Post from "./Post";
import Asset from "../../components/Asset";

function PostsPage({ message, filter = "" }) {
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const [query, setQuery] = useState("");

useEffect(() => {
    // fetch posts depending on filter and set
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
        fetchPosts();
      }, 750);
      return () => {
        clearTimeout(timer);
      };

  }, [filter, query, pathname]);
  
  return (
    <Row className="d-flex justify-content-center">
        <Col className= "mx-4 mx-md-5 my-4" lg={7}>

            {/* Search  bar*/}
            <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form
                className={`mx-auto mb-4 ${styles.SearchBar}`}
                onSubmit={(event) => event.preventDefault()}
            >
                <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className={`mr-sm-2 ${borderStyles.Input}`}
                placeholder="Search posts"
                />
            </Form>

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