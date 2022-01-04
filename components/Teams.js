import Image from 'next/image';
import about1 from '../assets/about1.jpg';

import giselle from '../assets/Giselle.jpg';
import jay from '../assets/Ricky.jpg';
import jis from '../assets/Jis.jpg';
import maxim from '../assets/Maxim.jpg';
import yun from '../assets/Yun.jpg';

function Teams() {
  return (
    <div className="bg-white flex justify-center">
      <div className="container py-24">
        <div>
          <h1 className="text-center text-gray1 font-angkor text-4xl">Team</h1>
          <p className="text-center text-gray1 font-bold text-lg mt-4">
            Mouseover to read team’s description
          </p>
        </div>
        <div className=" flex justify-center">
          <div className="flex relative flex-col md:flex-row md:space-x-4 mt-4 justify-evenly">
            <div className="flex relative flex-col justify-center  ">
              <Image
                src={jis}
                layout="fixed"
                objectFit="contain"
                width={200}
                height={200}
              />
              <div className="image__overlay image__overlay--blur">
                <p className=" text-xs text-center">Founder</p>
                <h1 className="text-4xl font-bold text-center">Jan</h1>
                <p className=" text-xs px-4 mt-4 text-center">
                  Real estate investor/coach with passion in street-wear and
                  NFTs. – Involved in every part of the project!
                </p>
              </div>
            </div>
            <div className="flex relative flex-col justify-center  ">
              <Image
                src={maxim}
                layout="fixed"
                objectFit="contain"
                width={200}
                height={200}
              />
              <div className="image__overlay image__overlay--blur">
                <p className=" text-xs text-center">Co-Founder</p>
                <h1 className="text-4xl font-bold text-center">Maxim</h1>
                <p className=" text-xs px-4 mt-4 text-center">
                  Real estate investor/professional – The head for our real
                  estate investments
                </p>
              </div>
            </div>
            <div className="flex relative flex-col justify-center  ">
              <Image
                src={jay}
                layout="fixed"
                objectFit="contain"
                width={200}
                height={200}
              />
              <div className="image__overlay image__overlay--blur">
                <p className=" text-xs text-center">Marketing</p>
                <h1 className="text-4xl font-bold text-center">Ricky</h1>
                <p className=" text-xs px-4 mt-4 text-center">
                  Head of Marketing (Asia)
                </p>
              </div>
            </div>
            <div className="flex relative flex-col justify-center  ">
              <Image
                src={giselle}
                layout="fixed"
                objectFit="contain"
                width={200}
                height={200}
              />
              <div className="image__overlay image__overlay--blur">
                <p className=" text-xs text-center">Marketing</p>
                <h1 className="text-4xl font-bold text-center">Giselle</h1>
                <p className=" text-xs px-4 mt-4 text-center">
                  Head of Marketing (Global)
                </p>
              </div>
            </div>
            <div className="flex relative flex-col justify-center  ">
              <Image
                src={yun}
                layout="fixed"
                objectFit="contain"
                width={200}
                height={200}
              />
              <div className="image__overlay image__overlay--blur">
                <p className=" text-xs text-center">Designer</p>
                <h1 className="text-4xl font-bold text-center">Yu-n</h1>
                <p className=" text-xs px-4 mt-4 text-center">
                  Handles all design elements of the project including collabs
                  with other designers, and streetwear design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
