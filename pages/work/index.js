import Head from "next/head";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";
import Section from "../../components/Section";

export default function IndexPage() {
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
      <div>
        <div className="main-container">
          <div className="image-container">
            <div className="section-image">
              <Link href="/work/hold-me-down">
                <a>
                  <img
                    alt="Hold Me Down"
                    width="400"
                    height="400"
                    src="/images/project-1.jpg"
                  />
                </a>
              </Link>
            </div>
            <div className="section-image">
              <Link href="/work/conform-the-people">
                <a>
                  <img
                    alt="Conform The People"
                    width="400"
                    height="400"
                    src="/images/project-2.jpg"
                  />
                </a>
              </Link>
            </div>
            <div className="section-image">
              <Link href="/work/goodies">
                <a>
                  <img
                    alt="Goodies"
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
              <Link href="/work/pasadena-leisure-club">
                <a>
                  <img
                    alt="Pasadena Leisure Club"
                    width="400"
                    height="400"
                    src="/images/project-4.jpg"
                  />
                </a>
              </Link>
            </div>
            <div className="section-image">
              <Link href="/work/stone-and-mist">
                <a>
                  <img
                    alt="Stone and Mist"
                    width="400"
                    height="400"
                    src="/images/project-5.jpg"
                  />
                </a>
              </Link>
            </div>
            <div className="section-image">
              <Link href="/work/ecomrush">
                <a>
                  <img
                    alt="EcomRush"
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
    </Layout>
  );
}
