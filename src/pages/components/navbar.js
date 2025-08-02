import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navContainer">
        <div className="navLeft">
          <Link href="/">
            <a className="navItem home">HOME</a>
          </Link>
          <Link href="/koleksitopi">
            <a className="navItem koleksi">KOLEKSI TOPI</a>
          </Link>
        </div>

        <div className="logo">
          <div className="logoCircle">
            <span className="logoText">WC</span>
          </div>
          <div className="brandName">WEARBOBE & CO</div>
          <div className="tagline">EST 2015</div>
          <div className="tagline">EXPRESSING YOURSELF</div>
        </div>

        <div className="navRight">
          <Link href="/sejarah">
            <a className="navItem sejarah">SEJARAH</a>
          </Link>
          <Link href="/kolaborasi">
            <a className="navItem kolaborasi ">KOLABORASI</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
