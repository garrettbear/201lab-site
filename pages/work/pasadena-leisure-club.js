import Head from "next/head";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function PasadenaLeisureClub() {
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
          <h1>Pasadena Leisure Club</h1>
          <p>
            Pasadena Leisure Club is a small collection inspired by and
            originating from Pasadena, California.{" "}
          </p>
          <p>
            Just outside of Los Angeles, the lifestyle in Pasadena is laid back,
            with a lush landscape that sits at the base of the San Gabriel
            Mountains. Wild peacocks roam the streets making a hell of a racket
            while residents read books on front porches and barbecue in
            backyards.
          </p>
          <p>
            Pasadena is home to the world famous Rose Bowl Stadium, and well
            known for both its sports and its leisure. PLC draws on inspiration
            from professional sports of the 80's and 90's especially, but also
            is heavily influenced by American recreations of every variety.{" "}
          </p>
          <p>Pasadena Leisure Club is and will always be made in the USA.</p>
        </div>
        <div>
          <Link href="https://pasadenaleisureclub.com/">
            <a target="_blank" rel="noreferrer noopener">
              <button>VISIT SITE</button>
            </a>
          </Link>
        </div>
        <div className="work-pagination">
          <Link href="/work/goodies">
            <a className="work-link">{"<"} goodies</a>
          </Link>
          <Link href="/work/stone-and-mist">
            <a className="work-link">Stone &amp; Mist {">"}</a>
          </Link>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
