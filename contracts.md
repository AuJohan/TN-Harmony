
# Deploy Smart contracts onHarmony 

https://github.com/Trustified-Network/TN-Harmony/blob/master/hardhat.config.js

```javascript
require("dotenv").config({ path: "./.env" });
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const HARMONY_PRIVATE_KEY = process.env.HARMONY_PRIVATE_KEY; 


module.exports = {
  networks: {
    harmony: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [`0x${HARMONY_PRIVATE_KEY}`]
    },
  },

  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};



```

# contract Address

**Harmony Address** : 0x4F5ff6B9F76644FC630412409BEBaFC84621539C 

**Ropsten Address** : 0x85B6eE037A8E183C502E8Ff17FcC069dd4D5712E
