import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";

import styles from "./App.module.css";
import Container from "react-bootstrap/Container";

import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import FooterNav from "./components/FooterNav";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostEditForm from "./pages/posts/PostEditForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import ProfilePage from "./pages/profiles/ProfilePage";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import About from "./pages/about/About";
import ContactForm from "./pages/contact/ContactForm";

import { useCurrentUser } from "./contexts/CurrentUserContext";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      {/* Grid for TopNav Middle FooterNav */}
      <TopNav />
      <div className={styles.Middle} >
        {/* Middle Flex container for SideNav and Main */}
        <SideNav />
        <div className={styles.Main}>
          <Container className="pl-3 pr-2 m-0 py-2">
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
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/contact" render={() => <ContactForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
              <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
              <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />} />
              <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />} />
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