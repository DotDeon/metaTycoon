import Aheader from '../components/admin/aHeader';
import Head from 'next/head';
import Collectioncard from '../components/admin/Collectioncard';
import img from '../assets/1.jpg';
import { useState, useEffect } from 'react';
import { connect } from '../src/redux/blockchain/blockchainActions';
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
  disconect,
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
import Moment from 'react-moment';
import { ethers } from 'ethers';

const signMessage = async ({ setError, message }) => {
  try {
    //console.log({ message });
    if (!window.ethereum)
      throw new Error('No crypto wallet found. Please install it.');

    await window.ethereum.send('eth_requestAccounts');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();

    return {
      message,
      signature,
      address,
    };
  } catch (err) {
    console.log(err.message);
  }
};

export default function Dashboard() {
  const router = useRouter();
  const [nftData, setNftData] = useState([]);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [msgRef1, setMsgRef1] = useState('Confirm Withdrawal');
  // const [nftAddress, setNFTAddress] = useState(
  //   '0x3003f87bfad77e9aeca9f1c72fa5914bf11cb81d'
  // );
  const [pending, setPending] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [canWithdraw, setCanWithDraw] = useState(false);
  const [post, setPost] = useState([]);

  const getMyNfts = async () => {
    const val = 0;
    const pend = 0;
    const openseaData = await axios.get(
      'https://api.opensea.io/api/v1/assets?owner=' +
        blockchain.account +
        // '0x01df0f4fcc595fddab5f084e9a6118d75a894050' +
        '&asset_contract_addresses=0x9dC44047750a972dEE1B4b7c9Bb7474fE922992F&order_direction=asc&offset=0&limit=50'
    );

    setNftData(openseaData.data.assets);

    var assetCount = openseaData.data.assets.length;
    for (var i = 0; i < assetCount; i++) {
      const q = query(
        collection(db, 'NFTs'),
        where('tokenID', '==', parseInt(openseaData.data.assets[i].token_id))
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        val = parseInt(val) + parseInt(doc.data().value);
        pend = parseInt(pend) + parseInt(doc.data().pending);
        setTotalValue(val);
        setPending(pend);
      });
    }

    if ((openseaData.data.assets.length = 0)) {
      router.push('/login');
    }
  };

  const checkWithDraw = async () => {
    await dispatch(connect());
    console.log('Contract ' + blockchain.smartContract);
    console.log('Wallet ' + blockchain.account);
    await dispatch(fetchData(blockchain.account));

    const q = query(collection(db, 'Admin'), where('adminToken', '==', 1));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc2) => {
      setCanWithDraw(doc2.data().canWithdraw);
      console.log(canWithdraw);
    });
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
      checkWithDraw();
      getMyNfts();
    } else {
      router.push('/login');
    }
  }, []);

  const withdrawNFT = async () => {
    console.log(msgRef1);
    const sig = await signMessage({
      message: msgRef1,
    });
    if (sig) {
      const isValid2 = await verifyMessage({
        message: sig.message,
        address: sig.address,
        signature: sig.signature,
      });
      console.log(isValid2);
      if (isValid2) {
        const openseaData = await axios.get(
          'https://api.opensea.io/api/v1/assets?owner=' +
            blockchain.account +
            '&asset_contract_addresses=0x9dC44047750a972dEE1B4b7c9Bb7474fE922992F&order_direction=asc&offset=0&limit=50'
        );

        var assetCount = openseaData.data.assets.length;
        for (var i = 0; i < assetCount; i++) {
          const q = query(
            collection(db, 'NFTs'),
            where(
              'tokenID',
              '==',
              parseInt(openseaData.data.assets[i].token_id)
            )
          );
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doci) => {
            if (doci.data().value > 0) {
              const NFT = doc(db, 'NFTs', doci.id);
              updateDoc(NFT, { pending: doci.data().value, value: 0 });
            }
          });
          getMyNfts();
        }
      } else {
        console.log('Invalid Signing Key');
      }
    }
  };

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
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-white font-angkor text-6xl">
            {nftData[0]?.owner.user.username}
          </h1>
          <p className="text-white font-angkor text-sm mt-2">
            {blockchain.account}
          </p>
          <div className="flex flex-col text-left font-angkor text-white mt-8">
            <p>Balance: $ {totalValue}</p>
            <p className="mt-2">Pending Withdrawl: $ {pending}</p>
          </div>
        </div>
        <div className="flex flex-col text-right font-angkor text-white justify-end items-end">
          <p>NEXT WITHDRAWAL DATE</p>
          <p>1 December 2022</p>
          {canWithdraw ? (
            <button
              className="bg-green mt-5 px-10 py-3 shadow-md rounded-full hover:shadow-xl hover:scale-90 transision duration-150"
              onClick={() => {
                withdrawNFT();
              }}
            >
              Withdraw
            </button>
          ) : (
            <button className="bg-gray1 mt-5 px-10 py-3 shadow-md rounded-full">
              Withdrawals Disabled
            </button>
          )}
          <button
            className=" bg-fblue mt-5 px-12 py-4 hover:bg-fteal shadow-md rounded-full hover:shadow-xl hover:scale-90 transision duration-150"
            onClick={() => {
              router.push('/');
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-3  min-w-screen  min-h-[450px] md:px-36 px-60 pb-10">
        <h1 className="text-black font-angkor text-center text-3xl 2xl:text-4xl">
          My Meta Tycoons
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
      <div className="flex flex-col mt-3  bg-black min-w-screen min-h-[450px] md:px-36 px-60 pb-10">
        <h1 className="text-white font-angkor text-center text-3xl 2xl:text-4xl mt-8 mb-20">
          Updates
        </h1>

        {/* ADD */}

        {/* ADD */}

        {/* UPDATE */}
        {post.map((post) => (
          <div
            className="md:flex flex-col bg-white rounded-xl p-8 md:p-0 mt-10"
            key={post.id}
          >
            <div className="flex flex-row justify-end items-center  text-right mt-4 px-12">
              <div className="mr-4">
                <p className="text-4xl font-medium">{post.data().header}</p>
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
              <div className="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">{post.data().body}</p>
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
