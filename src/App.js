import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";

import styles from  "./App.module.css";
import Container from "react-bootstrap/Container";

import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import FooterNav from "./components/FooterNav";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      {/* Grid for TopNav Middle FooterNav */}
      <TopNav />
      <div className={styles.Middle } infinite-scroll-parent >
        {/* Middle Flex container for SideNav and Main */}
        <SideNav />
        <div className={styles.Main}>
          <Container className="p-0">
            {/* Container for content in route */}
            <Switch>
              <Route
                exact path="/"
                render={() => (
                  <PostsPage message="No results found. Adjust the search keyword." />
                )}
              />
              <Route
                exact
                path="/feed"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or follow a user."
                    filter={`owner__followed__owner__profile=${profile_id}&`}
                  />
                )}
              />
              <Route
                exact
                path="/stared"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or star a post."
                    filter={`stars__owner__profile=${profile_id}&ordering=-stars__created_at&`}
                  />
                )}
              />
              <Route
                exact
                path="/yours"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or add a post."
                    filter={`owner__profile=${profile_id}&`}
                  />
                )}
              />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/about" render={() => <h1>About</h1>} />
              <Route exact path="/contact" render={() => <h1>Contact</h1>} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
      </div>
      <FooterNav />
    </div>
  );
}

export default App;