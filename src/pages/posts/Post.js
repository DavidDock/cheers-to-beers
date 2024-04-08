import React from "react";
import { Rating } from "react-simple-star-rating";
import { axiosRes } from "../../api/axiosDefaults";
import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "../../styles/Post.module.css";
import borderStyles from "../../styles/Borders.module.css";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from "../../components/Avatar";
import logoempty from "../../assets/beer.png";
import logoemptyred from "../../assets/beerred.png";
import logocheers from "../../assets/beer-cheers.png";

const Post = (props) => {
  // Deconstruct Post props
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    cheers_count,
    cheer_id,
    score,
    type,
    stars_count,
    star_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;
  
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  
  // const to allow onMouseEnter/Leave fuction
  const [emptyImage, setEmptyImage] = useState(logoempty);

  const handleStar = async () => {
    // Add star to API
    try {
      const { data } = await axiosRes.post("/stars/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, stars_count: post.stars_count + 1, star_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnstar = async () => {
    // Remove star from API
    try {
      await axiosRes.delete(`/stars/${star_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, stars_count: post.stars_count - 1, star_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheer = async () => {
    // Add cheer to API
    try {
      const { data } = await axiosRes.post("/cheers/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, cheers_count: post.cheers_count + 1, cheer_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUncheer = async () => {
    // Remove cheer from API
    try {
      await axiosRes.delete(`/cheers/${cheer_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, cheers_count: post.cheers_count - 1, cheer_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-center justify-content-md-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={45} />
            {owner}
          </Link>
          <div className="d-none d-md-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && "..."}
          </div>
        </Media>
        <Card.Text className="d-flex d-md-none align-items-center justify-content-center mt-2">
          <span>{updated_at}</span>
          {/* Is owner edit post buttons */}
          {is_owner && postPage && "..."}
        </Card.Text>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img
          src={image}
          alt= {`Picture of ${title}`}
          className={`p-0 ${styles.Image} ${borderStyles.RedBorderImage}`} />
      </Link>
      <Card.Body className="text-center">
        {title && <Card.Title className={styles.Underline}>{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        {type && <Card.Text>Beer Type: {type}</Card.Text>}
        {/* Rating component */}
        {score  !== 0 && <Card.Text><Rating readonly initialValue={score} size={25} /></Card.Text>}
        <div>
          {/* Star post:
          Differnt conditions for if owner/ current user or loggedin*/}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="fa-regular fa-star mr-md-2" />
            </OverlayTrigger>
          ) : star_id ? (
            <span onClick={handleUnstar}>
              <i className={`fa-regular fa-star mr-md-2 ${styles.Star}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleStar}>
              <i className={`fa-regular fa-star mr-md-2 ${styles.StarOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="fa-regular fa-star mr-md-2" />
            </OverlayTrigger>
          )}
          {stars_count}
          {/* Cheer post:
          Differnt conditions for if owner/ current user or loggedin*/}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't cheer your own post!</Tooltip>}
            >
              <img
                className="ml-2 ml-md-4 mr-md-2 mb-1"
                src={logoempty}
                alt="Empty Beer Glass"
                height="30"></img>
            </OverlayTrigger>
          ) : cheer_id ? (
            <span onClick={handleUncheer}>
              <img
                className={`ml-2 ml-md-4 mr-md-2 mb-1 ${styles.Pointer}`}
                src={logocheers}
                alt="Full Beer Glass"
                height="30"></img>
            </span>
          ) : currentUser ? (
            <span onClick={handleCheer}>
              <img
                className={`ml-2 ml-md-4 mr-md-2 mb-1 ${styles.Pointer}`}
                src={emptyImage}
                alt="Empty Beer Glass"
                height="30"
                onMouseEnter={() => setEmptyImage(logoemptyred)}
                onMouseLeave={() => setEmptyImage(logoempty)}></img>
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to cheer posts!</Tooltip>}
            >
              <img
                className="ml-2 ml-md-4 mr-md-2 mb-1"
                src={logoempty}
                alt="Empty Beer Glass"
                height="30"></img>
            </OverlayTrigger>
          )}
          {cheers_count}
          {/* Post comments */}
          <Link to={`/posts/${id}`}>
            <i className={`far fa-comments ml-2 ml-md-4 mr-md-2 ${styles.CommentsIcon}`} />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;