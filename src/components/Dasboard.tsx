//import React from "react";
//import pic1 from "../photos/pic1.png";
//import { useEffect } from "react";
//import { useWeb3ModalState } from "@web3modal/ethers5/react";
//import { useWeb3Modal } from "@web3modal/ethers5/react";
//import { useCallback } from "react";

const Dashboard = () => {
  // const { open, close } = useWeb3Modal();
  // const { open: isModalOpen } = useWeb3ModalState();

  // const handleConnect = useCallback(async () => {
  //   try {
  //     console.log("Attempting to open modal...");

  //     // Use open() method directly without await
  //     open();

  //     console.log("Modal should be opening");
  //   } catch (error) {
  //     console.error("Modal Open Error:", error);
  //   }
  // }, [open]);

  return (
    <div className=" min-h-screen  text-white space-y-4">
      {/* Header */}
      <div className="rotating-background"></div>

      <header className="flex flex-col items-center px-4 py-6 shadow-md relative">
        <h2 className="font-[Dela_Gothic_One], sans-serif text-[40px] sm:text-[50px] outline-text font-normal tracking-normal leading-[1.2em] text-white text-start no-underline flex items-center">
          <span className="mr-4">SuiTrump</span>
          <img
            src="https://framerusercontent.com/images/PX7OJIh09S4xt8yZNa9dVpjGoE.png"
            alt="trump"
            className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
          />
        </h2>

        {/* Connect Button - Mobile Specific Styles */}
        <button
          
          className="absolute top-2 right-2 bg-blue-400 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm sm:text-base sm:px-4 sm:py-2 sm:top-6 sm:right-6"
        >
          Connect
        </button>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Farming & Staking Section */}
        <div className="bg-blue-950 p-6 rounded-xl shadow-lg text-center flex flex-col justify-between border border-green-400 h-full relative">
  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
    {/* Left Side - Text Content */}
    <div className="text-left px-2 relative z-10">
      <h2 className="text-3xl font-bold tracking-wider uppercase text-blue-300 mb-4">
        Farming & Staking
      </h2>
      <p className="text-lg font-medium text-white mb-1">PINE to Harvest</p>
      <h3 className="text-4xl md:text-4xl font-bold text-white">0.000</h3>
      <p className="text-sm text-gray-400">~$0.00</p>

      <p className="text-lg font-medium text-white mt-6 mb-1">PINE in Wallet</p>
      <h3 className="text-4xl font-bold text-white">0.000</h3>
      <p className="text-sm text-gray-400">~$0.00</p>

      <button className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 md:px-8 md:py-3 mt-6 md:mt-8 rounded-md font-semibold transition-all w-full sm:w-auto">
        Connect Wallet
      </button>
    </div>

    {/* Right Side - Logo */}
    <div
      className="hidden sm:block relative w-full h-[250px] sm:h-[450px] bg-cover bg-center bg-no-repeat rounded-lg opacity-50"
      style={{
        backgroundImage: `url('https://framerusercontent.com/images/PX7OJIh09S4xt8yZNa9dVpjGoE.png')`,
      }}
    ></div>

    {/* Mobile-Specific Background */}
    <div
      className="block sm:hidden absolute inset-0 bg-cover bg-center opacity-20"
      style={{
        backgroundImage: `url('https://framerusercontent.com/images/PX7OJIh09S4xt8yZNa9dVpjGoE.png')`,
      }}
    ></div>
  </div>
</div>







        {/* Announcements Section */}
        <div className="bg-blue-950 p-6 rounded-xl shadow-lg text-center flex flex-col justify-between relative border border-green-400">
          <h2 className="text-3xl font-semibold tracking-wide text-blue-300 mb-4">
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
        <div className="bg-blue-950 p-6 rounded-lg shadow-lg border border-green-400">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            Atropine Stats
          </h2>
          <ul className="space-y-2 ">
            <li className="flex justify-between">
              <span className="text-blue-300">Market Cap</span>
              <span>$475,605</span>
            </li>
            <li className="flex justify-between">
              <span className="text-blue-300">Total Liquidity</span>
              <span>$747,994</span>
            </li>
            <li className="flex justify-between">
              <span className="text-blue-300">Total Minted</span>
              <span>27,555,347,489</span>
            </li>
            <li className="flex justify-between">
              <span className="text-blue-300">Circulating Supply</span>
              <span>24,233,553,850</span>
            </li>
            <li className="flex justify-between">
              <span className="text-blue-300">New PINE/block</span>
              <span>13,000</span>
            </li>
          </ul>
        </div>

        {/* Total Value Locked Section */}
        <div className="bg-blue-950 p-6 rounded-lg shadow-lg border border-green-400">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            Total Value Locked (TVL)
          </h2>
          <h3 className="text-4xl font-bold">$788,169</h3>
          <p className="mt-4 text-blue-300">Across all Farms and Pools</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
