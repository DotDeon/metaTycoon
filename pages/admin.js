import Aheader from '../components/admin/aHeader';
import Head from 'next/head';
import Collectioncard from '../components/admin/Collectioncard';
import img from '../assets/1.jpg';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../src/redux/data/dataActions';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  serverTimestamp,
  query,
  setDoc,
  getDocs,
  updateDoc,
  where,
  doc,
  deleteDoc,
} from '@firebase/firestore';

import { db } from '../firebase';
import { useRecoilState } from 'recoil';
import { pendingState } from '../atoms/sumPendingAtom';
import { valueState } from '../atoms/sumValueAtom';
import Withdrawtable from '../components/Withdrawtable';

export default function Dashboard() {
  const router = useRouter();
  const [nftData, setNftData] = useState([]);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [canWithdraw, setCanWithDraw] = useState(false);
  const [goldCount, setGoldCount] = useState();
  const goldRef = useRef();
  const blackRef = useRef();
  const redRef = useRef();
  const silverRef = useRef();
  const [goldMSG, setGoldMSG] = useState('Fund Gold');
  const [blackMsg, setBlackMSG] = useState('Fund Black');
  const [redMsg, setRedMSG] = useState('Fund Red');
  const [silverMSG, setSilverMSG] = useState('Fund Silver');

  const [withdraw, setWithdraw] = useState([]);

  const checkWithDraw = async () => {
    const q = query(collection(db, 'Admin'), where('adminToken', '==', 1));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc2) => {
      setCanWithDraw(doc2.data().canWithdraw);
      console.log(canWithdraw);
    });
  };

  const getWithdrawls = async () => {
    const q = query(collection(db, 'NFTs'), where('pending', '>', 0));
    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    // console.log(querySnapshot.docChanges()[0].doc());
    //setWithdraw(querySnapshot.doc[0]);
  };

  const updateGold = async () => {
    setGoldMSG('Busy');
    const q = query(collection(db, 'NFTs'), where('tokenID', '<', 251)); //Gold Tokens
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doci) => {
      const NFT = doc(db, 'NFTs', doci.id);

      var val = parseInt(doci.data().value) + parseInt(goldRef.current.value);
      setGoldCount(doci.data().tokenID);
      updateDoc(NFT, { value: val });
    });
    setGoldMSG('Fund Gold Members');
  };

  const updateBlackMembers = async () => {
    setBlackMSG('Busy');
    const q = query(
      collection(db, 'NFTs'),
      where('tokenID', '>', 250),
      where('tokenID', '<', 3001)
    ); //Gold Tokens
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doci) => {
      const NFT = doc(db, 'NFTs', doci.id);

      var val = parseInt(doci.data().value) + parseInt(totalRef.current.value);

      updateDoc(NFT, { value: val });
    });
    setBlackMSG('Fund Members');
  };

  const updateRedMembers = async () => {
    setRedMSG('Busy');
    const q = query(
      collection(db, 'NFTs'),
      where('tokenID', '>', 3000),
      where('tokenID', '<', 5001)
    ); //Gold Tokens
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doci) => {
      const NFT = doc(db, 'NFTs', doci.id);

      var val = parseInt(doci.data().value) + parseInt(totalRef.current.value);

      updateDoc(NFT, { value: val });
    });
    setRedMSG('Fund Members');
  };

  const updateSilverMembers = async () => {
    setSilverMSG('Busy');
    const q = query(
      collection(db, 'NFTs'),
      where('tokenID', '>', 5000),
      where('tokenID', '<', 10000)
    ); //Gold Tokens
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doci) => {
      const NFT = doc(db, 'NFTs', doci.id);

      var val = parseInt(doci.data().value) + parseInt(totalRef.current.value);

      updateDoc(NFT, { value: val });
    });
    setSilverMSG('Fund Members');
  };

  const updateWithDraw = async () => {
    console.log('hi');
    const q = query(collection(db, 'Admin'), where('adminToken', '==', 1));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doci) => {
      const NFT = doc(db, 'Admin', doci.id);

      updateDoc(NFT, { canWithdraw: !doci.data().canWithdraw });
      setCanWithDraw(!doci.data().canWithdraw);
    });
  };

  useEffect(() => {
    // if (blockchain.account !== '' && blockchain.smartContract !== null) {
    dispatch(fetchData(blockchain.account));

    // if (
    //   blockchain.account.toUpperCase() !==
    //   '0xdE59F7B03c99719dC3fbcc61f99980a9f495E6ab'.toUpperCase()
    //   // ""
    // ) {
    //   router.push('/login');
    // }

    checkWithDraw();
    getWithdrawls();
  }, [blockchain.smartContract, dispatch]);

  return (
    <div className="min-h-screen bg-gray3 overflow-x-hidden">
      <Head>
        <title>META TYCOON</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Angkor&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Aheader />
      <div className="flex flex-row  justify-between min-w-screen bg-black md:px-36 px-60 py-20">
        <div className="flex flex-col"></div>
        <div className="flex flex-col text-right font-angkor text-white justify-end items-end">
          <button
            href=""
            className="bg-gray3 font-bold text-black px-4 py-3 transition duration-300 ease-in-out mt-4 mb-10"
            onClick={() => router.push('/login')}
          >
            Go to Dashboard
          </button>
          <div className="flex flex-row justify-center items-center bg-black">
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={canWithdraw}
                onChange={updateWithDraw}
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            {canWithdraw ? (
              <label htmlFor="toggle" className="text-gray-700">
                Withdrawals are Enabled
              </label>
            ) : (
              <label htmlFor="toggle" className="text-gray-700">
                Withdrawals are Disabled
              </label>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-4 bg-black pb-10">
        <div className="flex flex-col justify-center">
          <input
            className="border-2 text-center border-primary bg-red transition h-12 px-5 rounded-md focus:outline-none text-black text-lg "
            placeholder="Gold in USD"
            ref={goldRef}
          />
          <button
            href=""
            className="bg-gray3 font-bold text-black px-4 py-3 transition duration-300 ease-in-out mt-4"
            onClick={updateGold}
          >
            {goldMSG}
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="border-2 text-center border-primary bg-red transition h-12 px-5 rounded-md focus:outline-none text-black text-lg "
            placeholder="Black in USD"
            ref={blackRef}
          />
          <button
            href=""
            className="bg-gray3 font-bold text-black px-4 py-3 transition duration-300 ease-in-out mt-4"
            onClick={updateBlackMembers}
          >
            {blackMsg}
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="border-2 text-center border-primary bg-red transition h-12 px-5 rounded-md focus:outline-none text-black text-lg "
            placeholder="Red in USD"
            ref={redRef}
          />
          <button
            href=""
            className="bg-gray3 font-bold text-black px-4 py-3 transition duration-300 ease-in-out mt-4"
            onClick={updateRedMembers}
          >
            {redMsg}
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="border-2 text-center border-primary bg-red transition h-12 px-5 rounded-md focus:outline-none text-black text-lg "
            placeholder="Silver in USD"
            ref={silverRef}
          />
          <button
            href=""
            className="bg-gray3 font-bold text-black px-4 py-3 transition duration-300 ease-in-out mt-4"
            onClick={updateSilverMembers}
          >
            {silverMSG}
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-3  min-w-screen min-h-[450px] md:px-36 px-60 pb-10">
        <h1 className="text-black font-angkor text-center text-3xl 2xl:text-4xl">
          Withdrawal Reqests
        </h1>

        <div className=" flex flex-wrap items-center justify-center mt-5">
          <div className="bg-white p-8 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
              <div className="flex items-center justify-between"></div>
            </div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Token ID
                        </th>
                        <th className="px-12 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Wallet Address
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Amount
                        </th>

                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    {/* {withdraw.map((wth) => {
                      <Withdrawtable id={wth.data().tokenID} amount={300} />;
                    })} */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
