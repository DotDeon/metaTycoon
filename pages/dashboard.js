import Aheader from '../components/admin/aHeader';
import Head from 'next/head';
import Collectioncard from '../components/admin/Collectioncard';
import img from '../assets/1.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

export default function Dashboard() {
  const [nftData, setNftData] = useState([]);
  const [nftAddress, setNFTAddress] = useState(
    '0x3003f87bfad77e9aeca9f1c72fa5914bf11cb81d'
  );

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        // 'https://api.opensea.io/api/v1/assets?owner=0x3003f87bfad77e9aeca9f1c72fa5914bf11cb81d&asset_contract_addresses=0x9dC44047750a972dEE1B4b7c9Bb7474fE922992F&order_direction=asc&offset=0&limit=50

        'https://api.opensea.io/api/v1/assets?owner=' +
          nftAddress +
          '&asset_contract_addresses=0x9dC44047750a972dEE1B4b7c9Bb7474fE922992F&order_direction=asc&offset=0&limit=50'
      );

      setNftData(openseaData.data.assets);
      console.log(openseaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="min-h-screen bg-gray3 overflow-x-hidden">
      <Head>
        <title>META TYCOON</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
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
          <div className="flex flex-col text-left font-angkor text-white mt-8">
            <p>Balance: $400</p>
            <p className="mt-2">Pending Withdrawl: $0</p>
          </div>
        </div>
        <div className="flex flex-col text-right font-angkor text-white justify-end items-end">
          <p>NEXT WITHDRAWAL DATE</p>
          <p>1 December 2022</p>
          <button
            className="bg-gray1 mt-5 px-10 py-3 shadow-md rounded-full hover:shadow-xl hover:scale-90 transision duration-150"
            // onClick={(e) => {
            //   e.preventDefault();
            //   dispatch(connect());
            // }}
          >
            Withdraw
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-3  min-w-screen md:px-36 px-60 pb-10">
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
      <Footer />
    </div>
  );
}
