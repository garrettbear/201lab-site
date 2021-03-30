import Head from "next/head";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
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
      <div className="section-container">
        <div className="contact-text">
          <h1>Contact</h1>
          <div className="contact-info">
            <h3>contact@201lab.com</h3>
          </div>
        </div>
        <div>
          <img
            className="contact-image"
            alt="Brand Image"
            width="650"
            height="700"
            src="/images/liquid.jpg"
          />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
