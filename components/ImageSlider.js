import Image from "next/image";

const ImageSlider = ({ images }) => {
  return (
    <div>
      <figure>
        {images.map((obj) => (
          <Image src={obj.pic} alt={obj.desc} />
        ))}
      </figure>
    </div>
  );
};

export default ImageSlider;
