import BoxCard from "../components/BoxCard";
import ImageSlider from "../components/ImageSlider";

import styles from "../styles/Home.module.css";

import pic1 from "../public/stock-photos/photo1.jpg";
import pic2 from "../public/stock-photos/photo2.jpg";
import pic3 from "../public/stock-photos/photo3.jpg";

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

      <div className={styles.slideshow}>
        <ImageSlider
          images={[
            { pic: pic1, desc: "spinning tennis ball" },
            { pic: pic2, desc: "balls on court" },
            { pic: pic3, desc: "court from above" }
          ]}
          styles={[styles.slideshowSlider, styles.slide]}
        />
      </div>

      <div className={styles.boxContainer}>
        <BoxCard
          title="Juniors"
          description="Whether your kiddo is just starting or advanced we have something for them!"
          style={styles.boxCard}
          link={"/juniors"}
        />
        <BoxCard
          title="Adults"
          description="Looking for personal instruction or group classes we have something for everyone at any level!"
          style={styles.boxCard}
          link={"/adults"}
        />
        <BoxCard
          title="Rent a Court"
          description="Book a court time now!"
          style={styles.boxCard}
          link={"/adults"}
        />
        <BoxCard
          title="Staff"
          description="Meet our Staff"
          style={styles.boxCard}
          link={"/staff"}
        />
      </div>
    </div>
  );
}
