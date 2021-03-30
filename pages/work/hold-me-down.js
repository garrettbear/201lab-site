import Head from "next/head";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function HoldMeDown() {
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
      <div className="work-container">
        <div className="work-text">
          <h1>Hold Me Down</h1>
          <p>
            Inspired by the distinct streetwear of LA our products reflect the
            city's rich diversity and help to elevate everyone's unique
            hairstyle. The city's sneaker culture further informed our drive to
            take a holistic approach to create blends that address the needs of
            all hair types. Our California laboratories mesh naturally sourced
            ingredients with our expert chemists' innovative approach to
            synthesize hair products as diverse as the Golden State.
          </p>
        </div>
          <Link href="https://hmdproduct.com">
            <a target="_blank" rel="noreferrer noopener">
              <button>VISIT SITE</button>
            </a>
          </Link>
        <div className="hmd-pagination">
          <Link href="/work/conform-the-people">
            <a className="work-link">Conform The People {">"}</a>
          </Link>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
