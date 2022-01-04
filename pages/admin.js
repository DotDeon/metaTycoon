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

export default function Dashboard() {
  const router = useRouter();
  const [nftData, setNftData] = useState([]);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [canWithdraw, setCanWithDraw] = useState(false);
  const [goldCount, setGoldCount] = useState();
  const goldRef = useRef();
  const totalRef = useRef();
  const [goldMSG, setGoldMSG] = useState('Fund Gold');
  const [msg, setMSG] = useState('Fund Members');

  const checkWithDraw = async () => {
    const q = query(collection(db, 'Admin'), where('adminToken', '==', 1));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc2) => {
      setCanWithDraw(doc2.data().canWithdraw);
      console.log(canWithdraw);
    });
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

  const updateMembers = async () => {
    setMSG('Busy');
    const q = query(collection(db, 'NFTs'), where('tokenID', '>', 250)); //Gold Tokens
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doci) => {
      const NFT = doc(db, 'NFTs', doci.id);

      var val = parseInt(doci.data().value) + parseInt(totalRef.current.value);

      updateDoc(NFT, { value: val });
    });
    setMSG('Fund Members');
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

    if (
      blockchain.accountblockchain !==
      '0xdE59F7B03c99719dC3fbcc61f99980a9f495E6ab'
    ) {
      router.push('/login');
    }

    checkWithDraw();
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
        <div className="flex flex-row justify-center items-center space-x-4">
          <div className="flex flex-col justify-center">
            <input
              class="border-2 text-center border-primary bg-red transition h-12 px-5 rounded-md focus:outline-none text-black text-lg "
              placeholder="Gold in USD"
              ref={goldRef}
            />
            <button
              href=""
              class="bg-gray3 font-bold text-black px-4 py-3 transition duration-300 ease-in-out mt-4"
              onClick={updateGold}
            >
              {goldMSG}
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <input
              class="border-2 text-center border-primary bg-red transition h-12 px-5 rounded-md focus:outline-none text-black text-lg "
              placeholder="Black in USD"
              ref={totalRef}
            />
            <button
              href=""
              class="bg-gray3 font-bold text-black px-4 py-3 transition duration-300 ease-in-out mt-4"
              onClick={updateMembers}
            >
              {msg}
            </button>
          </div>
        </div>
        <div className="flex flex-col text-right font-angkor text-white justify-end items-end">
          <div className="flex flex-row justify-center items-center">
            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={canWithdraw}
                onChange={updateWithDraw}
              />
              <label
                for="toggle"
                class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            {canWithdraw ? (
              <label for="toggle" class="text-gray-700">
                Withdrawals are Enabled
              </label>
            ) : (
              <label for="toggle" class="text-gray-700">
                Withdrawals are Disabled
              </label>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3  min-w-screen min-h-[450px] md:px-36 px-60 pb-10">
        <h1 className="text-black font-angkor text-center text-3xl 2xl:text-4xl">
          Withdrawal Reqests
        </h1>

        <div className=" flex flex-wrap items-center justify-start w-screen">
          {nftData.map((nft) => (
            <Collectioncard
              key={nft.token_id}
              id={nft.token_id}
              name={nft.name}
              value={'200'}
              img={nft.image_original_url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
