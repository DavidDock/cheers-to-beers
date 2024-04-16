import React from "react";
import { Rating } from "react-simple-star-rating";
import { axiosRes } from "../../api/axiosDefaults";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

import styles from "../../styles/Post.module.css";
import borderStyles from "../../styles/Borders.module.css";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Avatar from "../../components/Avatar";
import logoempty from "../../assets/beer.png";
import logoemptyred from "../../assets/beerred.png";
import logocheers from "../../assets/beer-cheers.png";
import { MoreDropdown } from "../../components/MoreDropdown";

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
    postsPage,
    setPosts,
  } = props;
  
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  
  // const to allow onMouseEnter/Leave fuction
  const [emptyImage, setEmptyImage] = useState(logoempty);

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

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
    <Card className= {postsPage ? `mb-5 ${styles.Post} ${borderStyles.PurpleBorder}` : `${styles.Post}` }>
      <Card.Body>
        <Media className="align-items-center justify-content-center justify-content-md-between">
          <Link to={`/profiles/${profile_id}`} className={styles.OwnerName}>
            <Avatar src={profile_image} height={45} />
            {owner}
          </Link>
          <div className="d-none d-md-flex align-items-center">
            <span className="mx-3">{updated_at}</span>
            {is_owner && postPage && (
             <MoreDropdown
             handleEdit={handleEdit}
             handleDelete={handleDelete}
             />
            )}
          </div>
        </Media>
        <Card.Text className="d-flex d-md-none align-items-center justify-content-center mt-2">
          <span className="mr-2">{updated_at}</span>
          {/* Is owner edit post buttons */}
          {is_owner && postPage && (
             <MoreDropdown
             handleEdit={handleEdit}
             handleDelete={handleDelete}
             />
          )}
        </Card.Text>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img
          src={image}
          alt= {`Picture of ${title}`}
          className={`p-0 ${styles.Image} ${borderStyles.RedBorderImage}`} />
      </Link>

      <Card.Body className="text-center">
        {title && <Card.Title className={`my-2 ${styles.Title} ${borderStyles.TitleBorder}`}>{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        {type && <Card.Text>Beer Type: {type}</Card.Text>}
        {/* Rating component */}
        {score  !== 0 && <Card.Text><Rating readonly initialValue={score} size={20} /></Card.Text>}
        <div className="d-flex justify-content-around flex-wrap ">

          <div className="d-flex flex-column justify-content-center">
          {/* Star post:
          Differnt conditions for if owner/ current user or loggedin*/}
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't like your own post!</Tooltip>}
              >
                <i className="fa-regular fa-star" />
              </OverlayTrigger>
            ) : star_id ? (
              <span onClick={handleUnstar}>
                <i className={`fa-regular fa-star ${styles.Star}`} />
              </span>
            ) : currentUser ? (
              <span onClick={handleStar}>
                <i className={`fa-regular fa-star ${styles.StarOutline}`} />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to like posts!</Tooltip>}
              >
                <i className="fa-regular fa-star" />
              </OverlayTrigger>
            )}
            {stars_count}
          </div>

          <div className="d-flex flex-column justify-content-center">
          {/* Cheer post:
          Differnt conditions for if owner/ current user or loggedin*/}
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't cheer your own post!</Tooltip>}
              >
                <img
                  src={logoempty}
                  alt="Empty Beer Glass"
                  height="30"></img>
              </OverlayTrigger>
            ) : cheer_id ? (
              <span onClick={handleUncheer}>
                <img
                  className={styles.Pointer}
                  src={logocheers}
                  alt="Full Beer Glass"
                  height="30"></img>
              </span>
            ) : currentUser ? (
              <span onClick={handleCheer}>
                <img
                  className={styles.Pointer}
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
                  src={logoempty}
                  alt="Empty Beer Glass"
                  height="30"></img>
              </OverlayTrigger>
            )}
            {cheers_count}
          </div>

          <div className="d-flex flex-column justify-content-center">
            {/* Post comments */}
            <Link to={`/posts/${id}`}>
              <i className={`far fa-comments ${styles.CommentsIcon}`} />
            </Link>
            {comments_count}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;