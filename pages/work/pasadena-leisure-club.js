import Head from "next/head";
import { useAmp } from "next/amp";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

export const config = {
  amp: true,
};

export default function HoldMeDown() {
  const isAmp = useAmp();

  return (
    <Layout>
      <Head>
        <title>201 Lab</title>
      </Head>
      <Navbar>
        <Link href="/">
          <a>
            <amp-img
              className="logo"
              layout="flex-item"
              alt="201 Lab"
              src="/images/201lablogo.png"
            />
          </a>
        </Link>
        <div className="links">
          <Link href="/work?amp=1">
            <a className="nav-link">Work</a>
          </Link>
          <Link href="/contact?amp=1">
            <a className="nav-link">Contact</a>
          </Link>
        </div>
      </Navbar>
      <div className="section-container">
        <div className="section-text">
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
          <Link href="/work/goodies?amp=1">
            <a>{"<"} goodies</a>
          </Link>
          <Link href="/work/stone-and-mist?amp=1">
            <a>Stone &amp; Mist {">"}</a>
          </Link>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        @font-face {
          font-family: Eurostile-Extended;
          src: url("../public/fonts/eurostile-extended.ttf");
        }
        body {
          color: black;
          font-family: Eurostile-Extended;
        }
        h1 {
          font-size: 4em;
          margin-bottom: 0.7em;
          color: black;
        }
        .logo {
          height: 80px;
          width: 200px;
        }
        a {
          color: black;
          text-decoration: none;
          padding: 0 10px;
        }
        a:hover {
          text-decoration: underline;
        }
        .links {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-link:hover {
          text-decoration: underline;
        }
        .section-text {
          color: black;
          width: 60%;
          line-height: 40px;
        }
        .section-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          background-color: #eeeee8;
          padding: 5em 5em;
        }
        button {
          margin: 5em;
          background-color: black;
          color: white;
          padding: 2em 3em;
          border: none;
          font-size: 0.75em;
          font-weight: bold;
          cursor: pointer;
        }
        button:hover {
          opacity: 0.5;
        }
        .work-pagination {
          width: 90%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      `}</style>
    </Layout>
  );
}
