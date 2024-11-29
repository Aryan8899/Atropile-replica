import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

// 1. Your WalletConnect Cloud project ID
const projectId = "224382cc5c46b1c10cdecbd4059dff6e";

// 2. Set chains (use BSC Testnet here)
const testnet = {
  chainId: 97, // BSC Testnet Chain ID
  name: "BSC Testnet", // Name of the chain
  currency: "BNB", // Currency used in the BSC Testnet
  explorerUrl: "https://testnet.bscscan.com", // Block Explorer URL for BSC Testnet
  rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/", // RPC URL for BSC Testnet
};

const metadata = {
  name: "Trade Market Cap",
  description: "Trade Market Cap",
  url: "https://trademarketcap.ai/", // origin must match your domain & subdomain
  icons: ["./apple-touch-icon.png"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK (optional)
  defaultChainId: 97, // Default to BSC Testnet
});

console.log("Ethers Config:", ethersConfig);
console.log("Testnet configuration:", testnet);

try {
  console.log('Creating Web3Modal instance...');
  // 5. Create a Web3Modal instance
  createWeb3Modal({
    ethersConfig,
    chains: [testnet], // Include BSC Testnet
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
  });

  console.log('Web3Modal instance created successfully');
} catch (error) {
  console.error('Error creating Web3Modal:', error);
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error('Root element not found');
} else {
  console.log('Root element found, rendering app...');
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Error rendering the app:', error);
  }
}
