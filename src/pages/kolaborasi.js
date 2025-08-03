import Head from "next/head";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Image from "next/image";
import listartist from "../data/listartist.json";
import Link from "next/link";

export default function Kolaborasi() {
  return (
    <>
      <Head>
        <title>Koleksi Topi | Wearbobe & Co</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      {/* SECTION HERO */}
      <section className="hero">
        <div className="heroContent img-fluid">
          <Image
            src="/assets/img/hero/2.jpeg"
            height={1000}
            width={1000}
            alt="Hero Image"
          />
          <div class="position-absolute kolaborasi-heroOverlayText">
            <h1 class="text-white fw-bold">
              NOT JUST A CAP, ITS YOUR IDENTITY
            </h1>
          </div>
        </div>
      </section>

      {/* SECTION COLLABORATION */}
      <section className="collabSection">
        <h1 className="title">
          Wearbobe juga bekerja sama dengan musisi dan konten kreator, seperti
          Morfem, Jimi Multazam, Kuya Sunda, Danang Goodluck, dan Itutoma, DLL.
        </h1>
        <div className="collabSection-content mt-5">
          <div className="collabSection__grid">
            {listartist.slice(0, 3).map((artist) => (
              <div key={artist.id} className="collabSection__card">
                <div className="collabSection__imageWrapper">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={300}
                    height={300}
                    className="collabSection__image"
                  />
                  <div className="collabSection__info">
                    <h3 className="collabSection__name">{artist.name}</h3>
                    <div className="collabSection__details">
                      <p>{artist.tanggal}</p>
                      <p>{artist.barang}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="collabSection__highlight">
          <div className="collabSection__artistRow">
            <div className="collabSection__artistImg__left">
              <Image
                src="/assets/img/artist/1.jpg"
                alt="Jimi Multhazam Performance"
                width={280}
                height={350}
              />
            </div>

            <div className="collabSection__artistInfo">
              <div className="collabSection__artistBlock__top">
                <h2>Jimi Multhazam</h2>
                <p className="date">5-18-2023</p>
                <p className="artist">Spencer Newsboy Cap</p>
              </div>
              <div className="collabSection__artistBlock__bottom">
                <h2>Rama Dhista Akbar</h2>
                <p className="date">5-18-2023</p>
                <p className="artist">Sailor Hat</p>
              </div>
            </div>

            <div className="collabSection__artistImg__right">
              <Image
                src="/assets/img/artist/3.jpg"
                alt="Rama Dhista Akbar in Studio"
                width={280}
                height={350}
              />
            </div>
          </div>
        </div>
        <div className="collabSection-content">
          <div className="collabSection__grid">
            {listartist.slice(3, 6).map((artist) => (
              <div key={artist.id} className="collabSection__card">
                <div className="collabSection__imageWrapper">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={300}
                    height={300}
                    className="collabSection__image"
                  />
                  <div className="collabSection__info">
                    <h3 className="collabSection__name">{artist.name}</h3>
                    <div className="collabSection__details">
                      <p>{artist.tanggal}</p>
                      <p>{artist.barang}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h1>Follow us on</h1>
        </div>
        <div className="see-more-container">
          <a
            href="https://www.instagram.com/wearbobe/"
            target="_blank"
            legacyBehavior
          >
            <button className="see-more-btn">Instagram</button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
