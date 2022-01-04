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
import { collection, getDocs, orderBy, limit, query } from 'firebase/firestore';

function Banner() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [nftQTY, setNFTQty] = useState(1);
  const [mintMSG, setMintMsg] = useState('Mint');
  const [qtyLeft, setQtyLeft] = useState(20);
  const [minMint, setMinMint] = useState(1);
  const [nftData, setNftData] = useState([]);
  const [totalMint, setTotalMint] = useState();
  //console.log("iswhitelisted " + isWhitelisted);

  // https://api.opensea.io/api/v1/collection/metatycoon/stats

  const claimNFT = (_amount) => {
    var isWhitelisted;
    blockchain.smartContract.methods
      .isWhitelisted(blockchain.account)
      .call()
      .then(function (whitelisted) {
        var isWhitelisted = whitelisted;
        console.log('Check if User is whitelisted');
        if (isWhitelisted === true) {
          console.log('User is whitelisted');
          blockchain.smartContract.methods
            .isVIP(blockchain.account)
            .call()
            .then(function (VIP) {
              if (VIP === true) {
                var value = '0.000';
                setMintMsg('Busy');
                console.log('User is VIP');
                console.log(value);
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
                    console.log(err);
                  })
                  .then((receipt) => {
                    //   setClaimingNFT(false);
                    console.log('Success');
                    setMintMsg('Mint');
                  });
              } else {
                var value = '0.069';
                setMintMsg('Busy');
                console.log('User is whitelisted not VIP');
                console.log(value);
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
                    console.log(err);
                  })
                  .then((receipt) => {
                    setMintMsg('Mint');
                    console.log('Success');
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
                console.log('everyone can mint');
                var value = '0.069';
                setMintMsg('Busy');
                console.log(value);
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

                    console.log(err);
                  })
                  .then((receipt) => {
                    //   setClaimingNFT(false);
                    setMintMsg('Mint');
                    console.log('Success');
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
                console.log('Check if User is whitelisted');
                if (isWhitelisted === true) {
                  console.log('User is whitelisted');
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
                            console.log(mintNUM.toString());
                          });
                      } else {
                        blockchain.smartContract.methods
                          .qtyLeftForUser(blockchain.account)
                          .call()
                          .then(function (mintNUM) {
                            setQtyLeft(mintNUM);
                            console.log(mintNUM.toString());
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
                console.log(mintNUM.toString());
              });
          }
        });
    }
  }, [blockchain.smartContract, dispatch]);

  useEffect(() => {
    async function count() {
      try {
        const q = query(
          collection(db, 'NFTs'),
          orderBy('tokenID', 'desc'),
          limit(1)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setTotalMint(doc.data().tokenID);
        });
        return i;
      } catch (err) {
        console.log(err);
        return undefined;
      }
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
          <p className="text-white md:-mt-12 text-base font-angkor text-center">
            {totalMint} / 999 minted
          </p>
        </div>
        <div>
          <p className="text-white font-angkor text-center md:text-3xl mt-3">
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
