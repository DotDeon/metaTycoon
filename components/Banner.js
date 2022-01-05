import banner from '../assets/banner.png';
import banner2 from '../assets/banner2.png';
import Countdown from './Countdown';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../src/redux/blockchain/blockchainActions';
import { fetchData } from '../src/redux/data/dataActions';
import Slider from 'react-input-slider';
import axios from 'axios';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  orderBy,
  limit,
  query,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

function Banner() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [nftQTY, setNFTQty] = useState(1);
  const [mintMSG, setMintMsg] = useState('Mint');
  const [qtyLeft, setQtyLeft] = useState(20);
  const [minMint, setMinMint] = useState(1);
  const [nftData, setNftData] = useState([]);
  const [totalMint, setTotalMint] = useState();

  const CreateNFT = async (token) => {
    const openseaData = await axios.get(
      'https://api.opensea.io/api/v1/assets?asset_contract_addresses=0x9dc44047750a972dee1b4b7c9bb7474fe922992f&order_direction=desc&offset=0&limit=1'
    );

    if (token !== openseaData.data.assets[0].token_id) {
      console.log('Need More Tokens');
      console.log(token);
      console.log(openseaData.data.assets[0].token_id);
      var reqTokens =
        parseInt(openseaData.data.assets[0].token_id) - parseInt(totalMint);
      var startTokens = parseInt(token) + 1;
      var i = startTokens;
      while (i <= openseaData.data.assets[0].token_id) {
        const docRef = await addDoc(collection(db, 'NFTs'), {
          tokenID: i,
          value: 0,
          pending: 0,
          timestamp: serverTimestamp(),
        });
        i++;
      }
    }
  };

  // https://api.opensea.io/api/v1/collection/metatycoon/stats
  const createNFTs = async () => {
    return;
    var total = totalMint; //711
    var i = 0;
    while (i < nftQTY) {
      //20

      const docRef = await addDoc(collection(db, 'NFTs'), {
        tokenID: total + 1,
        value: 0,
        pending: 0,
        timestamp: serverTimestamp(),
      });
      i++;
    }
  };

  const claimNFT = (_amount) => {
    var isWhitelisted;
    blockchain.smartContract.methods
      .isWhitelisted(blockchain.account)
      .call()
      .then(function (whitelisted) {
        var isWhitelisted = whitelisted;

        if (isWhitelisted === true) {
          blockchain.smartContract.methods
            .isVIP(blockchain.account)
            .call()
            .then(function (VIP) {
              if (VIP === true) {
                var value = '0.000';
                setMintMsg('Busy');

                blockchain.smartContract.methods
                  .mint(nftQTY)
                  .send({
                    from: blockchain.account,

                    value: blockchain.web3.utils.toWei(
                      (value * nftQTY).toString(),
                      'ether'
                    ),
                  })
                  .once('error', (err) => {
                    setMintMsg('Mint');
                  })
                  .then((receipt) => {
                    //   setClaimingNFT(false);

                    setMintMsg('Mint');
                    createNFTs();
                  });
              } else {
                var value = '0.069';
                setMintMsg('Busy');

                blockchain.smartContract.methods
                  .mint(nftQTY)
                  .send({
                    from: blockchain.account,

                    value: blockchain.web3.utils.toWei(
                      (value * nftQTY).toString(),
                      'ether'
                    ),
                  })
                  .once('error', (err) => {
                    setMintMsg('Mint');
                  })
                  .then((receipt) => {
                    setMintMsg('Mint');

                    createNFTs();

                    setFeedback('Success');
                  });
              }
            });
        } else {
          blockchain.smartContract.methods
            .onlyWhitelisted()
            .call()
            .then(function (onlyWhitelist) {
              if (onlyWhitelist === true) {
                setMintMsg("Can't Mint yet");
              } else {
                var value = '0.069';
                setMintMsg('Busy');

                blockchain.smartContract.methods
                  .mint(nftQTY)
                  .send({
                    from: blockchain.account,

                    value: blockchain.web3.utils.toWei(
                      (value * nftQTY).toString(),
                      'ether'
                    ),
                  })
                  .once('error', (err) => {
                    setMintMsg('Mint');
                  })
                  .then((receipt) => {
                    //   setClaimingNFT(false);
                    setMintMsg('Mint');

                    createNFTs();
                    //setFeedback("Success");
                  });
              }
            });
        }
      });
  };

  useEffect(() => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));

      blockchain.smartContract.methods
        .onlyWhitelisted()
        .call()
        .then(function (onlyWhitelist) {
          if (onlyWhitelist === true) {
            var isWhitelisted;
            blockchain.smartContract.methods
              .isWhitelisted(blockchain.account)
              .call()
              .then(function (whitelisted) {
                var isWhitelisted = whitelisted;

                if (isWhitelisted === true) {
                  blockchain.smartContract.methods
                    .isVIP(blockchain.account)
                    .call()
                    .then(function (VIP) {
                      if (VIP === true) {
                        blockchain.smartContract.methods
                          .qtyLeftForVIP(blockchain.account)
                          .call()
                          .then(function (mintNUM) {
                            setQtyLeft(mintNUM);
                          });
                      } else {
                        blockchain.smartContract.methods
                          .qtyLeftForUser(blockchain.account)
                          .call()
                          .then(function (mintNUM) {
                            setQtyLeft(mintNUM);
                          });
                      }
                    });
                }
              });
          } else {
            blockchain.smartContract.methods
              .qtyLeftForUser(blockchain.account)
              .call()
              .then(function (mintNUM) {
                setQtyLeft(mintNUM);
              });
          }
        });
    }
  }, [blockchain.smartContract, dispatch]);

  useEffect(() => {
    async function count() {
      const q = query(
        collection(db, 'NFTs'),
        orderBy('tokenID', 'desc'),
        limit(1)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setTotalMint(doc.data().tokenID);
        CreateNFT(doc.data().tokenID);
      });
    }

    return count();
  }, [db]);

  return (
    <div className="relative h-[400px] sm:h-[400px] lg:h-[600px] xl:h-[950px]">
      <Image src={banner} layout="fill" objectFit="cover" />
      {/* <Image src={banner2} layout="fill" objectFit="cover" className="mt-12" /> */}
      {/* <img src={banner2} alt="" className="min-w-screen h-32" /> */}
      <Image
        src={banner2}
        layout="fill"
        objectFit="contain"
        className="mt-12 md:mt-24"
      />
      <div className="ml-2 absolute top-1/2 md:top-1/2 w-full text-center">
        {/* <Countdown className="pl-4" /> */}
        <div>
          <p className="text-white md:-mt-12 text-lg font-mono text-center">
            {totalMint} / 999 minted
          </p>
        </div>
        <div>
          <p className="text-white font-bold text-center md:text-3xl mt-3">
            {' '}
            Price: {`${(nftQTY * 0.069).toString().substring(0, 5)}`} ETH
          </p>
        </div>
        <div className="flex flex-row"></div>
        <div className="flex flex-row md:mt-6 justify-center">
          <p className="mr-4 font-bold text-white">1</p>
          <Slider
            styles={{
              track: {
                backgroundColor: '#1d4c74',
              },
              active: {
                backgroundColor: '#3d707e',
              },
            }}
            axis="x"
            className="mt-2"
            xmax={qtyLeft}
            xmin={minMint}
            x={nftQTY}
            onChange={({ x }) => {
              if (mintMSG.substr(0, 4) == 'Mint') {
                setNFTQty(x);
                setMintMsg('Mint' + ' ' + x);
              }
            }}
          />
          <p className="ml-4 font-bold text-white">{qtyLeft}</p>
        </div>
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
            onClick={(e) => {
              e.preventDefault();
              claimNFT(nftQTY);
            }}
          >
            <p>{mintMSG}</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default Banner;
