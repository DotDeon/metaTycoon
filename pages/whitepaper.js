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
import animateScrollTo from "animated-scroll-to";
import giselle from "../assets/Giselle.jpg";
import jay from "../assets/Jay.jpg";
import jis from "../assets/Jis.jpg";
import maxim from "../assets/Maxim.jpg";
import yun from "../assets/Yun.jpg";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-fblue">
      <Head>
        <title>RICK FXXK</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
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
          Meta Tycoon
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
              onClick={() => {
                router.push({
                  pathname: "/",
                });
              }}
            >
              Home
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

      <div className="w-screen bg-fteal flex flex-col py-10">
        <h1 className="text-6xl text-white font-angkor text-center">
          THE ULTIMATE ROADMAP
        </h1>
        <h4 className="text2xl text-white font-angkor text-left ml-7 md:ml-72 pt-5">
          INTRODUCTION:
        </h4>
        <ul className="list-decimal text-left px-6 md:px-80 pt-2">
          <li className="text-white">
            Rich Fxxk features 9,999 digital art collectibles. The 9,999
            collection features different streetwear clothings, hairstyles in
            trend, and special backgrounds.
          </li>
          <li className="text-white">
            This NFT project does not constitute any form of
            securities/REITs/financial services and will not be considered as a
            form of any financial vehicle.
          </li>
          <li className="text-white">
            We strive to build a fun, informative, and exciting community for
            all holders. To encourage participation and interaction within the
            community, we'll also launch our exclusive reward system, called the
            Rich Fxxk Points.
          </li>
          <li className="text-white">
            The Rich Fxxk team founder and co-founders are real estate industry
            professionals and investors themselves, and we’d like to put
            emphasis on passing valuable real estate investment experiences on
            to our NFTs holders. Holders will also be rewarded with Rich Fxxk
            Points through community participation in related activities. (We
            are building a community through the involvement of (not limited to)
            real life real estate investments analysis and decision-making)
          </li>
          <li className="text-white">
            The Rich Fxxk team will be launching an exclusive streetwear
            collection under the ‘Rich Fxxk’ brand.
          </li>
          <li className="text-white">Random airdrops</li>
          <li className="text-white">Exclusive events and competitions</li>
        </ul>
        <h4 className="text2xl text-white font-angkor text-left mx-5 md:px-72 pt-5">
          RICH FXXK TEAM INTRODUCTION:
        </h4>
        <div className="flex flex-col md:flex-row px-5 md:px-80 mt-4 items-center md:space-x-10">
          <Image
            src={jis}
            layout="fixed"
            objectFit="contain"
            width={300}
            height={300}
          />
          <p className="w-3/5 text-lg md:text-4xl text-white">
            Our founder, known as ‘Jis’, (currently) manages a group of
            realtors, and had groomed many realtors to become millionaires
            through brokering real estate. ‘Jis’ is experienced in researching,
            analyzing market trends, and identifying real estate investment
            opportunities, for the team, and for clients. ‘Jis’ is often invited
            to give talks to realtors and consumers across Asia. ‘Jis’ is also a
            real estate and NFT investor.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:px-80 mt-4 items-center md:space-x-10">
          <p className="w-2/3 text-lg md:text-4xl text-white">
            Our co-founder, known as ‘Maxim’, (currently) manages a group of
            realtors just like ‘Jis’, and is a highly successful realtor, known
            for making consistent 6-figure income monthly. ‘Maxim’ is the best
            person to understand more about the experience on the ground.
            ‘Maxim’ is also experienced in managing financial portfolios for
            more than a decade before embarking on real estate business.
          </p>
          <Image
            src={maxim}
            layout="fixed"
            objectFit="contain"
            width={300}
            height={300}
          />
        </div>
        <h4 className="text2xl text-white font-angkor text-left px-5 md:px-80 pt-5">
          MESSAGE FROM FOUNDER:
        </h4>
        <div className="md:px-80 px-5">
          <p className="text-left pt-3 text-lg text-white">
            Hey Rich Fxxk, I am really fascinated by how the whole NFT community
            works and how different teams put together their creative ideas, and
            some bringing their expertise to benefit holders in different ways,
            or simply putting like-minded people together through holding the
            same NFT! Here I am, with a team I trust a lot, to bring you guys
            the NFT project that we dreamt about!
          </p>
          <p className="text-left pt-3 text-lg text-white">
            So, here’s the dream. We dreamt about having a community of
            (aspiring) entrepreneurs, real estate enthus/gurus, and streetwear
            lovers altogether! It sounds crazy but HERE WE ARE!
          </p>
          <p className="text-left pt-3 text-lg text-white">
            We started off this project with an intention to BUILD A COMMUNITY
            that ACHIEVES GREAT THINGS TOGETHER! Me and my team, we’re not here
            to make money from “selling NFTs”. We’re here to build a community,
            to bring our expertise on the community, to benefit, add value, and
            we’re here to stay – for the community and we’d be so proud of.
          </p>
          <p className="text-left pt-3 text-lg text-white">
            Thank you for reading this, and the entire whitepaper. Thank you for
            being part of the dream translating to reality.
            <p className="font-bold">
              We look forward to bring you guys to the moon! HODL!
            </p>
          </p>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            RICH FXXK CLUB:
          </h4>
          <h4 className="text-lg text-white font-bold text-left pt-2">
            Rich Fxxk Club Eligibility:
          </h4>
          <p className="text-white">
            All Rich Fxxk NFT holders are automatically considered as a Rich
            Fxxk Club member.
          </p>
          <h4 className="text2xl text-white font-angkor text-left pt-5">
            Rich Fxxk Club members’ perks:
          </h4>
          <ul className="list-disc text-left ml-4 pt-2">
            <li className="text-white">
              Real estate enthus and gurus community
            </li>
            <li className="text-white">
              Early access and exclusive release from Rich Fxxk street-wear
              collection
            </li>
            <li className="text-white">Upcoming Rich Fxxk NFT collections</li>
            <li className="text-white">Exclusive discord channels</li>
            <li className="text-white">Random airdrops</li>
            <li className="text-white">Exclusive events and competitions</li>
          </ul>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            EXCLUSIVE DISCORD CHANNELS
          </h4>
          <p className="text-left pt-3 text-lg text-white">
            Rich Fxxk Club members will be given access to exclusive channels on
            our discord server upon verifying. These channels would include
            private community channel to network and chat, as well as investment
            channels focused on Real Estate, Crypto, and NFT market.
          </p>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            RANDOM AIRDROPS
          </h4>
          <p className="text-left pt-3 text-lg text-white">
            Rich Fxxk Club members will be entitled to exclusive airdrops
            activities, randomly. How random? Very random. We’ll randomly let
            you know how random it is when it’s time. HODL your Rich Fxxk NFTs,
            ‘cause we may get really generous, randomly.
          </p>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            EXCLUSIVE EVENTS AND COMPETITIONS
          </h4>
          <p className="text-left pt-3 text-lg text-white">
            Rich Fxxk Club members will be entitled to exclusive events and
            competitions; all announcement and details of any events and
            competitions will be shared on our discord server. We’ll also make
            sure the announcements are made at least 24 hours in advance. (We’re
            not a fan of last-minute events, so don’t worry!)
          </p>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            ABOUT STREET-WEAR COLLECTION
          </h4>
          <p className="text-left pt-3 text-lg text-white">
            Concept of the street-wear collection – All release will be of
            limited quantity and the same will never be released again upon
            selling out. Every release will be mainly on street-wear items, such
            as oversized-tees, hoodies, caps, and so on. There will also be
            special release which will include items like figurines, framed
            artwork, and other collectibles. There will be exclusive release for
            Rich Fxxk Club members; these items cannot be purchased by the
            public. When flexing our Rich Fxxk NFTs isn’t enough, we can flex
            them by putting on our own Rich Fxxk apparels anywhere we go! Rich
            Fxxk Club members will also be allocated (limited quantity) early
            access to purchase all of our new release. Shipping will be made
            available to worldwide.
          </p>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            UPCOMING RICH FXXK NFT COLLECTIONS
          </h4>
          <p className="text-left pt-3 text-lg text-white">
            Yes, it is in our plans to launch other NFT collections under “Rich
            Fxxk” umbrella. We have some concepts ready, but we don’t intend to
            reveal much information as of now. We’ll be fully focused on working
            out The Ultimate Roadmap, fulfilling the stages and making sure
            everything is in good place, then we will announce more details on
            other NFT collections. We will definitely look into allocating
            priority minting opportunity for our Rich Fxxk Club members
          </p>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            ABOUT REAL ESTATE COMMUNITY
          </h4>
          <p className="text-left pt-3 text-lg text-white">
            The team behind Rich Fxxk are real estate investors themselves, and
            also professionals in the industry – they are experienced in both
            investing, and providing professional real estate investments advice
            to high net-worth individuals/corporate entities.
          </p>
          <p className="text-left pt-3 text-lg text-white">
            The Rich Fxxk team invests in real estate to generate profits not
            only from capital growth but also rental income through purchasing
            real estate, and/or leasing real estate to sublet.
            <p className="font-bold">
              The Rich Fxxk team strives to pass on real estate knowledge and
              experience with the community, by getting the community involved.
              Participating Rich Fxxk Holders will be rewarded with Rich Fxxk
              Points through contests, discussions, and voting exercises.
            </p>
          </p>
          <p className="text-left pt-3 text-lg text-white">
            As we know, real estate is an asset class that everyone favours -
            (the world’s billionaires are also heavily invested in real estate)
            and you will definitely gain valuable experience and insights for
            being part of Rich Fxxk.
          </p>
          <p className="text-left pt-3 text-lg text-white">
            Some of the discussions and experience the Rich Fxxk team is
            planning to share with the community in the coming days:
          </p>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            Purchasing Real Estate
          </h4>
          <ul className="list-disc text-left ml-4 pt-2">
            <li className="text-white">
              In Q1 2022, the Rich Fxxk team is planning to make real estate
              purchase(s) in Asia.
            </li>
            <li className="text-white">
              The Rich Fxxk team will shortlist their upcoming purchases, and
              will welcome all holders to take part in their decision. All Rich
              Fxxk NFT holders will be given voting rights to finalize the
              decision among the shortlisted choices. Each Rich Fxxk NFT = 1
              vote.
            </li>
            <li className="text-white">
              To encourage participation in the community, each vote from each
              NFT will be rewarded with Rich Fxxk Points.
            </li>
          </ul>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            Leasing Real Estate to Sub-let
          </h4>
          <ul className="list-disc text-left ml-4 pt-2">
            <li className="text-white">
              Compared to a purchase, leasing will require a significantly lower
              capital outlay hence we’ll also look into available opportunities
              to lease undervalued real estate as Master Tenant to sub-let. We
              might also renovate the premise to increase rentability as well as
              increasing the rental income.
            </li>
            <li className="text-white">
              All leasing opportunities will be shortlisted by the Rich Fxxk
              Team and will welcome all holders to take part in their final
              decision. All Rich Fxxk NFT holders will be given voting rights to
              finalize the decision among the shortlisted choices. Each Rich
              Fxxk NFT = 1 vote.
            </li>
            <li className="text-white">
              To encourage participation in the community, each vote from each
              NFT will be rewarded with Rich Fxxk Points.
            </li>
          </ul>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            Sale of Real Estate
          </h4>
          <ul className="list-disc text-left ml-4 pt-2">
            <li className="text-white">
              The indicative valuation of the properties will be monitored by
              the Rich Fxxk Team.
            </li>
            <li className="text-white">
              The Rich Fxxk team will make an announcement when the team deems
              that it is time to sell any property(s). There will be a vote made
              available for holders to raise objection, and if more than 60%
              votes go to objecting the sale of the property, the Rich Fxxk Team
              shall not proceed with the sale. Each Rich Fxxk NFT = 1 vote.
            </li>
            <li className="text-white">
              Upon any successful objection, there should not be another vote
              for the sale of the same property, called by the Rich Fxxk Team
              for at least a period of 3 months.
            </li>
            <li className="text-white">
              To encourage participation in the community, each vote from each
              NFT will be rewarded with Rich Fxxk Points.
            </li>
          </ul>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            Renewal/Termination of Lease
          </h4>
          <ul className="list-disc text-left ml-4 pt-2">
            <li className="text-white">
              The Rich Fxxk team will make an announcement prior to confirming a
              renewal or termination. Should there be more than 60% votes to
              object the Rich Fxxk Team’s decision, the Rich Fxxk Team shall not
              proceed with the decision according to the announcement.
            </li>
            <li className="text-white">
              In a case of holders objecting renewal, the lease will be
              terminated upon serving full notice/period of lease.
            </li>
            <li className="text-white">
              In a case of holders objecting termination of lease, the lease
              shall be renewed for another period of minimally 12 months.
            </li>
            <li className="text-white">
              To encourage participation in the community, each vote from each
              NFT will be rewarded with Rich Fxxk Points
            </li>
          </ul>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            Rich Fxxk Points
          </h4>
          <ul className="list-disc text-left ml-4 pt-2">
            <li className="text-white">
              Rich Fxxk Club members will be able to access members-only portal
              on our website to access to their Rich Fxxk Points balance. The
              redemption of Rich Fxxk Points can be done any time from the
              members-only portal.
            </li>
            <li className="text-white">
              Rich Fxxk Points can be used to redeem merchandise, NFTs in the
              secondary market (not limited to Rich Fxxk NFT), and many more.
            </li>
            <li className="text-white">
              To encourage community participation, ALL Rich Fxxk members will
              be rewarded with Rich Fxxk Points according to the number of votes
              casted.
            </li>
            <li className="text-white">
              Rich Fxxk Points are rewarded on a monthly basis.
            </li>
          </ul>
          <h4 className="text-2xl text-white font-angkor text-left pt-10">
            Disclaimer
          </h4>
          <ul className="list-disc text-left ml-4 pt-2">
            <li className="text-white">
              The Rich Fxxk NFT project is a digital art collectible and all
              real estate transactions are not of any relation to the NFT
              project.
            </li>
            <li className="text-white">
              The Rich Fxxk team encourages community interaction therefore we
              put emphasis on passing valuable real estate investment
              experiences on to our NFTs holders. We are building a community
              through the involvement of (not limited to) real life real estate
              investments analysis and decision-making.
            </li>
            <li className="text-white">
              This NFT project does not constitute any form of
              securities/REITs/financial services and will not be considered as
              a form of any financial vehicle.
            </li>
          </ul>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
