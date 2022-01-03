import Image from 'next/image';
import logo from '../../assets/logo.png';
import discord from '../../assets/discord.svg';
import opensea from '../../assets//opensea.png';
import twitter from '../../assets/twitter.svg';

export default function Aheader() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-1 md:grid-cols-3 bg-fblue shadow-md p-5">
      {/* Left */}
      <div className="flex items-center justify-center flex-row">
        <div
          onClick={() => router.push('/')}
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
          META TYCOON
        </p>
      </div>

      {/* Middle */}
      {/* <div className="flex items-center  py-2"> */}
      <div className="hidden md:flex items-center space-x-4 justify-end text-white"></div>
      {/* </div> */}

      {/* Right */}
      <div className="hidden md:flex items-center space-x-4 justify-center text-white">
        <div className="flex relative items-center space-x-4 justify-end text-white"></div>
        <div className="md:flex hidden relative flex-row pl- space-x-4">
          <a
            target="_blank"
            href="https://twitter.com/metatycoonnft"
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
            href="https://opensea.io/collection/metatycoon"
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
