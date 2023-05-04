
require('dotenv').config()
const provider =process.env.RPC_PROVIDER;
const Web3 = require('web3');
var web3 = new Web3(provider);
module.exports={web3}