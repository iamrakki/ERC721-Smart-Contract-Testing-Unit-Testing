const {createTx} = require("../walletServices/create-Transaction")
const {web3} = require("../web3/web3")
const Contract_Address =process.env.CONTRACT_ADDRESS;
const Contract_ABI = require("../../config/contractabi.json")
const network = process.env.NETWORK
const Customer1=process.env.CUSTOMER_ADDRESS;

const transferFromToken = async (data) => {
    try{
    var txObject = {};

    txObject.to = Contract_Address;
    txObject.value = "0x";
  
 
    await erc20transferFromObject(data, txObject);
        
    

    const txSerialized = await createTx(txObject, web3, network);
    web3.eth.sendSignedTransaction(txSerialized)
    // .on("transactionHash",async (hash) => {
    //     console.log("transferfrom conformation Completed", {
    //         hash : hash
    //     });
    // })
    .on("receipt",async (Txreceipt) => {
        console.log("transferfrom conformation Completed", {
          Txreceipt : Txreceipt
        });
    })
    .on("error", async (error) => {
        console.log(error);
    });
    }catch(err){
        console.log(err);
     
    }  
} 
const erc20transferFromObject = async (data, txObject) => {
  
    const from = data.from;
    const to = data.to;
    const tokenId = data.tokenId;
    // const tokenvalidity = data.tokenValidity;
    // //const graceperiod = data.graceperiod;
    // const royaltyReceiver = data.royaltyReceiver;
    // const royaltyPercentage = data.royaltyPercentage;
   
    
    console.log("data:", data);
    
    const myContract = new web3.eth.Contract(Contract_ABI, Contract_Address);
    
  
    txObject.data = myContract.methods
      .transferFrom(from,to,tokenId)
      .encodeABI();
    
    
};

module.exports ={transferFromToken};