import Image from "next/image";

const ImageSlider = ({ images }) => {
  return (
      <figure>
        {images.map((obj) => (
          <Image src={obj.pic} alt={obj.desc} />
        ))}
      </figure>
  );
};

export default ImageSlider;
