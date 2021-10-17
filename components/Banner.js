import Image from "next/image";
import banner from "../assets/banner.png";
import Countdown from "./Countdown";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px]">
      <Image src={banner} layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <Countdown className="" />

        <p className="text-sm sm:text-lg font-bold text-white mt-10">
          Countdown to official Rich Fxxk minting day!
        </p>
        <button className="text-purple-500 bg-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transision duration-150">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default Banner;
