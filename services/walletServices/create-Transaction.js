const  Transaction  = require("ethereumjs-tx");
const { getNonce } =require("../web3/getNonce")
const { getGasPrice } =require("../web3/getGasPrice")
const { getTransactionOptions } =require("./getTransactionOptions")
require('dotenv').config()
const owner=process.env.OWNER_ADDRESS;
const  privateKeyG = process.env.PRIVATE_KEY;
const  CustomerPrivateKey = process.env.CUSTOMER_PRIVATE_KEY;
const Customer1=process.env.CUSTOMER_ADDRESS;
const createTx = async (txObject, web3, network) => {
    try {
      txObject.from = owner;   // change
     console.log("from -admin",txObject.from);
     console.log("contract address", txObject.to);
      const finalGasPrice = await getGasPrice(web3);
      console.log("finalGasPrice", finalGasPrice);
      txObject.gasPrice = web3.utils.toHex(finalGasPrice);
      const nonceCount = await getNonce(owner, web3);  // change
      txObject.nonce = web3.utils.toHex(nonceCount);
  
      // Estimate gas value by executing the transaction in vm
      const estimatedGas = await web3.eth.estimateGas(txObject);
       console.log("estimatedGas : " + estimatedGas);
      txObject.gasLimit = estimatedGas;
      
      
      const privateKey = new Buffer.from(privateKeyG, "hex");  // change
      
      const txOptions = getTransactionOptions(network);
      console.log('calls');
      const tx = new Transaction(txObject, txOptions);
      tx.sign(privateKey);
      console.log(tx);
      const serializedTx = tx.serialize();
      console.log(serializedTx);
      return "0x" + serializedTx.toString("hex");
    } catch (error) {
        console.log(error);
      throw Error(error);
    }
}

module.exports={createTx};