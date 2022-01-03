import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import logo from "../assets/logo.png";
import discord from "../assets/discord.svg";
import opensea from "../assets//opensea.png";
import twitter from "../assets/twitter.svg";

function Header({ placeholder }) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 grid grid-cols-1 md:grid-cols-3 bg-black shadow-md p-5 mx-16 md:px-32">
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
      <div className="hidden md:flex items-center space-x-4 justify-end text-white"></div>
      {/* </div> */}

      {/* Right */}
      <div className="hidden md:flex items-center space-x-4 justify-end text-white">
        <div className="flex relative items-center space-x-4 justify-end text-white">
          <p
            className="hidden md:inline-flex cursor-pointer hover:text-champ"
            onClick={() =>
              window.open("https://github.com/DotDeon/Airbnb-Clone", "_blank")
            }
          >
            Milestones
          </p>
          <p
            className="hidden md:inline-flex cursor-pointer hover:text-champ"
            onClick={() =>
              window.open("https://github.com/DotDeon/Airbnb-Clone", "_blank")
            }
          >
            Club
          </p>
          <p
            className="hidden md:inline-flex cursor-pointer hover:text-champ"
            onClick={() =>
              window.open("https://github.com/DotDeon/Airbnb-Clone", "_blank")
            }
          >
            Roadmap
          </p>
          <p
            className="hidden md:inline-flex cursor-pointer hover:text-champ"
            onClick={() =>
              window.open("https://github.com/DotDeon/Airbnb-Clone", "_blank")
            }
          >
            Team
          </p>
          <p
            className="hidden md:inline-flex cursor-pointer hover:text-champ"
            onClick={() =>
              window.open("https://github.com/DotDeon/Airbnb-Clone", "_blank")
            }
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
  );
}

export default Header;
