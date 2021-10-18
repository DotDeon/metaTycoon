const SmartContract = artifacts.require("SmartContract");

module.exports = function (deployer) {
  deployer.deploy(SmartContract, "RICHFXXK", "RCHFXK", "https://", "https://");
};
