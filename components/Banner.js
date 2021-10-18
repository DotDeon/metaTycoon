import banner from "../assets/banner.png";
import Countdown from "./Countdown";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../src/redux/blockchain/blockchainActions";
import { fetchData } from "../src/redux/data/dataActions";

function Banner() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [nftQTY, setNFTQty] = useState(1);

  const claimNFT = (_amount) => {
    // setClaimingNFT(true);
    //console.log(blockchain.smartContract.methods.cost.value);
    var Cost;

    blockchain.smartContract.methods
      .getCost()
      .call()
      .then(function (cost) {
        Cost = cost;
        console.log(Cost);
        var canMint = false;

        blockchain.smartContract.methods
          .isVIP(blockchain.account)
          .call()
          .then(function (whiteList) {
            if (whiteList) {
              canMint = true;
              Cost = "00000000";
              if (canMint) {
                console.log("Can Mint");
                console.log(Cost);
                blockchain.smartContract.methods
                  .mint(nftQTY)
                  .send({
                    from: blockchain.account,
                    value: blockchain.web3.utils.toWei(
                      (Cost * 1).toString(),
                      "wei"
                    ),
                  })
                  .once("error", (err) => {
                    //  setClaimingNFT(false);
                    console.log(err);
                  })
                  .then((receipt) => {
                    //   setClaimingNFT(false);
                    console.log("Success");
                    //  setFeedback("Success");
                  });
              }
            } else {
              console.log("False");
            }

            if (!canMint) {
              blockchain.smartContract.methods
                .isWhitelisted(blockchain.account)
                .call()
                .then(function (whiteList) {
                  if (whiteList) {
                    console.log("Whitelisted");
                    canMint = true;
                    if (canMint) {
                      console.log("Can Mint");
                      console.log(Cost);
                      blockchain.smartContract.methods
                        .mint(nftQTY)
                        .send({
                          from: blockchain.account,
                          value: blockchain.web3.utils.toWei(
                            (Cost * 1).toString(),
                            "wei"
                          ),
                        })
                        .once("error", (err) => {
                          //  setClaimingNFT(false);
                          console.log(err);
                        })
                        .then((receipt) => {
                          //   setClaimingNFT(false);
                          console.log("Success");
                          //  setFeedback("Success");
                        });
                    }
                  } else {
                    console.log("Not Whitelisted");
                    canMint = false;
                  }
                });
            }
          });
      });
  };

  useEffect(() => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  }, [blockchain.smartContract, dispatch]);
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px]">
      <Image src={banner} layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <Countdown className="" />

        <p className="text-sm sm:text-lg font-bold text-white mt-10">
          Countdown to official Rich Fxxk minting day!
        </p>
        {blockchain.account === "" || blockchain.smartContract === null ? (
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
              claimNFT(1);
            }}
          >
            Mint
          </button>
        )}
      </div>
    </div>
  );
}

export default Banner;
