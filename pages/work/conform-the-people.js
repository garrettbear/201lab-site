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
          <h1>Conform The People</h1>
          <p>
            Our love for fashion, style, and life are the foundation of Conform
            The People. We wanted to do something in life that would make us
            truly happy aside from having each other. We found that common
            ground in fashion. We operate under the name SNM Group LLC (Saturday
            Night Morning).
            <br></br>
            <br></br>
            The idea was to create an online retail website that exudes
            confidence to the audiences that wanted a more sophisticated modern
            image. The item can be versatile and align in the image of being
            romantic, classy yet fashionable. Tailored to fit the women who do
            not feel like they fit into any traditional age group yet. Our
            clothing is not mass produced and carefully hand-picked. We only
            offer a few dozen of each item. Once they are gone, they are gone.
            We have new arrivals often but a large drop in each collection.
          </p>
          <h2>Balance</h2>
          <p>
            We are much alike in so many ways, but yet so different. From our
            personalities, hobbies to our style. But just cause those things are
            different, it doesn’t mean we aren’t compatible. Our individuality
            balances each other out. The same goes for clothing. Just because
            one item of clothes is meant to be one way, doesn’t mean it should
            be. It’s as important as pairing it with the right type of jacket or
            accessory. We hope that is what you do with our clothing. Look to
            our photos as an example, but never as an obligation. There is no
            right way to wear our clothing, just like people, clothing is
            diverse too.
          </p>
          <p>Be the new normal - BE YOU.</p>
          <h2>Earth-Friendly Practices</h2>
          <p>
            Our actions are the future and we want do our piece any way we can.
            We won't mass produce, reducing waste in unwanted items. We only
            offer a few dozen of each clothing item. In the future, we hope to
            reduce our plastic bag usage for the packaging of our products with
            more of a biodegradable source of bags that will still protect our
            product when it get’s to you. We will continue to seek out products
            to get us there, sustainability, recycled products, and less overly
            packaging. Together we are socially responsible for this great Earth
            of ours. Together we will reduce waste!
          </p>
        </div>
        <div>
          <Link href="https://conformthepeople.com">
            <a target="_blank" rel="noreferrer noopener">
              <button>VISIT SITE</button>
            </a>
          </Link>
        </div>
        <div className="work-pagination">
          <Link href="/work/hold-me-down?amp=1">
            <a>{"<"} Hold Me Down</a>
          </Link>
          <Link href="/work/goodies?amp=1">
            <a>goodies {">"}</a>
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
