import styles from  "./App.module.css";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import FooterNav from "./components/FooterNav";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";

function App() {
  return (
    <div className={styles.App}>
      {/* Grid for TopNav Middle FooterNav */}
      <TopNav />
      <div className={styles.Middle}>
        {/* Middle Flex container for SideNav and Main */}
        <SideNav />
        <div className={styles.Main}>
          <Switch>
            <Route exact path="/" render={() => <h1>Home page</h1>} />
            <Route exact path="/signin" render={() => <h1>Log in</h1>} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route exact path="/about" render={() => <h1>About</h1>} />
            <Route exact path="/contact" render={() => <h1>Contact</h1>} />
            <Route render={() => <p>Page not found!</p>} />
          </Switch>
        </div>
      </div>
      <FooterNav />
    </div>
  );
}

export default App;