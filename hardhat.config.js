require("@nomicfoundation/hardhat-toolbox");

// Configuración de Sepolia - RPC público
const SEPOLIA_RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com"\;
const PRIVATE_KEY = "b4639ca4ac50f58dafa88701c1e8e83b878b765075644a022b7f9f1af0d42f92";

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111
    }
  }
};
