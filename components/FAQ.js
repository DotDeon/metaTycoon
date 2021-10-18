import Image from "next/image";
import about1 from "../assets/about1.jpg";

function FAQ() {
  return (
    <div className="flex relative flex-col bg-fblue items-center">
      <h1 className="text-white font-angkor text-4xl mt-16">FAQs</h1>

      {/* FAQ1 */}
      <div className="flex relative flex-col md:px-64 py-10 ">
        <div className="tab w-full overflow-hidden border-t">
          <input
            className="absolute opacity-0 "
            id="tab-multi-one"
            type="checkbox"
            name="tabs"
          />
          <label
            className="block p-5 leading-normal cursor-pointer text-white"
            for="tab-multi-one"
          >
            What is Rich Fxxk about?
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5">
              9,999 generative NFT collection with ‘Ultimate Roadmap’ loaded
              with benefits for all Rich Fxxk holders. We want to build a
              community of people that GO BIG, DREAM BIG, HUSTLE, and INVEST ALL
              DAY.
            </p>
          </div>
        </div>
        {/* FAQ1 */}

        {/* FAQ2 */}
        <div className="tab w-full overflow-hidden border-t">
          <input
            className="absolute opacity-0 "
            id="tab-multi-two"
            type="checkbox"
            name="tabs"
          />
          <label
            className="block p-5 leading-normal cursor-pointer text-white"
            for="tab-multi-two"
          >
            When and where can I buy some Rich Fxxk NFTs?
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5">
              We'll be minting some time in Nov 2021, please join our discord
              for latest updates. After minting, you'll be able to purchase from
              the secondary market in Opensea.
            </p>
          </div>
        </div>
        {/* FAQ2 */}

        {/* FAQ3 */}
        <div className="tab w-full overflow-hidden border-t">
          <input
            className="absolute opacity-0 "
            id="tab-multi-three"
            type="checkbox"
            name="tabs"
          />
          <label
            className="block p-5 leading-normal cursor-pointer text-white"
            for="tab-multi-three"
          >
            Who are the people behind the team?
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5">
              Founded and co-founded by real estate investors, professionals,
              with vast experience in the real estate industry. Putting the
              elements of all their expertise and passion together -- Bringing
              to everyone, the NFT project we've always dream about.
            </p>
          </div>
        </div>
        {/* FAQ3 */}

        {/* FAQ4 */}
        <div className="tab w-full overflow-hidden border-t">
          <input
            className="absolute opacity-0 "
            id="tab-multi-four"
            type="checkbox"
            name="tabs"
          />
          <label
            className="block p-5 leading-normal cursor-pointer text-white"
            for="tab-multi-four"
          >
            What's different and unique about Rich Fxxk?
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5">
              In a quick summary, the team behind this project are real estate
              gurus and we strive to build a community sharing our expertise and
              rewarding holders for their involvement. Our whitepaper is pretty
              comprehensive and elaborates on what we are really about so please
              check out our whitepaper <a href="">here</a>!
            </p>
          </div>
        </div>
        {/* FAQ4 */}
      </div>
    </div>
  );
}

export default FAQ;
