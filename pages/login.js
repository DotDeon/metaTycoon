import Image from 'next/image';
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { useRouter } from 'next/dist/client/router';

export default function login() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-fblue justify-center items-center ">
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
          RICH FXXK
        </p>
      </div>
      <button
        className="text-purple-500 bg-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl hover:scale-90 transision duration-150 w-96"
        onClick={(e) => {
          router.push('/dashboard');
          //   e.preventDefault();
          //   dispatch(connect());
        }}
      >
        Connect Wallet
      </button>
    </div>
  );
}
