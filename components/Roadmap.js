import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import a4 from '../assets/roadmap.png';

function Roadmap() {
  const router = useRouter();
  return (
    <div className="bg-black flex justify-center">
      <div className="container py-24">
        <div>
          <h1 className="text-center text-white font-angkor text-4xl">
            The Ultimate Roadmap Whitepaper
          </h1>
        </div>
        <div className=" flex justify-center md:space-x-4 flex-col md:flex-row">
          <button
            className="bg-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transision duration-150"
            onClick={() =>
              window.open('http://whitepaper.meta-tycoon.club/', '_blank')
            }
          >
            Read Whitepaper
          </button>
          {/* <button
            className="bg-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transision duration-150"
            onClick={() =>
              window.open("https://pdfhost.io/v/KzWVDVXb~_whitepaper", "_blank")
            }
          >
            Download Whitepaper
          </button> */}
          {/* <button
            className="bg-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transision duration-150"
            onClick={() =>
              window.open(
                "https://pdfhost.io/v/PS1EIAHwO_Chi_Whitepaper",
                "_blank"
              )
            }
          >
            Download Whitepaper(Simplified Chinese)
          </button>
          <button
            className="bg-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transision duration-150"
            onClick={() =>
              window.open(
                "https://pdfhost.io/v/N234pLUjr_Chi_Whitepaper",
                "_blank"
              )
            }
          >
            Download Whitepaper(Traditional Chinese)
          </button> */}
          {/* <div className="hidden md:flex relative pt-24 min-w-screen items-center flex-col justify-center hover:scale-150 transision duration-200 ease-out">
          <Image
            src={a4}
            layout="fixed"
            objectFit="contain"
            width={900}
            height={880}
            className="rounded-3xl"
          />
        </div>
        <div className="flex md:hidden relative pt-24 min-w-screen items-center flex-col justify-center hover:scale-110 transision duration-200 ease-out">
          <Image
            src={a4}
            layout="fixed"
            objectFit="contain"
            width={325}
            height={320}
            className="rounded-3xl"
          />*/}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
