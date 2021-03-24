import Head from "next/head";
import Layout from "../components/Layout";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>201 Lab</title>
        <meta property="og:title" content="201 Lab" key="title" />
      </Head>
      <div className="main-wrapper">
        <h1>
          <img className="logo" alt="201 Lab" src="/images/201lablogo.png" />
        </h1>
        <div className="text-wrapper">
          <h3>Referrals Only</h3>
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
    </Layout>
  );
}
