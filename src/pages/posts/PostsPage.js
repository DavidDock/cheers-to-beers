import React, { useEffect, useState } from "react";

import { Form, Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/PostsPage.module.css";
import borderStyles from "../../styles/Borders.module.css";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

import NoResults from "../../assets/no-results.png";
import Post from "./Post";
import Asset from "../../components/Asset";

function PostsPage({ message, filter = "" }) {
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const currentUser = useCurrentUser();

    const [query, setQuery] = useState("");

    useEffect(() => {
        // fetch posts depending on filter and set
        const fetchPosts = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
                setPosts(data);
                setHasLoaded(true);
            } catch (err) {
              //console.log(err);
            }
        };

        setHasLoaded(false);
        // set has loaded timer  fetching posts
        const timer = setTimeout(() => {
            fetchPosts();
        }, 750);
        return () => {
            clearTimeout(timer);
        };

    }, [filter, query, pathname, currentUser]);

    return (
        <Row className="d-flex justify-content-center p-0 m-0">
            <Col lg={7} className={styles.Col}>

                {/* Search  bar*/}
                <i className={`fas fa-search ${styles.SearchIcon}`} />
                <Form
                    className={`mx-5 mt-1 ${styles.SearchBar}`}
                    onSubmit={(event) => event.preventDefault()}
                >
                    <Form.Label className="sr-only" htmlFor="search">Search</Form.Label>
                    <Form.Control
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        type="text"
                        id="search"
                        className={`mr-sm-2 ${borderStyles.Input}`}
                        placeholder="Search"
                    />
                </Form>

                {/* Display posts or spinner*/}
                {hasLoaded ? (
                    <>
                        {posts.results.length ? (
                            <InfiniteScroll
                                children={posts.results.map((post) => (
                                    <Post key={post.id} {...post} postsPage setPosts={setPosts} />
                                ))}
                                dataLength={posts.results.length}
                                loader={<Asset spinner />}
                                hasMore={!!posts.next}
                                height="400"
                                scrollThreshold="50%"
                                next={() => fetchMoreData(posts, setPosts)}
                                className={`p-3 p-md-5 ${styles.InfiniteContainer}`}
                            />
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