import styles from  "./App.module.css";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import FooterNav from "./components/FooterNav";

function App() {
  return (
    <div className={styles.App}>
      <TopNav />
      <div>
        <SideNav />
      </div>
      <FooterNav />
    </div>
  );
}

export default App;