import Image from "next/image";
import club from "../assets/club.gif";

function Club() {
  return (
    <div className="bg-fteal flex flex-col">
      <div>
        <h1 className="text-white text-center mt-16 font-angkor text-4xl">
          Rich Fxxk Club
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center pb-6 md:pb-12">
        <div className="flex flex-col text-left px-12 md:w-1/3">
          <p className="text-champ   text-lg mt-12 font-bold">
            Rich Fxxk Club Eligibility:
          </p>
          <ul className="list-disc">
            <li className="text-white">Own any Meta Tycoon nft.</li>
          </ul>

          <p className="text-champ  text-lg mt-12 font-bold ">
            Rich Fxxk Club Benefits:
          </p>
          <ul className="list-disc">
            <li className="text-white">
              Real estate & crypto/NFT enthus community
            </li>
            <li className="text-white">Co-own Real Estate in the Metaverse</li>
            <li className="text-white">
              Earn profits from the metaverse investments
            </li>
            <li className="text-white">Upcoming NFT collections</li>
            <li className="text-white">Exclusive discord channels</li>
            <li className="text-white">Random airdrops</li>
            <li className="text-white">Exclusive events and competitions</li>
          </ul>
        </div>
        <div className="flex relative flex-col items-center justify-center mt-6 md:mt-16">
          <Image
            src={club}
            layout="fixed"
            objectFit="contain"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default Club;
