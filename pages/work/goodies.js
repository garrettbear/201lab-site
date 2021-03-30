import Head from "next/head";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function Goodies() {
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
          <h1>Goodies</h1>
          <p>Unique goods. Nothing over $25.</p>
        </div>
        <div>
          <Link href="https://goodies.la">
            <a target="_blank" rel="noreferrer noopener">
              <button>VISIT SITE</button>
            </a>
          </Link>
        </div>
        <div className="work-pagination">
          <Link href="/work/conform-the-people">
            <a className="work-link">{"<"} Conform The People</a>
          </Link>
          <Link href="/work/pasadena-leisure-club">
            <a className="work-link">Pasadena Leisure Club {">"}</a>
          </Link>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
