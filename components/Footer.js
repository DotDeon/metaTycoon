import discord from "../assets/discord.svg";
import opensea from "../assets//opensea.png";
import twitter from "../assets/twitter.svg";
import Image from "next/image";
function Footer() {
  return (
    <div className="bg-black flex justify-center">
      <div className="flex flex-col py-12">
        <div>
          <p className="text-white font-bold text-lg text-center mt-4">
            Be a Meta Tycoon Today!
          </p>
        </div>
        <p className="text-xs text-white font-bold text-center mt-4">
          Smart Contract Address
        </p>
        <p className="text-xs text-white text-center">
          0x9dC44047750a972dEE1B4b7c9Bb7474fE922992F
        </p>
        <div className="flex relative flex-row justify-between mt-3">
          <a
            target="_blank"
            href="https://twitter.com/metatycoonnft"
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
    </div>
  );
}

export default Footer;
