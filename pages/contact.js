import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'

export const config = {
  amp: true,
}

export default function IndexPage() {
  const isAmp = useAmp()

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
              src='/images/201lablogo.png'
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
          <h1>Contact</h1>
          <div className="contact-info">
          <p>Garrett Whisten</p>
          <p>Email: garrett@201lab.com</p> 
          </div>
        </div>
        <div className="section-image">
          <amp-img
            alt="Brand Image"
            layout="flex-item"
            width="650"
            height="700"
            src="/images/liquid.jpg"
          />
        </div>
      </div> 
      <Footer />
      <style jsx>{`
        @font-face {
          font-family: Eurostile-Extended;
          src: url('../fonts/eurostile-extended.ttf');
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
        .section-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 50%;
          color: black;
        }
        .section-container {
          display: flex;
          justify-content: space-between;
          background-color: #eeeee8;
          padding: 3em;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          align-items: center;
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
      `}</style>
    </Layout>
  )
}
