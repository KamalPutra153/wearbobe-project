import Head from "next/head";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";
import bestSellers from "../data/bestSellers.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Wearbobe & Co</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      {/* SECTION HERO */}
      <section className="hero">
        <div className="heroContent img-fluid">
          <Image
            src="/assets/img/hero/3.jpeg"
            height={1000}
            width={1000}
            alt="Hero Image"
          />
        </div>
      </section>

      {/* SECTION COLABORATION */}
      <section className="collaboration-section">
        <h1 className="title m-5">
          Wearbobe bekerja sama dengan musisi dan konten kreator
        </h1>
        <div className="collaboration-card">
          <div className="artist-section">
            <div className="artist-image-left">
              <Image
                src="/assets/img/artist/1.jpg"
                alt="Jimi Multhazam Performance"
                width={280}
                height={350}
                className="artist-image"
              />
            </div>
            <div className="artist-info-container">
              <div className="artist-info-top">
                <h2 className="artist-name">Jimi Multhazam</h2>
                <p className="date">5-18-2023</p>
                <p className="product">Spencer Newsboy Cap</p>
              </div>
              <div className="artist-info-bottom">
                <h2 className="artist-name">Rama Dhista Akbar</h2>
                <p className="date">5-18-2023</p>
                <p className="product">Sailor Hat</p>
              </div>
            </div>
            <div className="artist-image-right">
              <Image
                src="/assets/img/artist/3.jpg"
                alt="Rama Dhista Akbar in Studio"
                width={280}
                height={350}
                className="artist-image"
              />
            </div>
          </div>
          <div className="see-more-container">
            <Link href="/kolaborasi">
              <button className="see-more-btn">See More</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="best-sellers-section">
        <div className="best-sellers-card">
          <h2 className="best-sellers-title">Best Sellers</h2>

          <div className="products-grid">
            {bestSellers.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-image-container">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-details">
                      <p className="product-material">{product.material}</p>
                      <p className="product-color">{product.color}</p>
                      <p className="product-lining">{product.lining}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="best-sellers-see-more">
            <Link href="/koleksitopi">
              <button className="see-more-btn">See More</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="origin-story-section">
        <div className="origin-content">
          <div className="origin-text">
            <h2 className="origin-title">Awal mula berdirinya Wearbobe</h2>
            <p className="origin-description">
              Usaha ini dimulai sama Faizal Budiman dari tahun 2015, awalnya
              simpel aja, jual barang-barang yang dia sendiri suka pake,
              especially daily wear yang emang sesuai gayanya. Lo bisa langsung
              cek tokonya di THE HALLWAY SPACE, Pasar Kosambi, Blok D No.6a
              Lt.1, Kb. Pisang, Sumur Bandung, Kota Bandung.
            </p>
            <div className="origin-see-more">
              <Link href="/sejarah" legacyBehavior>
                <button className="see-more-btn">See More</button>
              </Link>
            </div>
          </div>
          <div className="origin-image">
            <div className="origin-image-container">
              <Image
                src="/assets/img/artist/FaizalBudiman.jpeg"
                alt="Faizal Budiman - Founder of Wearbobe"
                width={400}
                height={500}
                className="founder-image"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
