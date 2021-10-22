import Head from "next/head";
import About from "../components/About";
import Image from "next/image";
import Banner from "../components/Banner";
import Club from "../components/Club";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Milestones from "../components/Milestones";
import Roadmap from "../components/Roadmap";
import Teams from "../components/Teams";
import { useRouter } from "next/dist/client/router";
import logo from "../assets/logo.png";
import discord from "../assets/discord.svg";
import opensea from "../assets//opensea.png";
import twitter from "../assets/twitter.svg";
import favicon from "../assets/favicon.ico";
import animateScrollTo from "animated-scroll-to";

export default function Home() {
  return (
    <div className="bg-fblue flex flex-col">
      <Head>
        <title>RICH FXXK NFT</title>
        <link rel="icon" href={favicon} />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Angkor&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {/* 
      <Header /> */}
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-fblue shadow-md p-5 md:px-32">
        {/* Left */}
        <div className="flex items-center justify-center flex-row">
          <div
            onClick={() => router.push("/")}
            className="relative flex items-center h-10 cursor-pointer "
          >
            <Image
              src={logo}
              layout="fixed"
              objectFit="contain"
              width={50}
              height={50}
            />
          </div>
          <p className=" relative ml-2 mt-2 font-angkor items-center text-2xl text-white">
            RICH FXXK
          </p>
        </div>
        {/* Middle */}
        {/* <div className="flex items-center  py-2"> */}
        <div className="flex items-center space-x-4 justify-end text-white"></div>
        {/* </div> */}

        {/* Right */}
        <div className="flex items-center space-x-4 justify-end text-white">
          <div className="flex relative items-center space-x-4 justify-end text-white">
            <p
              className="hidden md:inline-flex cursor-pointer hover:text-champ"
              onClick={() =>
                animateScrollTo(document.querySelector(".milestones"))
              }
            >
              Milestones
            </p>
            <p
              className="hidden md:inline-flex cursor-pointer hover:text-champ"
              onClick={() => animateScrollTo(document.querySelector(".club"))}
            >
              Club
            </p>
            <p
              className="hidden md:inline-flex cursor-pointer hover:text-champ"
              onClick={() =>
                animateScrollTo(document.querySelector(".roadmap"))
              }
            >
              Roadmap
            </p>
            <p
              className="hidden md:inline-flex cursor-pointer hover:text-champ"
              onClick={() => animateScrollTo(document.querySelector(".team"))}
            >
              Team
            </p>
            <p
              className="hidden md:inline-flex cursor-pointer hover:text-champ"
              onClick={() => animateScrollTo(document.querySelector(".faq"))}
            >
              FAQ
            </p>
          </div>
          <div className="md:flex hidden relative flex-row pl- space-x-4">
            <a
              target="_blank"
              href="https://twitter.com/RichFxxk"
              rel="noopener noreferrer"
            >
              <div className="flex ml-10 relative border-2 hover:border-champ border-white px-3 py-3 rounded-full hover:bg-champ">
                <Image
                  src={twitter}
                  layout="fixed"
                  objectFit="contain"
                  width={20}
                  height={20}
                />
              </div>
            </a>
            <a
              target="_blank"
              href="https://opensea.io/collection/richfxxk"
              rel="noopener noreferrer"
            >
              <div className="flex relative border-2 hover:border-champ border-white px-3 py-3 rounded-full hover:bg-champ">
                <Image
                  src={opensea}
                  layout="fixed"
                  objectFit="contain"
                  width={20}
                  height={20}
                />
              </div>
            </a>
            <a
              target="_blank"
              href="https://discord.gg/5DztJhufyT"
              rel="noopener noreferrer"
            >
              <div className="flex relative border-2 hover:border-champ border-white px-3 py-3 rounded-full hover:bg-champ">
                <Image
                  src={discord}
                  layout="fixed"
                  objectFit="contain"
                  width={20}
                  height={20}
                />
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Still need CountDown & Mint Button */}
      <Banner />
      <div className="about">
        <About />
      </div>
      <div className="milestones pt-12">
        <Milestones />
      </div>
      <div className="club pt-12">
        <Club />
      </div>
      <div className="roadmap mt-8">
        <Roadmap />
      </div>

      <div className="team mt-12">
        <Teams />
      </div>
      <div className="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
