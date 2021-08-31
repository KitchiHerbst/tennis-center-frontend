import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Tristons Tennis Center</h1>
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
