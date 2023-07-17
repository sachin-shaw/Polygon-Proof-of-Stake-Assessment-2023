require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/xRxE8vSyrjx5zG60VMEtB6gz9KFdr7r_",
      accounts: [
        "6b16f9c40a50b61e7cab952555082e1fa003926e30fbe50f84bbac0af0cb6a02",
      ],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [
        "6b16f9c40a50b61e7cab952555082e1fa003926e30fbe50f84bbac0af0cb6a02",
      ],
    },
  },
  etherscan: {
    apiKey: "81HXADAXTQ1IH1TRTUHM1APNXR1M7CNX7N",
  },
  polygonscan: {
    apiKey: "D6QEU6KPT7MYHQ3KAJTYJRM6VYZ7AZ4CWQ",
  },
};
