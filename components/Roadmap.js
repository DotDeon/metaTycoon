import { useRouter } from "next/dist/client/router";
function Roadmap() {
  const router = useRouter();
  return (
    <div className="bg-fblue flex justify-center">
      <div className="container py-24">
        <div>
          <h1 className="text-center text-white font-angkor text-4xl">
            The Ultimate Roadmap (Whitepaper)
          </h1>
          <p className="text-center text-white font-bold text-lg mt-4">
            The Ultimate Roadmap is launched when the project is 100% sold
          </p>
        </div>
        <div className=" flex justify-center md:space-x-4 flex-col md:flex-row">
          <button
            className="bg-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transision duration-150"
            onClick={() =>
              window.open("http://whitepaper.richfxxk.com/", "_blank")
            }
          >
            Read Whitepaper
          </button>
          <button
            className="bg-white mt-10 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transision duration-150"
            onClick={() =>
              window.open("https://pdfhost.io/v/KzWVDVXb~_whitepaper", "_blank")
            }
          >
            Download Whitepaper
          </button>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
