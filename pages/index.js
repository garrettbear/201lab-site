import Image from "next/image";
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
          <Image
            className="logo"
            width={160}
            height={66}
            alt="201 Lab"
            src="/images/201lablogo.png"
          />
        </h1>
        <div className="text-wrapper">
          <h3>Referrals Only</h3>
          <p>
            201 Lab is a technology company that specializes in{" "}
            <strong>
              web design, web development, systems, networking, and security
            </strong>
            . The company was founded with the goal of helping businesses and
            organizations to improve their online presence and protect their
            networks from cyber threats.
          </p>
          <p>
            With a team of experienced professionals, 201 Lab offers a range of
            services that can help clients to design and develop user-friendly
            websites, streamline their business processes, and enhance their
            network security. The company's experts have extensive knowledge of
            the latest technologies and trends in the industry, and are
            committed to delivering high-quality solutions that meet the unique
            needs of each client.
          </p>
          <p>
            In addition to its core services, 201 Lab also offers support and
            maintenance services to ensure that its clients' systems are always
            up and running smoothly. The company's team is available to provide
            assistance and troubleshooting support whenever needed, and can help
            clients to keep their systems and networks secure and protected
            against potential threats.
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
