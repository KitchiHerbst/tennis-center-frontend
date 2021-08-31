import Link from "next/link";
import Image from 'next/image'
import logo from "../public/logo.png";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <Image src={logo} alt="logo" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>Juniors</a>
      </Link>
      <Link href="/about">
        <a>Adults</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/staff">
        <a>Staff</a>
      </Link>
    </nav>
  );
};

export default Navbar;
