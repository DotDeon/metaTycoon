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
          Meta Tycoon
        </h1>
      </div>
      <p className="text-white text-center px-5 md:w-1/3 text-lg mt-12">
       9,999 generative artwork NFT collection. <br>
    <b>Co-own real estate in the Metaverse!</b>
      </p>
      <div className="flex flex-row justify-evenly">
        <div className="flex relative flex-col py-10 ">
          <div className="hidden md:flex relative flex-row md:space-x-4">
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
          <div className="flex md:hidden relative flex-row space-x-1">
            <Image
              src={a1}
              layout="fixed"
              objectFit="contain"
              width={100}
              height={100}
            />

            <Image
              src={a2}
              layout="fixed"
              objectFit="contain"
              width={100}
              height={100}
            />

            <Image
              src={a3}
              layout="fixed"
              objectFit="contain"
              width={100}
              height={100}
            />

            <div className="hidden md:flex">
              <Image
                src={a4}
                layout="fixed"
                objectFit="contain"
                width={100}
                height={100}
              />
            </div>
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
