import Image from 'next/image';
import a1 from '../assets/1.jpg';
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
import Header from '../components/Header';

export default function cstmint() {
  const claimNFT = (_amount) => {
    blockchain.smartContract.methods
      .mint(_amount)
      .send({
        gasLimit: '285000',
        to: ethers.utils.getAddress(
          '0xfE2c5e42198f20d2e7d17185a16095518AEFE8FE'
        ),
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
          // (0.01 * _amount).toString(),
          '0.079',
          'ether'
        ),
      })
      .once('error', (err) => {
        console.log(err);
        // setFeedback('Sorry, something went wrong please try again later.');
        // setClaimingNft(false);
      })
      .then((receipt) => {
        // setFeedback(
        //   'WOW, you now own a Nerdy Coder Clone. go visit Opensea.io to view it.'
        // );
        // setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-black">
      <div className=" bg-white bg-opacity-80 flex flex-col md:flex-row justify-center items-center md:items-start p-10 rounded-3xl shadow-lg  ">
        <Image
          src={a1}
          layout="fixed"
          objectFit="contain"
          width={360}
          height={380}
          alt=""
        />
        <div className="flex flex-col md:ml-8 mt-4 md:mt-2 justify-center items-center">
          <div className="px-8 py-2 bg-grey500 bg-opacity-30 flex flex-row justify-center items-center space-x-6">
            <p className="text-Black font-Montserrat text-xl md:text-3xl">
              Mint to Wallet
            </p>
          </div>
          <div className="flex flex-row items-center justify-between mt-12"></div>
          <input class="required:border-red-500 p-4 text-black border-0 rounded-lg w-96" />
          <p className="text-grey500 font-Montserrat text-center font-semibold text-3xl mt-6">
            {/* Cost: {mintCost.toString().substring(0, 4)}ETH */}
          </p>

          <div className="flex items-center justify-center md:justify-start mt-8 ">
            {blockchain.account === '' || blockchain.smartContract === null ? (
              <p
                className="inline-flex cursor-pointer font-semibold md:text-xl lg:text-2xl font-Montserrat tracking-wide text-white bg-fblue rounded-full px-14 py-4"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(connect());
                }}
              >
                Connect Wallet
              </p>
            ) : (
              <p
                className="inline-flex cursor-pointer font-semibold md:text-xl lg:text-2xl font-Montserrat tracking-wide text-white bg-fblue rounded-full px-14 py-4"
                onClick={(e) => {
                  e.preventDefault();
                  claimNFT(1);
                }}
              >
                Connect
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
