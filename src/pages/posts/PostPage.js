import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

import borderStyles from "../../styles/Borders.module.css";
import { Container, Col, Row } from "react-bootstrap";

import Post from "./Post";
import Asset from "../../components/Asset";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // On mount set the post
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
        setHasLoaded(true);
        console.log(post);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
        // set has loaded timer whilst fetching post
        const timer = setTimeout(() => {
          handleMount();
        }, 750);
        return () => {
            clearTimeout(timer);
        };

  }, [id]);


  return (
    <>
      {hasLoaded ? (

        <Row className="ml-3 mr-1 mx-md-5 my-2 d-flex justify-content-center">
          <Col className={borderStyles.PurpleBorder} lg={7}>
            <Post {...post.results[0]} setPosts={setPost} postPage />
            <Container>
              Comments
            </Container>
          </Col>
        </Row>

      ) : (
        <Container >
          <Asset spinner />
        </Container>
      )}
    </>
  );
}

export default PostPage;