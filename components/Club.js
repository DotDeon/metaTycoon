import Image from 'next/image';
import club from '../assets/club.gif';

function Club() {
  return (
    <div className="bg-white flex flex-col">
      <div>
        <h1 className="text-gray1 text-center mt-16 font-angkor text-4xl">
          Meta Tycoon Club
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center pb-6 md:pb-12">
        <div className="flex flex-col text-left px-12 md:w-1/3">
          <p className="text-gray1   text-lg mt-12 font-bold">
            Our unmatched utilities & perks:
          </p>
          <ul className="list-disc">
            <li className="text-gray1">Co-own real estate in the Metaverse</li>
            <li className="text-gray1">
              70% profits fairly distributed to all holders
            </li>
            <li className="text-gray1">
              30% profits go back to community wallet
            </li>
            <li className="text-gray1">Exclusive Metaverse events</li>
            <li className="text-gray1">
              Exclusive Metaverse merch & 3D models
            </li>
            <li className="text-gray1">Digital membership card</li>
            <li className="text-gray1">Physical metal membership card</li>
            <li className="text-gray1">
              Exclusive discord channels (with crypto signals, real estate tips,
              & more)
            </li>
            <li className="text-gray1">& many more!</li>
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
