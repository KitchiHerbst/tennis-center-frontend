import Link from "next/link";

const BoxCard = ({ title, description, style, link }) => {
  return (
    <Link href={link}>
      <div className={style}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default BoxCard;
