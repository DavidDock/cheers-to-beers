import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

import styles from "../../styles/PostPage.module.css"
import borderStyles from "../../styles/Borders.module.css";
import { Container, Col, Row, Button, Modal } from "react-bootstrap";

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

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
  const history = useHistory();

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
      } catch (err) {
        //console.log(err);
        history.push("/");
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

  }, [id, history]);


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
              {/* Modal for comments */}
              <Modal show={show}
                onHide={handleClose}
                className={styles.Modal}
                size="lg"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Comments</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  {/* Show comment add form if logged */}
                  {currentUser ? (
                    <CommentCreateForm
                      profile_id={currentUser.profile_id}
                      profileImage={profile_image}
                      post={id}
                      setPost={setPost}
                      setComments={setComments}
                    />
                  ) : comments.results.length ? (
                    null
                  ) : null}
                  {/* Show comments if any and relevant message in user logged in/not */}
                  {comments.results.length ? (
                    <InfiniteScroll
                      children={comments.results.map((comment) => (
                        <Comment
                          key={comment.id}
                          {...comment}
                          setPost={setPost}
                          setComments={setComments}
                        />
                      ))}
                      dataLength={comments.results.length}
                      loader={<Asset spinner />}
                      height="400"
                      scrollThreshold="50%"
                      className={`p-3 p-md-5 ${styles.InfiniteContainer}`}
                      hasMore={!!comments.next}
                      next={() => fetchMoreData(comments, setComments)}
                    />
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