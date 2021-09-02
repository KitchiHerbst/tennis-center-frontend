import React, { useState } from "react";
import Image from "next/image";

const ImageSlider = ({ images, styles }) => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      4000
    );
    return () => {};
  }, [index]);

  return (
    <div
      className={styles[0]}
      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    >
      {images.map((obj, index) => {
        return (
          <Image
            src={obj.pic}
            alt={obj.desc}
            className={styles[1]}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ImageSlider;
