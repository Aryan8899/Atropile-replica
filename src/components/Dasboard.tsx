import React from "react";
import pic1 from "../photos/pic1.png";
import { useWeb3Modal } from "@web3modal/ethers5/react";


const Dashboard = () => {
  // Inside your button click handler
const handleConnect = async () => {
 
    open(); // This will open the Web3Modal for wallet connection

};

  const { open } = useWeb3Modal();

  return (
    <div className=" min-h-screen bg-blue-950 text-white space-y-4">
      {/* Header */}
      <header className="flex flex-col items-center px-4 py-6 bg-blue-950 shadow-md relative">
        <img
          src="https://atropine.io/static/media/logo.33181fc782c8863920c5.png"
          alt="Logo"
          className="h-10 w-auto mb-2 sm:h-16"
        />
        <h2 className="text-center text-lg md:text-lg px-2">
          Fully Decentralized Layered Yield Farm on IPFS & Pulsechain
        </h2>
        <button
          onClick={handleConnect}
          className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg sm:top-6 sm:right-6 sm:px-4 sm:py-2"
        >
          Connect
        </button>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Farming & Staking Section */}
        <div className="bg-[#280046e0] p-6 rounded-xl shadow-lg text-center flex flex-col justify-between border border-green-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            {/* Left Side - Text Content */}
            <div className="text-left px-2">
              <h2 className="text-3xl font-bold tracking-wider uppercase text-green-400 mb-4">
                Farming & Staking
              </h2>
              <p className="text-lg font-medium text-white mb-1">
                PINE to Harvest
              </p>
              <h3 className="text-4xl md:text-4xl font-bold text-white">
                0.000
              </h3>
              <p className="text-sm text-gray-400">~$0.00</p>

              <p className="text-lg font-medium text-white mt-6 mb-1">
                PINE in Wallet
              </p>
              <h3 className="text-4xl font-bold text-white">0.000</h3>
              <p className="text-sm text-gray-400">~$0.00</p>

              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 md:px-8 md:py-3 mt-6 md:mt-8 rounded-md font-semibold transition-all w-full sm:w-auto">
                Connect Wallet
              </button>
            </div>

            {/* Right Side - Logo */}
            <div className="relative">
              <div className="bg-[#280046e0] rounded-full p-10 mx-auto flex items-center justify-center w-[200px] h-[200px] border border-green-400">
                <img
                  src={pic1}
                  alt="Farming Logo"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Announcements Section */}
        <div className="bg-[#280046e0] p-6 rounded-xl shadow-lg text-center flex flex-col justify-between relative border border-green-400">
          <h2 className="text-3xl font-semibold tracking-wide text-green-300 mb-4">
            Announcements
          </h2>
          <iframe
            src="https://dexscreener.com/pulsechain/0x0E4B3d3141608Ebc730EE225666Fd97c833d553E?embed=1&theme=dark&trades=0&info=0"
            title="Dex Screener Chart"
            className="w-full h-[400px] rounded-md border border-gray-700"
          ></iframe>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Atropine Stats */}
        <div className="bg-[#280046e0] p-6 rounded-lg shadow-lg border border-green-400">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Atropine Stats
          </h2>
          <ul className="space-y-2 ">
            <li className="flex justify-between">
              <span className="text-green-400">Market Cap</span>
              <span>$475,605</span>
            </li>
            <li className="flex justify-between">
              <span className="text-green-400">Total Liquidity</span>
              <span>$747,994</span>
            </li>
            <li className="flex justify-between">
              <span className="text-green-400">Total Minted</span>
              <span>27,555,347,489</span>
            </li>
            <li className="flex justify-between">
              <span className="text-green-400">Circulating Supply</span>
              <span>24,233,553,850</span>
            </li>
            <li className="flex justify-between">
              <span className="text-green-400">New PINE/block</span>
              <span>13,000</span>
            </li>
          </ul>
        </div>

        {/* Total Value Locked Section */}
        <div className="bg-[#280046e0] p-6 rounded-lg shadow-lg border border-green-400">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Total Value Locked (TVL)
          </h2>
          <h3 className="text-4xl font-bold">$788,169</h3>
          <p className="mt-4 text-green-400">Across all Farms and Pools</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
