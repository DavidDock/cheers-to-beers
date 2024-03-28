import styles from  "./App.module.css";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import FooterNav from "./components/FooterNav";
import Container from "react-bootstrap/Container"; 
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";

function App() {
  return (
    <div className={styles.App}>
      <TopNav />
      <div className={styles.Middle}>
        <SideNav />
        <Container>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <h1>Log in</h1>} />
          <Route exact path="/signup" render={() => <h1>Register</h1>} />
          <Route exact path="/about" render={() => <h1>About</h1>} />
          <Route exact path="/contact" render={() => <h1>Contact</h1>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
        </Container>
      </div>
      <FooterNav />
    </div>
  );
}

export default App;