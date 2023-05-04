const getTransactionOptions = (network) => {
    switch (network) {
      case "mainnet":
      case "ropsten":
      case "rinkeby":
      case "kovan":
      case "goerli":
      case "calaveras":
        return { chain: network };
  
      case "polygon-mainnet":
        return {
          common: Common.forCustomChain(
            "mainnet",
            {
              name: network,
              chainId: 137,
              networkId: 137,
            },
            "byzantium"
          ),
        };
  
      case "polygon-mumbai":
        return {
          common: Common.forCustomChain(
            "goerli",
            {
              name: network,
              chainId: 80001,
              networkId: 80001,
            },
            "byzantium"
          ),
        };
  
      case "xDai":
        return {
          common: Common.forCustomChain(
            "mainnet",
            {
              name: network,
              chainId: 100,
              networkId: 100,
            },
            "byzantium"
          ),
        };
      case "binance-mainnet":
        return {
          common: Common.forCustomChain(
            "mainnet",
            {
              name: network,
              chainId: 56,
              networkId: 56,
            },
            "byzantium"
          ),
        };
      case "binance-testnet":
        return {
          common: Common.forCustomChain(
            "rinkeby",
            {
              name: network,
              chainId: 97,
              networkId: 97,
            },
            "byzantium"
          ),
        };
      default:
        throw Error("Unsupported chain");
    }
  };

module.exports={getTransactionOptions}