import styles from  "./App.module.css";
import Container from "react-bootstrap/Container";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import FooterNav from "./components/FooterNav";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const CurrentUserContext = createContext()
export const SetCurrentUserContext = createContext()

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          {/* Grid for TopNav Middle FooterNav */}
          <TopNav />
          <div className={styles.Middle}>
            {/* Middle Flex container for SideNav and Main */}
            <SideNav />
            <div className={styles.Main}>
              <Container className="py-0">
                {/* Container for content in route */}
                <Switch>
                  <Route exact path="/" render={() => <h1>Home page</h1>} />
                  <Route exact path="/signin" render={() => <SignInForm />} />
                  <Route exact path="/signup" render={() => <SignUpForm />} />
                  <Route exact path="/about" render={() => <h1>About</h1>} />
                  <Route exact path="/contact" render={() => <h1>Contact</h1>} />
                  <Route render={() => <p>Page not found!</p>} />
                </Switch>
              </Container>
            </div>
          </div>
          <FooterNav />
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;