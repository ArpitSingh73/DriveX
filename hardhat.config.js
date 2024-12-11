require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     hardhat: { chainId: 1337 },
//   },
//   paths: { artifacts: "./frontend/src/atrifacts" },
// };


const dotenv = require("dotenv");
dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */
// const key =
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.URL,
      accounts: [process.env.KEY],
    },
  },
};
