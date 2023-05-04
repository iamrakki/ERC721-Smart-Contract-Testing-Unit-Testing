// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract DEMO is ERC721, Pausable, Ownable, ERC721Burnable {
    mapping(uint256 => string) private _tokenURIs;
    string private _baseTokenURI="https://gateway.pinata.cloud/ipfs/";

    constructor() ERC721("DEMONFT", "DNFT") {}

    function _setTokenURI(uint256 _tokenId, string memory _tokenURI) internal virtual {
        require(_exists(_tokenId), "ERC721Metadata: URI set of nonexistent token");
        
        bytes memory tempBytes = bytes(_tokenURI);
        if(tempBytes.length > 0) _tokenURIs[_tokenId] = _tokenURI;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(address to,uint256 tokenId, string memory ipfsHash) public onlyOwner {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, ipfsHash);
    }

       
    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory _tokenURI = _tokenURIs[tokenId];    
        return string(abi.encodePacked(_baseTokenURI, _tokenURI));
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }
}