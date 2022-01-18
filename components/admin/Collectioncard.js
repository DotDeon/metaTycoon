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
import Moment from 'react-moment';

const Collectioncard = ({ id, name, img }) => {
  const [pending, setPending] = useRecoilState(pendingState);
  const [totalValue, setTotalValue] = useRecoilState(valueState);
  const [vl, setVL] = useState();

  const [nftValue, setValue] = useState(0);
  const [showDetail, setShowDetails] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(async () => {
    if (nftValue == 0) {
      const q = query(
        collection(db, 'NFTs'),
        where('tokenID', '==', parseInt(id))
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setValue(doc.data().value);
      });
    } else {
    }
  }, [db]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'NFT_Request'),
          where('tokenID', '==', parseInt(id)),
          orderBy('DateRequested', 'desc')
        ),
        (snapshot) => {
          setHistory(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="flex flex-col w-[200px] 2xl:w-[400px]  bg-black rounded-3xl mx-3 drop-shadow-xl cursor-pointer hover:opacity-80 hover:shadow-lg transision first:border-t  mt-3 2xl:mt-10">
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
      <div className="bg-white rounded-b-3xl -mt-8">
        <div className="w-full bg-black rounded-b-3xl  bg-gray-100 flex justify-end pr-1 items-center">
          <div className="rounded-lg shadow-sm py-8">
            <div className="flex justify-between items-center">
              <h1 className="font-extrabold tracking-wider text-white">
                History
              </h1>
              <button
                className={`hover:bg-blue-50 p-2 rounded-sm hover:scale-105 transform transution duration-300 ease-out cursor-pointer rotate-90 hover:rotate-0 ${
                  showDetail && '!rotate-0'
                }`}
                onClick={() => setShowDetails(!showDetail)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {showDetail && (
          <div className="flex flex-col items-center justify-start text-sm">
            {history.map((hst) => (
              <div
                className="w-full flex justify-between items-center p-3 rounded-sm shadow-sm pl-14"
                key={hst.id}
              >
                {/* <div className="flex justify-start items-center"> */}
                <div>
                  <p className="text-gray-700 text-3xl font-bold tracking-wider">
                    {hst.data().message}
                  </p>
                  {/* <p className="">Due in 2 Days</p> */}

                  <Moment fromNow className="text-gray-400 text-sm">
                    {hst.data().DateRequested?.toDate()}
                  </Moment>
                </div>
                <p className="text-gray-700 text-3xl  font-bold tracking-wider mr-10">
                  $ {hst.data().valueAdded}
                </p>
                {/* </div> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Collectioncard;
