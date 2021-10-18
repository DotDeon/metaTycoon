import Image from "next/image";
import a1 from "../assets/1.jpg";
import a2 from "../assets/2.png";
import a3 from "../assets/3.jpg";
import a4 from "../assets/4.jpg";

function About() {
  return (
    <div className="flex flex-col justify-center items-center bg-fteal">
      <div>
        <h1 className="text-white text-center mt-16 font-angkor text-4xl">
          About
        </h1>
      </div>
      <p className="text-white text-center px-5 md:w-1/3 text-lg mt-12">
        9,999 generative NFT collection with ‘Ultimate Roadmap’ loaded with
        benefits for all Rich Fxxk holders. Minting in Nov 2021, and you can own
        a Rich Fxxk for 0.069ETH + gas fees.
      </p>
      <div className="flex flex-row justify-evenly">
        <div className="flex relative flex-col py-10 ">
          <div className="flex relative flex-row space-x-4 ">
            <Image
              src={a1}
              layout="fixed"
              objectFit="contain"
              width={200}
              height={200}
            />
            <Image
              src={a2}
              layout="fixed"
              objectFit="contain"
              width={200}
              height={200}
            />
            <Image
              src={a3}
              layout="fixed"
              objectFit="contain"
              width={200}
              height={200}
            />
            <Image
              src={a4}
              layout="fixed"
              objectFit="contain"
              width={200}
              height={200}
            />
          </div>
          {/* <div className="flex relative flex-row space-x-4 mt-4 justify-evenly">
          <Image
            src={about1}
            layout="fixed"
            objectFit="contain"
            width={200}
            height={200}
          />
          <Image
            src={about1}
            layout="fixed"
            objectFit="contain"
            width={200}
            height={200}
          />
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
