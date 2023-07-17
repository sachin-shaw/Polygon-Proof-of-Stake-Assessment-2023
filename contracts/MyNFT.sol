// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private tokenIdCounter;

    string private promptDescription;
    mapping(uint256 => string) private tokenURIs;

    address private contractOwner;

    constructor(
        string memory name,
        string memory symbol,
        string memory _promptDescription
    ) ERC721(name, symbol) {
        promptDescription = _promptDescription;
        contractOwner = msg.sender;
    }

    function promptDescriptionDetail() public view returns (string memory) {
        return promptDescription;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        return tokenURIs[tokenId];
    }

    function mintNFT(
        address recipient,
        string memory _tokenURI
    ) public returns (uint256) {
        require(
            msg.sender == contractOwner,
            "Only contract owner can mint NFTs"
        );

        uint256 newTokenId = tokenIdCounter.current();
        _safeMint(recipient, newTokenId);
        setTokenURI(newTokenId, _tokenURI);
        tokenIdCounter.increment();
        return newTokenId;
    }

    function setTokenURI(
        uint256 tokenId,
        string memory _tokenURI
    ) internal virtual {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI set of nonexistent token"
        );
        tokenURIs[tokenId] = _tokenURI;
    }

    function batchMint(
        address[] memory recipients,
        string[] memory tokenURIsArray
    ) public returns (uint256[] memory) {
        require(
            recipients.length == tokenURIsArray.length,
            "BatchMint: Arrays length mismatch"
        );

        uint256[] memory newTokenIds = new uint256[](recipients.length);

        for (uint256 i = 0; i < recipients.length; i++) {
            newTokenIds[i] = mintNFT(recipients[i], tokenURIsArray[i]);
        }

        return newTokenIds;
    }
}
