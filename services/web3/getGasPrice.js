
const getGasPrice = async (web3) => {
    const gasPrice = await web3.eth.getGasPrice();
    console.log("Gas price: " + gasPrice);
    return web3.utils.toBN(gasPrice).add(web3.utils.toBN("20000000000"));
    };

module.exports={getGasPrice}