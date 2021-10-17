import Head from "next/head";
import About from "../components/About";
import Banner from "../components/Banner";
import Club from "../components/Club";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Milestones from "../components/Milestones";
import Roadmap from "../components/Roadmap";
import Teams from "../components/Teams";

export default function Home() {
  return (
    <div className="bg-fblue">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Angkor&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />

      {/* Still need CountDown & Mint Button */}
      <Banner />
      <About />
      <Milestones />
      <Club />
      <Roadmap />
      <Teams />
      <FAQ />
      <Footer />
    </div>
  );
}
