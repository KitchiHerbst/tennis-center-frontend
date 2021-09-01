import BoxCard from "../components/BoxCard";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

import pic1 from "../public/stock-photos/overhead-tennis-court.jpg";
import pic2 from "../public/stock-photos/tennis balls on court.jpg";
import pic3 from "../public/stock-photos/tennis-ball-spinning.jpg";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>
        Welcome to <span className={styles.name}>TIH Tennis</span>
      </h1>
      <p>
        Improve your tennis skills with a wide variety of options from private
        lessons, group classes or renting a court.
      </p>
      <div>
        Image slideshow placeholder
        <ImageSlider
          images={[
            { pic: pic1, desc: "spinning tennis ball" },
            { pic: pic2, desc: "balls on court" },
            { pic: pic3, desc: "court from above" },
          ]}
        />
      </div>

      <div className={styles.boxContainer}>
        <BoxCard
          title="Juniors"
          description="Whether your kiddo is just starting or advanced we have something for them!"
          style={styles.boxCard}
          link="/juniors"
        />
        <BoxCard
          title="Adults"
          description="Looking for personal instruction or group classes we have something for everyone at any level!"
          style={styles.boxCard}
          link="/adults"
        />
        <BoxCard
          title="Rent a Court"
          description="Book a court time now!"
          style={styles.boxCard}
          link="/adults"
        />
        <BoxCard
          title="Staff"
          description="Meet our Staff"
          style={styles.boxCard}
          link="/staff"
        />
      </div>
    </div>
  );
}
