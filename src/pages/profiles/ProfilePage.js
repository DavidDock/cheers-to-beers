import React, { useEffect, useState } from "react";

import { Container, Col, Row, Image } from "react-bootstrap";

import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import borderStyles from "../../styles/Borders.module.css"

import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const [profileData, setProfileData] = useState({
    id: "",
    owner: "",
    name: "",
    content: "",
    image: "",
    favourite: "",
    is_owner: "",
    following_id: "",
    posts_count: "",
    followers_count: "",
    following_count: "",
    created_at: "",
    updated_at: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
        ]);
        setProfileData(pageProfile);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfileData();
  }, [id]);

  const mainProfile = (
    <>
      <Row className="p-0 m-0 text-center">
        <Col lg={3} className="text-lg-left my-4">
            <Image
                className={styles.ProfileImage}
                roundedCircle
                src={profileData.image}
            />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profileData?.owner}</h3>
          <p>Profile stats</p>
        </Col>
        <Col lg={3} className="text-lg-right">
        <p>Follow button</p>
        </Col>
        <Col className="p-3">{profileData.content}</Col>
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">Profile owner's posts</p>
      <hr />
    </>
  );

  return (
    <Row className="m-0 p-0 d-flex justify-content-center">
      <Col className={borderStyles.PurpleBorder} lg={7}>
        
        {hasLoaded ? (
          <>
            {mainProfile}
            {mainProfilePosts}
          </>
        ) : (
          <Asset spinner />
        )}
        
      </Col>
    </Row>
  );
}

export default ProfilePage;