import Link from "next/link"

export default function Navbar () {
    return (
        <div className="navbar">
          <Link href="/">
          <a>
            <img
              className="logo"
              alt="201 Lab"
              src="/images/201lablogo.png"
            />
          </a>
        </Link>
        <div className="links">
          <Link href="/work">
            <a className="nav-link">Work</a>
          </Link>
          <Link href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </div>
        </div>
    );
}