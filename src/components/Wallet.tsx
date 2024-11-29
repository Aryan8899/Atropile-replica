import {
    useWeb3Modal,
    useWeb3ModalAccount,
    useDisconnect,
  } from '@web3modal/ethers5/react';
  import { ethers } from 'ethers';
  
  
  export default function ConnectButton() {
    // Use modal hook
    const { open } = useWeb3Modal();
    const { isConnected } = useWeb3ModalAccount();
    const { disconnect } = useDisconnect();
  
    const PolygonMainnetParams = {
        chainId: '0x61', // 97 in hexadecimal
        chainName: 'BNB Smart Chain Testnet',
        nativeCurrency: {
          name: 'Binance Coin',
          symbol: 'tBNB', // Testnet BNB
          decimals: 18,
        },
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'], // Testnet RPC URL
        blockExplorerUrls: ['https://testnet.bscscan.com'], // Testnet Block Explorer
      };
      
    const handleConnect = async () => {
      open();
      try {
        if (typeof window.ethereum !== 'undefined') {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const { chainId } = await provider.getNetwork();
          console.log('Connected to chain:', chainId);
          if (chainId !== 56) {
            // BNB Smart Chain Testnet chain ID
            await provider.send('wallet_addEthereumChain', [PolygonMainnetParams]);
          }
        } else {
          console.error('window.ethereum is undefined. Please make sure you have a web3 provider installed.');
        }
      } catch (error) {
        console.error('Error switching to BNB Smart Chain Testnet:', error);
      }
    };
  
    const handleDisconnect = () => {
      disconnect();
    };
  
    return (
      <>
        {isConnected ? (
          <button
            className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg sm:top-6 sm:right-6 sm:px-4 sm:py-2"
            onClick={handleDisconnect}
          >
            Disconnect
          </button>
        ) : (
          <button
            className="w-25 rounded-3xl app-bg px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 hover:text-amber-100 transition-colors duration-300"
            onClick={handleConnect}
          >
            Connect
          </button>
        )}
      </>
    );
  }