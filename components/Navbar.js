import Link from "next/link";
import logo from "../public/logo.png"
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    
  return (
    <nav className='nav-bar'>
      <div className="logo">
        <img source={logo}/>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>Lessons and Classes</a>
      </Link>
      <Link href="/staff">
        <a>Staff</a>
      </Link>
    </nav>
  );
};

export default Navbar;
