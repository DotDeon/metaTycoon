import discord from "../assets/discord.svg";
import opensea from "../assets//opensea.png";
import twitter from "../assets/twitter.svg";
import Image from "next/image";
function Footer() {
  return (
    <div className="bg-fteal flex justify-center">
      <div className="flex flex-col py-12">
        <div>
          <p className="text-white font-bold text-lg text-center mt-4">
            Be a Rich Fxxk Today!
          </p>
        </div>
        <p className="text-xs text-white font-bold text-center mt-4">
          Smart Contract Address
        </p>
        <p className="text-xs text-white text-center">
          0x0F4B28D46CAB209bC5fa987A92A2
        </p>
        <div className="flex relative flex-row justify-between mt-3">
          <a
            target="_blank"
            href="https://twitter.com/RichFxxk"
            rel="noopener noreferrer"
          >
            <div className="flex relative border-2 hover:border-champ border-white px-3 py-3 rounded-full hover:bg-champ">
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
    </div>
  );
}

export default Footer;
