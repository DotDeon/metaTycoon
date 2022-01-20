import Image from 'next/image';
import Head from 'next/head';
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useState, useEffect, useRef } from 'react';
import { connect } from '../src/redux/blockchain/blockchainActions';
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../src/redux/data/dataActions';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { ethers } from 'ethers';
import { useRecoilState } from 'recoil';
import { walletState } from '../atoms/walletState';

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

const verifyMessage = async ({ message, address, signature }) => {
  try {
    console.log(message);
    console.log(signature);
    const signerAddr = await ethers.utils.verifyMessage(message, signature);

    if (signerAddr !== address) {
      return false;
    }

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default function login() {
  const router = useRouter();
  const [nftData, setNftData] = useState([]);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [wallet, setWallet] = useState();
  const [msg, setMsg] = useState();
  const [err, setErr] = useState('Loading...');
  const [msgRef, setMsgRef] = useState('Welcome to the Meta Tycoon Club');

  const [signature, setSignature] = useState();
  const [isValid, setIsValid] = useState(false);
  const [handlesgn, setHandleSgn] = useState(false);

  const handleSign = async (e) => {
    const sig = await signMessage({
      message: msgRef,
    });
    if (sig) {
      await setWallet(sig.address);
      await setMsg(sig.message);
      await setSignature(sig.signature);

      const isValid2 = await verifyMessage({
        message: sig.message,
        address: sig.address,
        signature: sig.signature,
      });
      console.log(isValid2);
      if (isValid2) {
        console.log('Is Valid');
        // await dispatch(connect());
        // dispatch(fetchData(blockchain.address));
        getMyNfts(sig.address);
        // getMyNfts(sig.message);
      } else {
        setErr('Invalid Signing Key');
      }
    }
  };

  const getMyNfts = async (nfts) => {
    dispatch(connect());
    const openseaData = await axios.get(
      'https://api.opensea.io/api/v1/assets?owner=' +
        nfts +
        '&asset_contract_addresses=0x9dC44047750a972dEE1B4b7c9Bb7474fE922992F&order_direction=asc&offset=0&limit=50'
    );
    console.log(109);
    setNftData(openseaData.data.assets);
    console.log(nfts);
    if (
      nfts.toUpperCase() ===
      '0xdE59F7B03c99719dC3fbcc61f99980a9f495E6ab'.toUpperCase()
    ) {
      // console.log(118);
      router.push('/admin');
    } else {
      console.log(120);
      console.log(openseaData.data.assets.length);
      if (openseaData.data.assets.length > 0) {
        console.log('Dash');
        router.push('/dashboard');
      } else {
        setErr('This Wallet owns no Meta-Tycoons');
        console.log(wallet);
      }
    }
  };

  useEffect(async () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      if (handlesgn) {
        handleSign();
        setHandleSgn(false);
      }
    }
  }, [blockchain.smartContract, dispatch]);

  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-black justify-center items-center ">
      <Head>
        <title>META TYCOON</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Angkor&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="flex items-center justify-center flex-col">
        <div
          onClick={() => router.push('/')}
          className="relative flex items-center h-10 cursor-pointer "
        >
          <Image
            src={logo}
            layout="fixed"
            objectFit="contain"
            width={100}
            height={100}
          />
        </div>
        <p className=" relative ml-2 mt-12 font-angkor items-center text-2xl text-white">
          META TYCOON
        </p>
      </div>
      <form
        className="m-4 flex flex-col justify-center items-center w-1/4"
        // onSubmit={handleSign}
      >
        {/* <input
          required
          type="text"
          ref={msgRef}
          name="message"
          className="textarea w-full textarea-bordered focus:ring focus:outline-none p-1 text-center rounded-md py-2 text-white bg-gray1 placeholder-white"
          placeholder="Metamask signing key"
        /> */}
        {blockchain.account === '' || blockchain.smartContract === null ? (
          <button
            className="text-purple-500 bg-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl hover:scale-90 transision duration-150"
            onClick={(e) => {
              e.preventDefault();
              setHandleSgn(true);
              dispatch(connect());
            }}
            type="submit"
          >
            Connect Wallet
          </button>
        ) : (
          <button
            className="text-purple-500 bg-black text-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl hover:scale-90 transision duration-150"
            onClick={(e) => {
              e.preventDefault();
              router.push('/');
            }}
          >
            <p>{err}</p>
          </button>
        )}
      </form>
    </div>
  );
}
