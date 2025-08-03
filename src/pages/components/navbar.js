import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navContainer">
        <div className="navLeft">
          <div className="">
            <Image
              src={"/assets/img/icon/home.png"}
              width={18}
              height={18}
              alt="Home Icon"
            />
            <Link href="/" legacyBehavior>
              <a className="navItem home ms-1">HOME</a>
            </Link>
          </div>
          <div className="navItem">
            <Image
              src={"/assets/img/icon/koleksi topi.png"}
              width={20}
              height={20}
              alt="Hat Icon"
            />
            <Link href="/koleksitopi" legacyBehavior>
              <a className="navItem koleksi ms-1">KOLEKSI TOPI</a>
            </Link>
          </div>
        </div>

        <div className="logo">
          <Image
            src="/assets/img/icon/logo.png"
            width={75}
            height={75}
            alt="Wearbobe Logo"
          />
        </div>

        <div className="navRight">
          <div>
            <Image
              src={"/assets/img/icon/sejarah.png"}
              width={18}
              height={18}
              alt="History Icon"
            />
            <Link href="/sejarah" legacyBehavior>
              <a className="navItem sejarah ms-1">SEJARAH</a>
            </Link>
          </div>
          <div>
            <Image
              src={"/assets/img/icon/kolaborasi.png"}
              width={18}
              height={18}
              alt="Collaboration Icon"
            />
            <Link href="/kolaborasi" legacyBehavior>
              <a className="navItem kolaborasi ms-1">KOLABORASI</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
