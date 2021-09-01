import BoxCard from "../components/BoxCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to <span className={styles.name}>TIH Tennis</span></h1>
      <p>
        Improve your tennis skills with a wide variety of options from private
        lessons, renting a court to group classes.
      </p>
      <div className={styles.homeBody}>
        <div className={styles.boxContainer}>
          <BoxCard
            title="Juniors"
            description="Whether your kiddo is just starting or advanced we have something for them!"
            style={styles.boxCard}
            link="/juniors"
          />
          <BoxCard
            title="Adults"
            description="Looking for personal instruction or group classes we have something for everyone at any level"
            style={styles.boxCard}
            link="/adults"
          />
        </div>
      </div>
    </div>
  );
}
