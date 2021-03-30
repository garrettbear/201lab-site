import Head from "next/head";
import { useAmp } from "next/amp";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";

export const config = {
  amp: true,
};

export default function IndexPage() {
  const isAmp = useAmp();

  return (
    <Layout>
      <Head>
        <title>201 Lab</title>
      </Head>
      <Navbar>
        <div>
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
        </div>
        <div className="links">
          <Link href="/work?amp=1">
            <a className="nav-link">Work</a>
          </Link>
          <Link href="/contact?amp=1">
            <a className="nav-link">Contact</a>
          </Link>
        </div>
      </Navbar>
      <div>
        <div className="main-container">
          <div className="image-container">
            <div className="section-image">
              <Link href="/work/hold-me-down?amp=1">
                <a>
                  <amp-img
                    alt="Hold Me Down"
                    layout="flex-item"
                    width="400"
                    height="400"
                    src="/images/project-1.jpg"
                  />
                </a>
              </Link>
            </div>
            <div className="section-image">
              <Link href="/work/conform-the-people?amp=1">
                <a>
                  <amp-img
                    alt="Conform The People"
                    layout="flex-item"
                    width="400"
                    height="400"
                    src="/images/project-2.jpg"
                  />
                </a>
              </Link>
            </div>
            <div className="section-image">
              <Link href="/work/goodies?amp=1">
                <a>
                  <amp-img
                    alt="Goodies"
                    layout="flex-item"
                    width="400"
                    height="400"
                    src="/images/project-3.jpg"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="image-container">
            <div className="section-image">
              <Link href="/work/pasadena-leisure-club?amp=1">
                <a>
                  <amp-img
                    alt="Pasadena Leisure Club"
                    layout="flex-item"
                    width="400"
                    height="400"
                    src="/images/project-4.jpg"
                  />
                </a>
              </Link>
            </div>
            <div className="section-image">
              <Link href="/work/stone-and-mist?amp=1">
                <a>
                  <amp-img
                    alt="Stone and Mist"
                    layout="flex-item"
                    width="400"
                    height="400"
                    src="/images/project-5.jpg"
                  />
                </a>
              </Link>
            </div>
            <div className="section-image">
              <Link href="/work/ecomrush?amp=1">
                <a>
                  <amp-img
                    alt="EcomRush"
                    layout="flex-item"
                    width="400"
                    height="400"
                    src="/images/project-6.jpg"
                  />
                  `
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        @font-face {
          font-family: Eurostile-Extended;
          src: url("/fonts/eurostile-extended.ttf");
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
        .links {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-link:hover {
          text-decoration: underline;
        }
        .section-image {
          padding: 10px 10px;
        }
        .section-image:hover {
          opacity: 0.5;
          cursor: pointer;
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
        .main-container {
          display: flex;
          flex-direction: column;
          background-color: #eeeee8;
          align-items: center;
          padding: 4em;
        }
        .image-container {
          display: flex;
          flex-direction: row;
        }
        .image-link {
          position: absolute;
          width: 400px;
          height: 430px;
        }
      `}</style>
    </Layout>
  );
}
