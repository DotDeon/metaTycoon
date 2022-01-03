import Image from 'next/image';

const Collectioncard = ({ id, name, value, img }) => {
  return (
    <div className="flex flex-col w-[200px] 2xl:w-[400px]  bg-fblue rounded-3xl mx-3 drop-shadow-xl cursor-pointer hover:opacity-80 hover:shadow-lg transision first:border-t hover:scale-105 transform transution duration-300 ease-out mt-3 2xl:mt-10">
      <div className="hidden xl:flex">
        <Image
          layout="fixed"
          objectFit="contain"
          src={img}
          width={400}
          height={400}
          className="rounded-3xl"
        />
      </div>
      <div className="flex xl:hidden">
        <Image
          layout="fixed"
          objectFit="contain"
          src={img}
          width={200}
          height={200}
          className="rounded-3xl"
        />
      </div>

      <div className=" text-white font-Angkor px-3 2xl:px-6 py-4 2xl:py-8 text-right">
        <p className="2xl:mt-3 mt-1 font-bold md:text-2xl 2xl:text-4xl">
          {name}
        </p>
        <p className="md:text-xs 2xl:text-lg">#{id}</p>
        <p className="mt-1 text-base font-bold text-champ">$ {value}</p>
      </div>
    </div>
  );
};
export default Collectioncard;
