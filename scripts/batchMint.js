const { ethers } = require("hardhat");

async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.attach("0x1C98B08D9856841CF4B20C79aFe02b3d1B457331");

  // Generate an array of recipient addresses
  const recipients = [
    "0xBeEFE0874FFAC2908881a165082c5047165Ca81e",
    "0x6478d6F8f95C9b47157Be453c77Ea1762c30413d",
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
    "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
    // Add more recipient addresses as needed
  ];

  // Generate an array of token URIs corresponding to the recipients
  const tokenURIs = [
    "QmWyXFSAm52X2GrDrkNpksYHzpPURbyhGmk8D5LupaH26m",
    "QmSukxs2PnFNbcDGnkZacW1dAzZiaEkgu7nCssbwZFdqYf",
    "Qmd5tYSxi7z3jQQfMVwSTyDxcUpxsbeZQm8j31a6iqJ4QB",
    "QmNNy7rX48hgjTZ5eyhwN1hFVKs5qiVcdudkC6c95dKpqC",
    "QmT7cpRpCwvqhEhM2jGeEPCWTNXtb4yAsjFSogtkhruo3j",
    // Add more token URIs as needed
  ];

  // Batch mint NFTs
  const batchMint = await myNFT.batchMint(recipients, tokenURIs);

  // Wait for the transaction to be mined
  await batchMint.wait();

  console.log("Batch minting completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
