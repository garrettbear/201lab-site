import Head from "next/head";
import { useAmp } from "next/amp";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import Section from "../components/Section";

export const config = {
  amp: true,
};

export default function IndexPage() {
  const isAmp = useAmp();

  return (
    <Layout>
      <Head>
        <title>201 Lab</title>
        <script
          async
          custom-element="amp-font"
          src="https://cdn.ampproject.org/v0/amp-font-0.1.js"
        ></script>
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
      <div className="header-container">
        <amp-img
          alt="Hold Me Down"
          width="400"
          height="250"
          layout="responsive"
          src="/images/HMD.jpg"
        />
        <div className="header-title">
          <amp-fit-text width="350" height="200" layout="responsive">
            Establish a brand under one roof.
          </amp-fit-text>
        </div>
      </div>
      <Section>
        <div className="section-text">
          <h1>About Us</h1>
          <p>
            201 Lab builds consumer brands from idea to finished products
            shipped to the customer. Our team specializes most in health and
            beauty products. We cover additional industries such as home and
            apparel.
          </p>
          <p>
            Our services are offered as a complete package to create the most
            efficient process. We help make brands profitable faster at any size
            utilizing 201 Lab as a parent company. Available a la carte as well.
          </p>
        </div>
        <div className="section-image">
          <amp-img
            alt="Brand Image"
            layout="flex-item"
            width="650"
            height="700"
            src="/images/DSC.jpg"
          />
        </div>
      </Section>
      <div className="section-small">
        <h1>We are a brand incubator.</h1>
        <p>
          Design, Development, Production, Photography, Research, Shipping,
          Technology, Video
        </p>
      </div>
      <div className="services">
        <div>
          <h1>Services</h1>
        </div>
        <div className="text-container">
          <div className="services-text">
            <div className="services-title">
              <h3>Design &amp; Content Creation</h3>
            </div>
            <div className="services-description">
              <p>
                It all begins with an idea and a story, then our designers get
                hard at work with branding, packaging, web design, and content
                design. Once design is complete, we begin working on content
                creation and that includes studio and lifestyle
                photography/video.
              </p>
            </div>
          </div>
          <div className="services-text">
            <div className="services-title">
              <h3>Development &amp; Technology</h3>
            </div>
            <div className="services-description">
              <p>
                Our developers specialize in e-commerce and retail store
                technology. From building sites to installing network, we cover
                all your technology needs.
              </p>
            </div>
          </div>
          <div className="services-text">
            <div className="services-title">
              <h3>Product R&amp;D</h3>
            </div>
            <div className="services-description">
              <p>
                With one of our founders being a skin and health chemist, we
                specialize our focus developing skin, hair, and body care
                products. All of our formulas are researched to use natural and
                lab created ingredients that have proven safety and efficacy.{" "}
              </p>
            </div>
          </div>
          <div className="services-text">
            <div className="services-title">
              <h3>Production &amp; Operations</h3>
            </div>
            <div className="services-description">
              <p>
                We’ve been through this process with clients countless times and
                have established relationships with manufacturers offering high
                quality products with quick turn around. Our products are made
                in the USA, but some ingredients and components require to be
                imported.
                <br />
                <br />
                When products are ready, we handle all the packing and shipping
                for online and wholesale orders.
              </p>
            </div>
          </div>
          <div className="services-text">
            <div className="services-title">
              <h3>Marketing &amp; Sales</h3>
            </div>
            <div className="services-description">
              <p>
                From social media to PR, we make sure to draw the appropriate
                audience to our brands.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link href={isAmp ? "/contact?amp=1" : "/contact"}>
            <a>
              <button>WORK WITH US</button>
            </a>
          </Link>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        body {
          color: black;
        }
        h1 {
          font-size: 3rem;
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
        .header-container {
          position: relative;
        }
        .header-title {
          position: absolute;
          color: white;
          top: 3%;
          left: 10%
          width: 80%;
          text-align: center
        }
        .section-image {
          align-items: right;
        }
        .section-text {
          padding: 2em 3em;
          line-height: 2em;
          color: black;
        }
        
        .section-small {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15em 10em;
          color: black;
        }
        .services {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #eeeee8;
          padding: 5em;
        }
        .services-text {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          width: 85%;
          color: black;
          margin: 0 auto;
        }
        h3 {
          font-size: 2rem;
        }
        .services-title {
          font-size: 2rem;
          width: 30%;
          padding: .5rem;
        }
        .services-description {
          width: 70%;
          padding: .5rem;
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
  );
}
