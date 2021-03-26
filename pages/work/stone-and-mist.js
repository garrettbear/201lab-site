import Head from "next/head";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function StoneAndMist() {
  return (
    <Layout>
      <Head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
      </style>
      <link rel="icon" type="image/png" href="/images/201-lab-favicon.png" />
        <title>201 Lab</title>
      </Head>
      <Navbar />
      <div className="small-container">
        <div className="work-text">
          <h1>Stone and Mist</h1>
          <h2>
            <i>{"[Coming Soon]"}</i>
          </h2>
          <p>
            Stone & Mist is a unisex aromatherapy and home goods that are made
            clean and conscious. Inspired by earth elements we bring
            invigorating fragrance and energy to you and your home.
          </p>
        </div>
        <div>
          <Link href="https://stoneandmist.co/">
            <a target="_blank" rel="noreferrer noopener">
              <button>VISIT SITE</button>
            </a>
          </Link>
        </div>
        <div className="work-pagination">
          <Link href="/work/pasadena-leisure-club">
            <a className="work-link">{"<"} Pasadena Leisure Club</a>
          </Link>
          <Link href="/work/ecomrush">
            <a className="work-link">EcomRush {">"}</a>
          </Link>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
