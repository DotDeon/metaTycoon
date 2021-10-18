// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SmartContract is ERC721Enumerable, Ownable {
  using Strings for uint256;

  string public baseURI;
  string public baseExtension = ".json";
  string public notRevealedUri;
  uint256 public cost = 0.069 ether;
  uint256 public maxSupply = 9999;
  uint256 public nftPerAddressLimit = 1;
  bool public paused = false;
  bool public revealed = false;
  bool public onlyWhitelisted = true;
  bool public onlyVIP = true;
  bool public _canMint = false;
  address[] public whitelistedAddresses;
  address[] public vipAddresses;
  mapping(address => uint256) public addressMintedBalance;


  constructor(
    string memory _name,
    string memory _symbol,
    string memory _initBaseURI,
    string memory _initNotRevealedUri
  ) ERC721(_name, _symbol) {
    setBaseURI(_initBaseURI);
    setNotRevealedURI(_initNotRevealedUri);
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  // public
  function mint(uint256 _mintAmount) public payable {
    require(!paused, "the contract is paused");
    uint256 supply = totalSupply();
    require(_mintAmount > 0, "need to mint at least 1 NFT");
  //  require(_mintAmount <= maxMintAmount, "max mint amount per session exceeded");
    require(supply + _mintAmount <= maxSupply, "max NFT limit exceeded");

    if (msg.sender != owner()) {
        if(onlyWhitelisted == true) {
             _canMint = false;
            if(isWhitelisted(msg.sender) || isVIP(msg.sender))
            {
                
                _canMint = true;
                if(isVIP(msg.sender))
                {
                    cost = 0.00 ether;
                }
                
                if(isWhitelisted(msg.sender))
                {
                    cost = 0.69 ether;
                }
                if((supply + 1) == 600)
                {
                     onlyWhitelisted = false;
                     paused = true;
                }
                
                
            }
            require(_canMint, "user is not whitelisted");
            uint256 ownerMintedCount = addressMintedBalance[msg.sender];
            require(ownerMintedCount + _mintAmount <= nftPerAddressLimit, "max NFT per address exceeded");
            require(msg.value >= cost * _mintAmount, "insufficient funds");
            for (uint256 i = 1; i <= _mintAmount; i++) {
            addressMintedBalance[msg.sender]++;
            _safeMint(msg.sender, supply + i);
    }
        }
        else
        {

             require(msg.value >= cost * _mintAmount, "insufficient funds");
             for (uint256 i = 1; i <= _mintAmount; i++) {
             addressMintedBalance[msg.sender]++;
             _safeMint(msg.sender, supply + i); }
        }
    }
    else
    {
        require(msg.value >= cost * _mintAmount, "insufficient funds");
        for (uint256 i = 1; i <= _mintAmount; i++) {
        addressMintedBalance[msg.sender]++;
        _safeMint(msg.sender, supply + i);
    }
        
    }
    
    // for (uint256 i = 1; i <= _mintAmount; i++) {
    //     addressMintedBalance[msg.sender]++;
    //   _safeMint(msg.sender, supply + i);
    // }
  }
  
  function getCost() public view returns(string memory)
  {
              if((supply + 1) < 3000)
                {
                    cost = 0.79 ether;
                }
                else if((supply + 1) < 6000 )
                {
                    cost = 0.89 ether;
                }
                else if((supply + 1) < 6000)
                {
                    cost = 0.90 ether;
                }
      return cost.toString();
  }
  
  function isWhitelisted(address _user) public view returns (bool) {
    for (uint i = 0; i < whitelistedAddresses.length; i++) {
      if (whitelistedAddresses[i] == _user) {
          return true;
      }
    }
    return false;
  }
  
    function isVIP(address _user) public view returns (bool) {
    for (uint i = 0; i < vipAddresses.length; i++) {
      if (vipAddresses[i] == _user) {
          return true;
      }
    }
    return false;
  }

  function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
  }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );
    
    if(revealed == false) {
        return notRevealedUri;
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
  }

  //only owner
  function reveal() public onlyOwner() {
      revealed = true;
  }
  
  function setNftPerAddressLimit(uint256 _limit) public onlyOwner() {
    nftPerAddressLimit = _limit;
  }
  
  function setCost(uint256 _newCost) public onlyOwner() {
    cost = _newCost;
  }

//   function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner() {
//     maxMintAmount = _newmaxMintAmount;
//   }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }
  
  function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
    notRevealedUri = _notRevealedURI;
  }

  function pause(bool _state) public onlyOwner {
    paused = _state;
  }
  
  function setOnlyWhitelisted(bool _state) public onlyOwner {
    onlyWhitelisted = _state;
  }
  
  function whitelistUsers(address[] calldata _users) public onlyOwner {
    delete whitelistedAddresses;
    whitelistedAddresses = _users;
  }
 
   function vipUsers(address[] calldata _users) public onlyOwner {
    delete whitelistedAddresses;
    vipAddresses = _users;
  }
  
  function withdraw() public payable onlyOwner {
    (bool success, ) = payable(msg.sender).call{value: address(this).balance}("");
    require(success);
  }
}