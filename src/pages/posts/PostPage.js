import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

import styles from "../../styles/PostPage.module.css";
import borderStyles from "../../styles/Borders.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Post from "./Post";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  useEffect(() => {
    // On mount set the post
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
        console.log(post);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);


  return (
    <Row className="d-flex justify-content-center">
      <Col className= {`mx-4 mx-md-5 my-4 ${borderStyles.PurpleBorder}`} lg={7}>
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <Container className="">
          Comments
        </Container>
      </Col>
    </Row>
  );
}

export default PostPage;