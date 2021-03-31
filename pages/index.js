import Head from "next/head";
import Layout from "../components/Layout";
<<<<<<< HEAD
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import Section from "../components/Section";
=======
>>>>>>> 08d574e3ab527949a99ee75a34bc23b4ccb10da5

import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import Section from "../components/Section";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
<<<<<<< HEAD
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
      </style>
      <link rel="icon" type="image/png" href="/images/201-lab-favicon.png" />
        <title>201 Lab</title>
<<<<<<< HEAD
      </Head>
      <Navbar />
      <div className="header-container">
        <img
          className="header-image"
          alt="Hold Me Down"
          src="/images/HMD.jpg"
        />
        <div className="header-title">
          <h1 className="header-text">
            Establish a brand under one roof.
          </h1>
        </div>
      </div>
      <Section>
        <div className="section-text">
          <h1 className="about-title">About Us</h1>
=======
        <meta property="og:title" content="201 Lab" key="title" />
      </Head>
      <div className="main-wrapper">
        <h1>
          <img className="logo" alt="201 Lab" src="/images/201lablogo.png" />
        </h1>
        <div className="text-wrapper">
          <h3>Referrals Only</h3>
>>>>>>> 08d574e3ab527949a99ee75a34bc23b4ccb10da5
=======
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
        </style>
        <link rel="icon" type="image/png" href="/images/201-lab-favicon.png" />
        <title>201 Lab</title>
      </Head>
      <Navbar />
      <div className="header-container">
        <img
          className="header-image"
          alt="Hold Me Down"
          src="/images/HMD.jpg"
        />
        <div className="header-title">
          <h1 className="header-text">Establish a brand under one roof.</h1>
        </div>
      </div>
      <Section>
        <div className="section-text">
          <h1 className="about-title">About Us</h1>

>>>>>>> 8f58782b1691edc5c2efd25371d790eeed1450e5
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
<<<<<<< HEAD
<<<<<<< HEAD
          <img
            className="about-image"
            alt="Brand Image"
            width="650"
            height="700"
            src="/images/DSC.jpg"
          />
=======
        <img
          className="about-image"
          alt="Brand Image"
          width="650"
          height="700"
          src="/images/DSC.jpg"
        />
>>>>>>> 8f58782b1691edc5c2efd25371d790eeed1450e5
      </Section>
      <div className="section-small">
        <h1 className="section-small-title">We are a brand incubator.</h1>
        <p className="section-small-text">
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
<<<<<<< HEAD
              <h3 className="services-title">Design &amp; Content Creation</h3>
=======
            <h3 className="services-title">Design &amp; Content Creation</h3>
>>>>>>> 8f58782b1691edc5c2efd25371d790eeed1450e5
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
<<<<<<< HEAD
              <h3 className="services-title">Development &amp; Technology</h3>
=======
            <h3 className="services-title">Development &amp; Technology</h3>
>>>>>>> 8f58782b1691edc5c2efd25371d790eeed1450e5
            <div className="services-description">
              <p>
                Our developers specialize in e-commerce and retail store
                technology. From building sites to installing network, we cover
                all your technology needs.
              </p>
            </div>
          </div>
          <div className="services-text">
<<<<<<< HEAD
              <h3 className="services-title">Product R&amp;D</h3>
=======
            <h3 className="services-title">Product R&amp;D</h3>
>>>>>>> 8f58782b1691edc5c2efd25371d790eeed1450e5
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
<<<<<<< HEAD
              <h3 className="services-title">Production &amp; Operations</h3>
=======
            <h3 className="services-title">Production &amp; Operations</h3>
>>>>>>> 8f58782b1691edc5c2efd25371d790eeed1450e5
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
<<<<<<< HEAD
              <h3 className="services-title">Marketing &amp; Sales</h3>
=======
            <h3 className="services-title">Marketing &amp; Sales</h3>
>>>>>>> 8f58782b1691edc5c2efd25371d790eeed1450e5
            <div className="services-description">
              <p>
                From social media to PR, we make sure to draw the appropriate
                audience to our brands.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Link href="/contact">
            <a>
              <button>WORK WITH US</button>
            </a>
          </Link>
        </div>
<<<<<<< HEAD
      </div>
      <Footer />
=======
      </div>
      <style jsx>{`
        .main-wrapper {
          min-height: 100vh;
          min-width: 100vw;
          padding: 10%;
          background-color: #eeeee8;
          color: black;
        }
        .text-wrapper {
          max-width: 630px;
          line-height: 1.5;
        }
        h3 {
          font-size: 1.3rem;
          margin-bottom: 0.7em;
          color: black;
        }
        .logo {
          width: 200px;
          height: auto;
        }
      `}</style>
>>>>>>> 08d574e3ab527949a99ee75a34bc23b4ccb10da5
=======
      </div>
      <Footer />
>>>>>>> 8f58782b1691edc5c2efd25371d790eeed1450e5
    </Layout>
  );
}
