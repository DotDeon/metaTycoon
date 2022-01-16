import { ClipboardCopyIcon } from '@heroicons/react/solid';
import React, { useState, useEffect } from 'react';
import copy from 'copy-text-to-clipboard';
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
import axios from 'axios';
import { db } from '../firebase';

export default function Withdrawtable({ id, amount }) {
  const [value, setValue] = useState();
  const [status, setStatus] = useState(false);

  const completeOrder = async () => {
    const q = query(collection(db, 'NFTs'), where('tokenID', '==', id)); //Gold Tokens
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doci) => {
      const NFT = doc(db, 'NFTs', doci.id);

      updateDoc(NFT, { value: 0 });
    });
  };

  const getOwner = async () => {
    const openseaData = await axios.get(
      'https://api.opensea.io/api/v1/assets?token_ids=' +
        id +
        '&asset_contract_address=0x9dC44047750a972dEE1B4b7c9Bb7474fE922992F&order_direction=desc&offset=0&limit=20'
    );
    setValue(openseaData.data.assets[0].owner.address);
  };

  useEffect(() => {
    getOwner();
  }, []);

  return (
    <tbody>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">{id}</p>
            </div>
          </div>
        </td>
        <td className="px-3 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex flex-row y-1 justify-start px-10 items-center space-x-4">
            <p className="text-gray-900  text-base ">{value}</p>
            <div className="bg-gray3 hover:bg-fteal transform transution duration-300 ease-out1 rounded-lg px-1 py-1">
              <ClipboardCopyIcon
                className="h-7 text-gray1 "
                onClick={() => copy(value.toString())}
              />
            </div>
          </div>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap font-angkor">
            {amount}
          </p>
        </td>
        <td className="border-b border-gray-200 bg-white text-sm">
          <button
            href=""
            className="bg-gray3 font-bold text-black px-4 py-3 hover:bg-gray1 hover:scale-125 transition duration-300 ease-in-out rounded-lg"
            onClick={completeOrder}
          >
            Complete
          </button>
        </td>
      </tr>
    </tbody>
  );
}
