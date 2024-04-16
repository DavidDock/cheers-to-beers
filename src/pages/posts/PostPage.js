import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

import styles from "../../styles/PostPage.module.css"
import borderStyles from "../../styles/Borders.module.css";
import { Container, Col, Row, Button, Modal } from "react-bootstrap";

import Post from "./Post";
import Asset from "../../components/Asset";
import CommentCreateForm from "../comments/CommentCreateForm";
import Comment from "../comments/Comment";

import { useCurrentUser } from "../../contexts/CurrentUserContext"

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    // On mount set the post
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
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
            <Container className="p-0 m-0">
              <Button className={`m-4 ${borderStyles.LittleRedBorder} ${styles.Title}`} onClick={handleShow}>
                Comments
              </Button>

              <Modal show={show}
                     onHide={handleClose}
                     className={styles.Modal}
                     size="lg"
                     aria-labelledby="contained-modal-title-vcenter"
                     centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Comments</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  {currentUser ? (
                    <CommentCreateForm
                      profile_id={currentUser.profile_id}
                      profileImage={profile_image}
                      post={id}
                      setPost={setPost}
                      setComments={setComments}
                    />
                  ) : comments.results.length ? (
                    "Comments"
                  ) : null}
                  {comments.results.length ? (
                    comments.results.map((comment) => (
                      <Comment key={comment.id} {...comment} />
                    ))
                  ) : currentUser ? (
                    <span>No comments yet, be the first to comment!</span>
                  ) : (
                    <span>No comments... yet</span>
                  )}
                </Modal.Body>
                
              </Modal>

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