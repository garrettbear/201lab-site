import Head from "next/head";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function EcomRush() {
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
          <h1>EcomRush</h1>
          <p>
            EcomRush is our tech center here at 201 Lab. Our in-house developers
            build apps to support our brands.
          </p>
        </div>
        <div>
          <Link href="https://ecomrush.com">
            <a target="_blank" rel="noreferrer noopener">
              <button>VISIT SITE</button>
            </a>
          </Link>
        </div>
        <div className="work-pagination">
          <Link href="/work/stone-and-mist">
            <a className="work-link">{"<"} Stone &amp; Mist</a>
          </Link>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
