import Image from 'next/image';
import { db } from '../../firebase';
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  getDocs,
} from 'firebase/firestore';
import React, { useEffect, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { pendingState } from '../../atoms/sumPendingAtom';
import { valueState } from '../../atoms/sumValueAtom';

const Collectioncard = ({ id, name, img }) => {
  const [pending, setPending] = useRecoilState(pendingState);
  const [totalValue, setTotalValue] = useRecoilState(valueState);

  const [nftValue, setValue] = useState(1);

  useEffect(async () => {
    const q = query(
      collection(db, 'NFTs'),
      where('tokenID', '==', parseInt(id))
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data().value);
      setValue(doc.data().value);
      setTotalValue(totalValue + parseInt(doc.data().value));
      setPending(pending + parseInt(doc.data().pending));
      console.log(totalValue);
      console.log(pending);
    });
  }, [db]);

  return (
    <div className="flex flex-col w-[200px] 2xl:w-[400px]  bg-black rounded-3xl mx-3 drop-shadow-xl cursor-pointer hover:opacity-80 hover:shadow-lg transision first:border-t hover:scale-105 transform transution duration-300 ease-out mt-3 2xl:mt-10">
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
        <p className="mt-1 text-base font-bold text-champ">$ {nftValue}</p>
      </div>
    </div>
  );
};
export default Collectioncard;
