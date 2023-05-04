const getNonce = async (Address,web3) => {
    return await web3.eth.getTransactionCount(Address, 'latest'); 
    }// nonce starts counting from 0
module.exports={getNonce}