const hre = require("hardhat");

const tokens = (nTokens) => {
  return ethers.utils.parseUnits(nTokens.toString(), "ether");
};

async function main() {
  // Deploy token contract
  const _initialSupply = tokens(50000000);

  const TheBlockchain = await hre.ethers.getContractFactory("PanditBlock");

  const theBlockchain = await TheBlockchain.deploy(_initialSupply);

  await theBlockchain.deployed();

  console.log(`TheBlockchain deployed to ${theBlockchain.address}`);

  // Deploy token sale contract

  const _tokenPrice = tokens(1);

  const TokenSale = await hre.ethers.getContractFactory("TokenSale");

  const tokenSale = await TokenSale.deploy(theBlockchain.address, _tokenPrice);
  await tokenSale.deployed();
  console.log(`TokenSale deployed to ${tokenSale.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
