const DEMO = artifacts.require('DEMO');

module.exports = function (deployer) {
  deployer.deploy(DEMO).then(() => {
    console.log('DNFT address is: ', DEMO.address);
  });
};