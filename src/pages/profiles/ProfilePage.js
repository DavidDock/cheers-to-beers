import React, { useEffect, useState } from "react";

import { Button, Col, Row, Image } from "react-bootstrap";

import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import borderStyles from "../../styles/Borders.module.css"

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import Post from "../posts/Post";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const [profilePosts, setProfilePosts] = useState({ results: [] });
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
  const is_owner = currentUser?.username === profileData?.owner;

  const handleFollow = async (profileData) => {
    // create a follow and amend profile data
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: profileData.id,
      });

      setProfileData((prevState) => ({
        ...prevState,
        ...profileData,
        followers_count: profileData.followers_count + 1,
        following_id: data.id,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow = async (profileData) => {
    // delete a follow and amend profile data
    try {
      await axiosRes.delete(`/followers/${profileData.following_id}/`);

      setProfileData((prevState) => ({
        ...prevState,
        ...profileData,
        followers_count: profileData.followers_count - 1,
        following_id: null,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // fetch and set profile data and profile owners posts
    const fetchProfileData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/posts/?owner__profile=${id}`),
        ]);
        setProfileData(pageProfile);
        setProfilePosts(profilePosts);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfileData();
  }, [id]);

  const mainProfile = (
    // profile owner details
    <>
      {profileData?.is_owner && <ProfileEditDropdown id={profileData?.id} />}
      <Row className="p-0 m-0 text-center">
        <Col lg={3} className="text-lg-left mt-4">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profileData.image}
            alt={`${profileData.owner} s picture`}
          />
        </Col>
        <Col className="mt-4" lg={6}>
          <h3 className={styles.Green}>{profileData?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col className="my-2">
              <div>{profileData?.posts_count}</div>
              <div className={styles.Red}>posts</div>
            </Col>
            <Col className="my-2 mx-2">
              <div>{profileData?.followers_count}</div>
              <div className={styles.Red}>followers</div>
            </Col>
            <Col className="my-2">
              <div>{profileData?.following_count}</div>
              <div className={styles.Red}>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right mt-4">
          {/* follow/unfollow button or none depending on user and following id */}
          {currentUser &&
            !is_owner &&
            (profileData?.following_id ? (
              <Button
                className={`${borderStyles.RedBorder} ${styles.LargerText}`}
                onClick={() => handleUnfollow(profileData)}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${borderStyles.RedBorder} ${styles.LargerText}`}
                onClick={() => handleFollow(profileData)}
              >
                follow
              </Button>
            ))}
        </Col>
        {profileData?.content && <p className="mx-auto p-3 text-center w-100">{profileData.content}</p>}
        {profileData?.favourite && <p className={`mx-auto p-3 text-center w-100 ${styles.Green}`}>Favourite Beer: {profileData.favourite}</p>}
      </Row>
    </>
  );

  const mainProfilePosts = (
    // posts for profile owner
    <>
      <hr />
      <p className={`text-center ${styles.Red} ${styles.LargerText}`}>{profileData?.owner}'s posts</p>
      <hr />
      {/* display all posts with infinte scroll or no-posts asset */}
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          height="400"
          className={styles.InfiniteContainer}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profileData?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row className="m-0 p-0 d-flex justify-content-center">
      <Col className={`mx-2 p-2 ${borderStyles.PurpleBorder}`} lg={7}>
        {/* show profile details and owners post or spinner until loaded */}

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