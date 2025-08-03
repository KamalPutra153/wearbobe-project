import Head from "next/head";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Sejarah() {
  return (
    <>
      <Head>
        <title>Sejarah | Wearbobe & Co</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      {/* SECTION HERO */}
      <section className="hero">
        <div className="heroContent img-fluid">
          <Image
            src="/assets/img/hero/4.jpeg"
            height={1000}
            width={1000}
            alt="Hero Image"
          />
          <div class="position-absolute text-overlay">
            <h1 class="text-white text-end fw-bold mb-0">NOT JUST A CAP</h1>
            <h1 class="text-white text-end fw-bold">ITS YOUR IDENTITY</h1>
          </div>
        </div>
      </section>

      {/* SECTION SEJARAH */}
      <section className="sejarah-section">
        <div className="sejarah-content row">
          <div className="col-9">
            <h1>Awal mula berdirinya Wearbobe</h1>
            <p>
              Usaha ini dimulai sama Faizal Budiman dari tahun 2015, awalnya
              simpel aja, jual barang-barang yang dia sendiri suka pake,
              especially daily wear yang emang sesuai gayanya. Jam
              operasionalnya dari jam 10 pagi sampai 9 malam, buka tiap hari,
              yes termasuk tanggal merah pun tetep on. Sekarang timnya udah ada
              4 orang, masing-masing pegang role beda-beda kayak content
              creator, host live, sampe crew store. Produk andalannya topi,
              dengan harga mulai dari Rp119.000 sampai Rp235.000, worth it
              banget buat lo yang cari style old-school tapi tetep relevan. Lo
              bisa langsung cek tokonya di THE HALLWAY SPACE, Pasar Kosambi,
              Blok D No.6a Lt.1, Kb. Pisang, Sumur Bandung, Kota Bandung.
            </p>
          </div>
          <div className="sejarah-image col-2">
            <Image
              src="/assets/img/hero/hatwithhead.png"
              alt="Topi Wearbobe"
              width={300}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* SECTION ABOUT FAIZAL */}
      <section className="about-faizal-section">
        <div className="about-faizal-content">
          <div className="content-image">
            <Image
              src="/assets/img/artist/FaizalBudiman.jpeg"
              alt="Faizal Budiman - Founder of Wearbobe"
              width={400}
              height={500}
              className="founder-image"
            />
          </div>
          <div className="content-text">
            {/* <h1>Tentang Sarah Adadeh</h1>
            <p>
              Sarah Adadeh, yang lebih dikenal dengan panggilan Rahhh, adalah
              salah satu Liaison Office saat event NICYMS IICYMS & WRCSO 2025 di
              UNIKOM yang terletak di Bandung. Pada saatt event itu, sangat
              ramai orang yang datang mengikuti event nya, mulai dari peserta
              Indonesia, Malaysia, Vietnam dan bahkan Turkmenistan. Sarah
              memiliki tugas untuk menjadi LO Dokumentasi (kalau gak salah) di
              Opening dan juga Closing, di hari ke 2 sarah ditugaskan menjadi LO
              juri yang dimana bertugas untuk menemani juri menjurikan setiap
              peserta pada saat itu. Pada saat menjadi LO tersebut outfit dia
              selalu keren dan kecehh, dia memiliki akun Instagram @sarah.adadeh
              .
            </p> */}
            <h1>Tentang Faizal Budiman</h1>
            <p>
              Faizal Budiman, yang lebih dikenal dengan panggilan Bob, adalah
              salah satu founder Hallway Space Bandung yang terletak di lantai 2
              pasa Kosambi. Hallway akhir-akhir ini menjadi ramai dan dipenuhi
              tenat-tenant yang bervariatif, dari ramen, cloting brand sampai
              toko music. Bob juga memiliki banyak usaha lain, 2 diantaranya
              adalah brand headwear Beatbobe dan Bakmi Badami yang bukanya
              sesuka hati tapi sempat viral di Tiktok. Dia memiliki akun
              Instagram @beatbobe_.
            </p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="instagram-section">
        <div className="instagram-content">
          <div className="left">
            <Image
              src="/assets/img/artist/wearbobenya.png"
              height={300}
              width={300}
              alt="Instagram Image"
            />
            <div className="see-more-container mt-3">
              <Link href="https://www.instagram.com/wearbobe/" target="_blank">
                <button className="see-more-btn">See More</button>
              </Link>
            </div>
          </div>
          <div className="right">
            <Image
              src="/assets/img/artist/beatbob.png"
              height={350}
              width={350}
              alt="Instagram Image"
            />
            <div className="see-more-container mt-3">
              <Link href="https://www.instagram.com/beatbobe_/" target="_blank">
                <button className="see-more-btn">See More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
