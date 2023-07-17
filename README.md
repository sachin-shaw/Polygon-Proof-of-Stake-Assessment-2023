# NFT Collection Deployment and Management with MyNFT Contract and Polygon Bridge

This project showcases the deployment and management of an NFT collection using the MyNFT contract, along with the utilization of the Polygon Bridge for seamless transfer of NFTs between Ethereum and Polygon networks.  The contract is implemented in Solidity and follows the ERC721 standard. It includes additional functionalities for batch minting and batch transferring of NFTs. The project aims to generate a collection of NFTs, store them on IPFS, deploy the NFT contract on the Ethereum network, map the collection using the Polygon network token mapper, and perform batch minting and batch transferring of NFTs.

## Getting Started

### Prerequisites

To set up and execute the project, ensure that you have the following:

- DALLE 2 or Midjourney or Lexica for image generation.
- An IPFS account and access to pinata.cloud or a similar service for storing the NFT images.
- Access to the Ethereum network for contract deployment.
- Knowledge of the Polygon network and familiarity with the token mapper tool.
- Hardhat framework installed for scripting and testing.

### Execution

Follow the steps below to execute the project:

1. **Generate a 5-item collection**: Use Lexica to generate a collection of 5 unique NFTs. Ensure that each NFT is distinct and represents your desired collection.
2. **Store items on IPFS**: Upload the generated NFT items to IPFS using pinata.cloud or a similar service. Obtain the IPFS hashes for each item to be used as the token URIs.
3. **Deploy the NFT Contract**: Deploy the MyNFT contract on the Ethereum network. During deployment, set a suitable name and symbol for the contract and provide a detailed prompt description for the NFTs.
   - Execute the command: `npx hardhat run scripts/deploy.js --network goerli`
   - MyNFT contract deployed to: `0x1C98B08D9856841CF4B20C79aFe02b3d1B457331`
5. **Implement promptDescriptionDetail function**: Enhance the MyNFT contract by implementing the `promptDescriptionDetail` function. This function should return a detailed description of the prompt used to generate the NFTs.
6. **Map the NFT collection**: Map the NFT collection on the Polygon network using the token mapper tool. This step is optional but can be helpful for visualizing and interacting with the collection on the Polygon network.
   - Ethereum address: `0x1C98B08D9856841CF4B20C79aFe02b3d1B457331`
   - Child Address: `0xcE74Eff8e6c77d86373a73cb99D04712d2a81569`
8. **Batch Mint NFTs**: Write a script to perform batch minting of all 5 NFTs. Utilize the `batchMint` function of the MyNFT contract to assign each NFT to a recipient address and set the corresponding IPFS hash as the token URI.
   - Execute the command: `npx hardhat run scripts/batchMint.js --network goerli`
9. **Batch Transfer NFTs to Polygon Mumbai**: Write a script to perform batch transferring of all 5 NFTs from the Ethereum network to the Polygon Mumbai network using the FxPortal Bridge. Ensure that the NFTs are approved for transfer and deposit them to the Bridge.
   - Execute the command: `npx hardhat run scripts/batchTransfer.js --network goerli`
10. **Approve NFTs for Transfer**: Implement the necessary steps to approve the NFTs for transfer from the Ethereum network to the Polygon Mumbai network.
11. **Deposit NFTs to the Bridge**: Perform the required operations to deposit the NFTs to the FxPortal Bridge. This step enables the secure transfer of the NFTs from the Ethereum network to the Polygon Mumbai network.
12. **Test balanceOf on Mumbai**: Test the `balance` function on the Polygon Mumbai network to verify the NFT balance of a specific address.
    

## Contract Addresses

- Ethereum address: `0x1C98B08D9856841CF4B20C79aFe02b3d1B457331`
- Child Address: `0xcE74Eff8e6c77d86373a73cb99D04712d2a81569`

## Batch Mint Script
The provided hardhat script demonstrates how to batch mint NFTs using the batchMint function of the ERC721 contract. Here are the key steps performed in the script:

1. Retrieve the deployed ERC721 contract on Ethereum using the contract's address.
2. Generate an array of recipient addresses, specifying the recipients who will receive the minted NFTs.
3. Generate an array of token URIs corresponding to the recipients. Each token URI represents the metadata of the respective NFT.
4. Call the batchMint function of the ERC721 contract, passing the array of recipient addresses and the array of token URIs.
5. Wait for the transaction to be mined and confirmed.
6. Output a completion message once the batch minting process is finished.
Note: The script assumes that the necessary contracts are deployed and accessible on the Goerli Ethereum Testnet.

## Batch Transfer Script
The provided hardhat script demonstrates how to batch transfer NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge. Here are the key steps performed in the script:

1. Set up connections to the Ethereum Goerli Testnet and wallet using the network address and private key.
2. Retrieve the deployed ERC721 contract on Ethereum using the contract's address.
3. Get the FXRoot contract instance by providing the contract ABI and address.
4. Define the token IDs to transfer in the tokenIds array.
5. Approve the NFTs for transfer by calling the setApprovalForAll function on the ERC721 contract, passing the FXRoot contract address as the operator.
6. Iterate over the token IDs and deposit each NFT to the FXRoot contract using the deposit function. Provide the ERC721 contract address, recipient wallet address, token ID, and arbitrary bytes data as arguments.
7. After each deposit, wait for the transaction to be confirmed before proceeding to the next one.
8. Once all NFTs are approved and deposited, the script outputs the balance of the recipient wallet on the Mumbai network using the balanceOf function of the ERC721 contract.
Note: The script assumes that the necessary contracts are deployed and accessible on the respective networks

## Authors
Sachin kumar

## License

This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.
