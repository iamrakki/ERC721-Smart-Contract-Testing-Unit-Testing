// const {createTx} = require("../walletServices/create-Transaction")
// const {web3} = require("../web3/web3")
// const Contract_Address =process.env.CONTRACT_ADDRESS;
// const Contract_ABI = require("../../config/contractabi.json") // Change the ABI to the ERC721 contract ABI
// const network = process.env.NETWORK
// const Customer1=process.env.CUSTOMER_ADDRESS;

// const mintToken = async (data) => {
//     try{
//         var txObject = {};

//         txObject.to = Contract_Address;
//         txObject.value = "0x";

//         await erc721MintObject(data, txObject);

//         const txSerialized = await createTx(txObject, web3, network);
//         const txReceipt = await web3.eth.sendSignedTransaction(txSerialized);
//         console.log("Mint confirmation completed", {
//             txReceipt: txReceipt
//         });
//     } catch(err){
//         console.log("Error in mintToken:", err);
//     }  
// } 

// const erc721MintObject = async (data, txObject) => {
//     try {
//         const toAddress = data.toAddress;
//         const amount = data.amount;
//         const tokenURI = data.tokenURI; // Add a tokenURI parameter and use it to set the tokenURI

//         console.log("data:", data);

//         if(!web3) {
//             throw new Error("web3 object is undefined");
//         }

//         if(!Contract_Address) {
//             throw new Error("Contract address is undefined");
//         }

//         if(!Contract_ABI) {
//             throw new Error("Contract ABI is undefined");
//         }

//         if(!toAddress) {
//             throw new Error("toAddress parameter is undefined");
//         }

//         if(!amount) {
//             throw new Error("amount parameter is undefined");
//         }

//         if(!tokenURI) {
//             throw new Error("tokenURI parameter is undefined");
//         }

//         const myContract = new web3.eth.Contract(Contract_ABI, Contract_Address);

//         txObject.data = myContract.methods
//             .mintWithTokenURI(toAddress, amount, tokenURI) // Change the method to mintWithTokenURI
//             .encodeABI();
//     } catch(err){
//         console.log("Error in erc721MintObject:", err);
//         throw err;
//     }
// };

// module.exports= {mintToken};


const { createTx } = require("../walletServices/create-Transaction");
const { web3 } = require("../web3/web3");
const Contract_Address = process.env.CONTRACT_ADDRESS;
const Contract_ABI = require("../../config/contractabi.json");
const network = process.env.NETWORK;
const Customer1 = process.env.CUSTOMER_ADDRESS;

const mintToken = async (data) => {
  try {
    var txObject = {};

    txObject.to = Contract_Address;
    txObject.value = "0x";

    await erc20MintObject(data, txObject);

    const txSerialized = await createTx(txObject, web3, network);
    await web3.eth.sendSignedTransaction(txSerialized).on("receipt", async (Txreceipt) => {
      console.log("Mint confirmation completed", {
        Txreceipt: Txreceipt,
      });
    }).on("error", async (error) => {
      console.log(error);
    });
  } catch (err) {
    console.log(err);
  }
};

const erc20MintObject = async (data, txObject) => {
  const toAddress = data.toAddress;
  const tokenId = data.tokenId;
  const tokenURI = data.tokenURI;

  const myContract = new web3.eth.Contract(Contract_ABI, Contract_Address);

  const mintFunction = myContract.methods.safeMint(toAddress, tokenId, tokenURI);

  const encodedFunction = mintFunction.encodeABI();

  txObject.data = encodedFunction;
};

module.exports = { mintToken };
