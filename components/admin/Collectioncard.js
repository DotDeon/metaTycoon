import Image from 'next/image';
import { db } from '../../firebase';
// import {
//   addDoc,
//   collection,
//   onSnapshot,
//   orderBy,
//   serverTimestamp,
//   query,
//   setDoc,
//   doc,
//   deleteDoc,
// } from '@firebase/firestore';
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';
import React, { useEffect, useState, useRef } from 'react';

const Collectioncard = ({ id, name, value, img }) => {
  const [nftValue, setValue] = useState(1);

  // useEffect(() => {
  //   const getNFTs = async () => {
  //     console.log(id);
  //     const q = query(collection(db, 'NFTs'), where('id', '==', id));
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       setValue(doc.data());
  //       console.log(doc.id, ' => ', doc.data());
  //     });
  //   };
  //   return getNFTs();
  // }, []);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'NFTs'),
          where('id', '==', id)
          // orderBy('timestamp', 'desc')
        ),
        (snapshot) => {
          console.log(id);
          console.log(snapshot.docs.id);
        }
      ),
    [db]
  );

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
