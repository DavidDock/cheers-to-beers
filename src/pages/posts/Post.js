import React from "react";
import styles from "../../styles/Post.module.css";
import { Rating } from "react-simple-star-rating";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import logoempty from "../../assets/beer.png";
import logocheers from "../../assets/beer-cheers.png";

const Post = (props) => {
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
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
          {is_owner && postPage && "..."}
        </Card.Text>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} className={styles.Image} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        {type && <Card.Text>{type}</Card.Text>}
        {score && <Card.Text><Rating readonly initialValue={score} size={25} /></Card.Text>}
        <div>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="fa-regular fa-star mr-md-2" />
            </OverlayTrigger>
          ) : star_id ? (
            <span onClick={() => {}}>
              <i className={`fa-regular fa-star mr-md-2 ${styles.Star}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
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
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't cheer your own post!</Tooltip>}
            >
              <img className="ml-2 ml-md-4 mr-md-2 mb-1" src={logoempty} alt="Empty Beer Glass" height="30"></img>
            </OverlayTrigger>
          ) : cheer_id ? (
            <span onClick={() => {}}>
              <img className="ml-2 ml-md-4 mr-md-2 mb-1" src={logocheers} alt="Full Beer Glass" height="30"></img>
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <img className={`ml-2 ml-md-4 mr-md-2 mb-1 ${styles.Empty}`} src={logoempty} alt="Empty Beer Glass" height="30"></img>
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to cheer posts!</Tooltip>}
            >
              <img className="ml-2 ml-md-4 mr-md-2 mb-1" src={logoempty} alt="Empty Beer Glass" height="30"></img>
            </OverlayTrigger>
          )}
          {cheers_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments ml-2 ml-md-4 mr-md-2" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;