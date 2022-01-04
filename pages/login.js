import Image from 'next/image';
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useState, useEffect } from 'react';
import { connect } from '../src/redux/blockchain/blockchainActions';
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../src/redux/data/dataActions';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';

export default function login() {
  const router = useRouter();
  const [nftData, setNftData] = useState([]);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [nftAddress, setNFTAddress] = useState();
  // useState(
  //   '0x3003f87bfad77e9aeca9f1c72fa5914bf11cb81d'
  // );

  useEffect(() => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      setNFTAddress(blockchain.account);

      const getMyNfts = async () => {
        //TODO: Remove hardcoded Address
        const openseaData = await axios.get(
          'https://api.opensea.io/api/v1/assets?owner=' +
            '0x3003f87bfad77e9aeca9f1c72fa5914bf11cb81d' +
            '&asset_contract_addresses=0x9dC44047750a972dEE1B4b7c9Bb7474fE922992F&order_direction=asc&offset=0&limit=50'
        );

        setNftData(openseaData.data.assets);
        console.log(openseaData.data.assets);

        if (openseaData.data.assets.length > 0) {
          console.log('Log In');
          router.push('/dashboard');
        } else {
          console.log('Cant log In');
        }
      };

      return getMyNfts();
    }
  }, [blockchain.smartContract, dispatch]);

  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-black justify-center items-center ">
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
      {/* <button
        className="text-purple-500 bg-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl hover:scale-90 transision duration-150 w-96"
        onClick={(e) => {
          // e.preventDefault();
          dispatch(connect());
        }}
      >
        Connect Wallet
      </button> */}
      {blockchain.account === '' || blockchain.smartContract === null ? (
        <button
          className="text-purple-500 bg-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl hover:scale-90 transision duration-150"
          onClick={(e) => {
            e.preventDefault();
            dispatch(connect());
          }}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          className="text-purple-500 bg-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl hover:scale-90 transision duration-150"
          // onClick={(e) => {
          //   e.preventDefault();
          //   claimNFT(nftQTY);
          // }}
        >
          <p>Loading...</p>
        </button>
      )}
    </div>
  );
}
