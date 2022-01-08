import Image from 'next/image';

function FAQ() {
  return (
    <div className="flex relative flex-col bg-black items-center">
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
            htmlFor="tab-multi-one"
          >
            What is Meta Tycoon about?
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5">
              9,999 generative NFT collection packed with utilities. The
              ‘Ultimate Roadmap’ loaded with benefits for all Meta Tycoon NFT
              holders.
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
            htmlFor="tab-multi-two"
          >
            How much is it to mint my Meta Tycoon NFTs?
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5">0.079ETH + gas fees</p>
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
            htmlFor="tab-multi-three"
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
            htmlFor="tab-multi-four"
          >
            What's different and unique about Meta Tycoon?
          </label>
          <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5">
              In a quick summary, Meta Tycoon NFT holders will co-own land
              parcel(s) in the metaverse and be tycoons in the Metaverse
              together! Read more about our plans in the whitepaper{' '}
              <a
                className="cursor-pointer"
                onClick={() =>
                  window.open('http://whitepaper.meta-tycoon.club/', '_blank')
                }
              >
                here
              </a>
              !
            </p>
          </div>
        </div>
        {/* FAQ4 */}
      </div>
    </div>
  );
}

export default FAQ;
