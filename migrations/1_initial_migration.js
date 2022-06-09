const Migrations = artifacts.require("Migrations");
const NewNFT = artifacts.require("NewNFT");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(NewNFT);
};