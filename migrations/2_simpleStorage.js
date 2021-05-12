const simplestorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  deployer.deploy(simplestorage);
};