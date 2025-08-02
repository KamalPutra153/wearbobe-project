import Head from "next/head";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Image from "next/image";
import bestSellers from "../data/bestSellers.json";
import listMidSeason from "../data/listMidSeason.json";

export default function KoleksiTopi() {
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
            src="/assets/img/hero/6.png"
            height={750}
            width={750}
            alt="Hero Image"
          />
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
        </div>
      </section>

      {/* Mid Season Collection Section */}
      <section className="mid-season-section">
        <div className="mid-season-card">
          <h2 className="mid-season-title">Mid Year Launch</h2>
          <div className="products-grid">
            {listMidSeason.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-image-container">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-material">{product.material}</p>
                  <p className="product-color">{product.color}</p>
                  <p className="product-lining">{product.lining}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h1>Full Catalog From</h1>
          </div>
          <div className="see-more-container">
            <button className="see-more-btn">Tokopedia</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
