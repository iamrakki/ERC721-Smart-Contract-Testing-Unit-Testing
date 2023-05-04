const {createTx} = require("../walletServices/create-Transaction")
const {web3} = require("../web3/web3")
const Contract_Address =process.env.CONTRACT_ADDRESS;
const Contract_ABI = require("../../config/contractabi.json")
const network = process.env.NETWORK
const Customer1=process.env.CUSTOMER_ADDRESS;

const unpauseToken = async (data) => {
    try{
    var txObject = {};

    txObject.to = Contract_Address;
    txObject.value = "0x";
  
 
    await erc20unpauseObject(data, txObject);
        
    

    const txSerialized = await createTx(txObject, web3, network);
    web3.eth.sendSignedTransaction(txSerialized)
    .on("receipt",async (Txreceipt) => {
        console.log("unpaused conformation Completed", {
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
const erc20unpauseObject = async (data, txObject) => {
  
    // const toAddress = data.toAddress;
    // const tokenId = data.tokenId;
    // const tokenvalidity = data.tokenValidity;
    // //const graceperiod = data.graceperiod;
    // const royaltyReceiver = data.royaltyReceiver;
    // const royaltyPercentage = data.royaltyPercentage;
   
    
    console.log("data:", data);
    
    const myContract = new web3.eth.Contract(Contract_ABI, Contract_Address);
    
  
    txObject.data = myContract.methods
      .unpause()
      .encodeABI();
    
    
};

module.exports ={unpauseToken};