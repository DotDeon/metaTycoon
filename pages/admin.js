import Aheader from '../components/admin/aHeader';
import Head from 'next/head';
import Collectioncard from '../components/admin/Collectioncard';
import img from '../assets/1.jpg';
import { useState, useEffect, useRef, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
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
import Moment from 'react-moment';

import { db } from '../firebase';
import { useRecoilState } from 'recoil';
import { pendingState } from '../atoms/sumPendingAtom';
import { valueState } from '../atoms/sumValueAtom';
import Withdrawtable from '../components/Withdrawtable';
import adminUpdate1 from '../components/admin/adminUpdate';
import socialE from '../components/socialE';
// import about1 from '../assets/1.jpg';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const dateNow = new Date();

export default function Dashboard() {
  const router = useRouter();
  const [nftData, setNftData] = useState([]);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [canWithdraw, setCanWithDraw] = useState(false);
  // const [goldCount, setGoldCount] = useState();
  const valMSG = useRef();
  const valueRef = useRef();
  const heading = useRef();
  const upateMSG = useRef();
  const [btnMSG, setBtnMSG] = useState('Update Token Funds');
  const [dropdown, setDowpdown] = useState();
  const [tokenSpec, setTokenSpec] = useState(false);
  const valRef = useRef(1);
  const [dateToday, setDateToday] = useState();
  const [post, setPost] = useState([]);
  const [withdraw, setWithdraw] = useState([]);

  const handleChange = (e) => {
    setDowpdown(e.target.value);

    if (e.target.value == 'token') {
      setTokenSpec(true);
    } else {
      setTokenSpec(false);
    }
  };

  const checkWithDraw = async () => {
    const q = query(collection(db, 'Admin'), where('adminToken', '==', 1));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc2) => {
      setCanWithDraw(doc2.data().canWithdraw);
      console.log(canWithdraw);
    });
  };

  // const getWithdrawls = async () => {
  //   const q = query(collection(db, 'NFTs'), where('pending', '>', 0));
  //   const querySnapshot = await getDocs(q);
  //   console.log(querySnapshot);

  //   setWithdraw(querySnapshot);
  // };

  const deleteUpdate = async (id) => {
    await deleteDoc(doc(db, 'Updates', id));
  };

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'NFTs'), where('pending', '>', 0)),
        (snapshot) => {
          // console.log(snapshot.docs);
          setWithdraw(snapshot.docs);
        }
      ),
    [db]
  );

  const updateTokens = async () => {
    console.lof;
    if (dropdown == 'silver') {
      updateSilverMembers();
    } else if (dropdown == 'gold') {
      updateGold();
    } else if (dropdown == 'black') {
      updateBlackMembers();
    } else if (dropdown == 'red') {
      updateRedMembers();
    } else if (dropdown == 'token') {
      updateToken();
    }
  };

  const updateToken = async () => {
    setBtnMSG('Busy');
    const q = query(
      collection(db, 'NFTs'),
      where('tokenID', '==', parseInt(valRef.current.value))
    ); //Gold Tokens
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doci) => {
      const NFT = doc(db, 'NFTs', doci.id);

      var val = parseInt(doci.data().value) + parseInt(valueRef.current.value);
      // setGoldCount(doci.data().tokenID);
      updateDoc(NFT, { value: val });
      addDoc(collection(db, 'NFT_Request'), {
        tokenID: doci.data().tokenID,
        valueAdded: valueRef.current.value,
        message: valMSG.current.value,
        requestedBy: blockchain.account,
        DateRequested: serverTimestamp(),
      });
    });
    setBtnMSG('Update Token Funds');
  };

  const updateGold = async () => {
    setBtnMSG('Busy');
    const q = query(collection(db, 'NFTs'), where('tokenID', '<', 251)); //Gold Tokens
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doci) => {
      const NFT = doc(db, 'NFTs', doci.id);

      var val = parseInt(doci.data().value) + parseInt(valueRef.current.value);
      // setGoldCount(doci.data().tokenID);
      updateDoc(NFT, { value: val });
      addDoc(collection(db, 'NFT_Request'), {
        tokenID: doci.data().tokenID,
        valueAdded: valueRef.current.value,
        message: valMSG.current.value,
        requestedBy: blockchain.account,
        DateRequested: serverTimestamp(),
      });
    });
    setBtnMSG('Update Token Funds');
  };

  const updateBlackMembers = async () => {
    setBtnMSG('Busy');
    const q = query(
      collection(db, 'NFTs'),
      where('tokenID', '>', 250),
      where('tokenID', '<', 3001)
    ); //Gold Tokens
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doci) => {
      const NFT = doc(db, 'NFTs', doci.id);

      var val = parseInt(doci.data().value) + parseInt(valueRef.current.value);

      updateDoc(NFT, { value: val });
      addDoc(collection(db, 'NFT_Request'), {
        tokenID: doci.data().tokenID,
        valueAdded: valueRef.current.value,
        message: valMSG.current.value,
        requestedBy: blockchain.account,
        DateRequested: serverTimestamp(),
      });
    });
    setBtnMSG('Update Token Funds');
  };

  const updateRedMembers = async () => {
    setBtnMSG('Busy');
    const q = query(
      collection(db, 'NFTs'),
      where('tokenID', '>', 3000),
      where('tokenID', '<', 5001)
    ); //Gold Tokens
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doci) => {
      const NFT = doc(db, 'NFTs', doci.id);

      var val = parseInt(doci.data().value) + parseInt(valueRef.current.value);

      updateDoc(NFT, { value: val });
      addDoc(collection(db, 'NFT_Request'), {
        tokenID: doci.data().tokenID,
        valueAdded: valueRef.current.value,
        message: valMSG.current.value,
        requestedBy: blockchain.account,
        DateRequested: serverTimestamp(),
      });
    });
    setBtnMSG('Update Token Funds');
  };

  const updateSilverMembers = async () => {
    setBtnMSG('Busy');
    const q = query(
      collection(db, 'NFTs'),
      where('tokenID', '>', 5000),
      where('tokenID', '<', 10000)
    ); //Gold Tokens
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doci) => {
      const NFT = doc(db, 'NFTs', doci.id);

      var val = parseInt(doci.data().value) + parseInt(valueRef.current.value);

      updateDoc(NFT, { value: val });
      addDoc(collection(db, 'NFT_Request'), {
        tokenID: doci.data().tokenID,
        valueAdded: valueRef.current.value,
        message: valMSG.current.value,
        requestedBy: blockchain.account,
        DateRequested: serverTimestamp(),
      });
    });
    setBtnMSG('Update Token Funds');
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

  const addUpdate = async () => {
    const docRef = await addDoc(collection(db, 'Updates'), {
      header: heading.current.value,
      body: upateMSG.current.value,
      timestamp: serverTimestamp(),
    });
    heading.current.value = '';
    upateMSG.current.value = '';
  };

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'Updates'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPost(snapshot.docs);
        }
      ),
    [db]
  );

  useEffect(() => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));

      if (
        blockchain.account.toUpperCase() !==
        '0xdE59F7B03c99719dC3fbcc61f99980a9f495E6ab'.toUpperCase()
        // ""
      ) {
        router.push('/login');
      }

      var today = new Date();
      var date2 =
        today.getDate() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getFullYear();
      setDateToday(date2);

      checkWithDraw();
    } else {
      router.push('/login');
    }
    // getWithdrawls();
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
        <div className="flex flex-col">
          <p className="text-white text-center pb-2">Fund Wallet</p>
          <input
            className="border-2 bg-white text-center border-primary bg-red transition h-12 px-5 rounded-md focus:outline-none text-black text-lg "
            placeholder="Profit in $"
            ref={valueRef}
          />
          <input
            className="border-2 bg-white text-center border-primary bg-red transition h-12 px-5 rounded-md focus:outline-none text-black text-lg "
            placeholder="Fund Notes"
            ref={valMSG}
          />
          {tokenSpec ? (
            <input
              className="border-2 bg-white text-center border-primary bg-red transition h-12 px-5 rounded-md focus:outline-none text-black text-lg "
              placeholder="Token ID"
              ref={valRef}
            />
          ) : (
            <></>
          )}
          <select
            className="border-2 bg-white text-center border-primary bg-red transition h-12 px-5 rounded-md focus:outline-none text-black text-lg "
            value={dropdown}
            onChange={handleChange}
          >
            {' '}
            <option value="silver">Silver Membership</option>
            <option value="red">Red Membership</option>
            <option value="black">Black Membership</option>
            <option value="gold">Gold Membership</option>
            <option value="token">Specific Token</option>
          </select>

          <button
            href=""
            className="bg-gray3 font-bold text-black px-4 py-3 transition duration-300 ease-in-out mt-4 rounded-xl mb-10 hover:bg-gray1 hover:scale-105"
            onClick={updateTokens}
          >
            {btnMSG}
          </button>
        </div>
        {/* UPDATE */}
        <div class="md:flex flex-col bg-white rounded-xl p-8 md:p-0 ">
          <div className="flex flex-col justify-end items-end mx-8  text-right">
            <h1 className="text-black font-angkor text-right text-3xl mt-8">
              Post an Update
            </h1>
            <div className="mt-2">
              {/* <p class="text-4xl font-medium">Deon Roos</p> */}
              <input
                type="text"
                name="price"
                ref={heading}
                className="focus:ring-gray1 focus:border-gray3 block w-full pl-7 pr-12 border-gray-300 text-4xl font-medium py-2 text-right  border border-solid border-gray1
                rounded bg-white "
                placeholder="Subject"
              />
              <p className="mt-2 text-xl">{dateToday}</p>
            </div>
          </div>

          <div>
            <div class="pt-2 px-8 pb-4 text-center space-y-4">
              <blockquote>
                <textarea
                  className="
                    form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray1
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  "
                  ref={upateMSG}
                  rows="6"
                  placeholder="Update Message"
                ></textarea>
              </blockquote>
            </div>
            <div className="flex flex-row items-end justify-end mr-8 mb-4">
              <button
                href=""
                className="bg-gray3 font-bold text-black px-4 py-3 hover:bg-fblue hover:text-white hover:scale-105 transition duration-300 ease-in-out rounded-lg"
                onClick={addUpdate}
              >
                Post
              </button>
            </div>
          </div>
        </div>
        {/* UPDATE */}

        {/* <div className="flex flex-col">
          <p className="text-white text-center pb-2">Post an Update</p>
          <input
            className="border-2 text-center border-primary bg-red transition h-12 px-5 rounded-md focus:outline-none text-black text-lg "
            placeholder="Gold in USD"
            // ref={goldRef}
          />
        </div> */}
        <div className="flex flex-col text-right font-angkor text-white justify-end items-end">
          <button
            href=""
            className="bg-gray3 font-bold text-black px-4 py-3 transition duration-300 ease-in-out mt-4 mb-10 rounded-xl hover:bg-gray1 hover:scale-105"
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
      <div className="flex flex-row justify-center items-center space-x-4 bg-black pb-10"></div>

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
                    {/* <Withdrawtable id={25} amount={1} /> */}
                    {withdraw.map((wth) => (
                      <Withdrawtable
                        key={wth.id}
                        id={wth.data().tokenID}
                        amount={wth.data().pending}
                      />
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3  bg-black min-w-screen min-h-[450px] md:px-36 px-60 pb-10">
        <h1 className="text-white font-angkor text-center text-3xl 2xl:text-4xl mt-8 mb-20">
          Updates
        </h1>

        {/* ADD */}

        {/* ADD */}

        {/* UPDATE */}
        {post.map((post) => (
          <div class="md:flex flex-col bg-white rounded-xl p-8 md:p-0 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 ml-4 mt-4 bg-gray2 hover:bg-black p-4 rounded-full"
              viewBox="0 0 20 20"
              fill="#bababa"
              onClick={() => deleteUpdate(post.id)}
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <div className="flex flex-row justify-end items-center  text-right -mt-8 px-12">
              <div className="mr-4">
                <p class="text-4xl font-medium">{post.data().header}</p>
                <Moment fromNow className="pr-5 text-sm">
                  {post.data().timestamp?.toDate()}
                </Moment>
                {/* <p>22 January 2022</p> */}
              </div>
              <img
                className="h-20 w-20 rounded-full"
                src="https://meta-tycoon.club/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.312d4388.png&w=256&q=75"
                alt=""
                width="384"
                height="512"
              />
            </div>

            <div>
              <div class="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                  <p class="text-lg font-medium">{post.data().body}</p>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
        {/* UPDATE */}
      </div>
      <Footer />
    </div>
  );
}
