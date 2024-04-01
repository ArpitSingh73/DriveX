const hre = require("hardhat");
const { ethers } = require("hardhat");
// 0x5FbDB2315678afecb367f032d93F642f64180aa3
async function main() {
  const drive = await ethers.getContractFactory("Drive");
  const contract = await drive.deploy();
  await contract.waitForDeployment();

  console.log("Address of deployed contract : ", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
