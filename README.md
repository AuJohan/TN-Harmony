## Trustified Network is a platform to Sell Digital Services Globally and Accept Crypto Payments without paying Hefty Commissions.

## Inspiration

“Trust” is a key factor for successful transactions between parties. To ensure trust, we involve third party freelancing platforms or middlemen and pay hefty commissions which highly affect the overall profit margins of parties involved in a transaction.

## What it does

Trustified.network is a smart contract assured Escrow Agreement and Payment platform which helps individuals and businesses to grow globally and increase profit margins in four simple steps:

1) List Products, Services, or subscription packages.
2) Create Escrow agreements with personalized terms as per customers.
3) Send/Receive crypto payments in a reliable and secure way without paying hefty commissions to third parties.  
 

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



# Homepage
![Screenshot 2022-05-28 at 12 28 50 AM](https://user-images.githubusercontent.com/45895007/170774584-6ddd4ecb-f1e0-4103-b022-e1adb94be905.png)

# Escrow Agreement 
![Screenshot 2022-06-10 at 7 07 56 PM](https://user-images.githubusercontent.com/45895007/173078373-f41ee73f-8bbe-40b3-94f2-b24a17a97fba.png)


# Login With Unstoppable, coinbase wallet, Wallet connect , Metamask

![Screenshot 2022-05-28 at 12 29 01 AM](https://user-images.githubusercontent.com/45895007/170774631-59dc2814-f714-43b6-a550-a89e6e5df00a.png)

# Create Agreement! 
![Screenshot 2022-06-10 at 7 08 55 PM](https://user-images.githubusercontent.com/45895007/173078555-9dcd224d-f76b-415b-92ed-6b600ca893d4.png)

# Crypto Payment
 
![Screenshot 2022-06-10 at 7 09 12 PM](https://user-images.githubusercontent.com/45895007/173078637-6e7258b3-adeb-45a7-b2fa-c026e280df24.png)

# EPNS Notifications 
![Screenshot 2022-05-28 at 12 30 49 AM](https://user-images.githubusercontent.com/45895007/170775071-f950d9b0-abd0-432f-9ae1-ad2d2b514e3a.png)

# Invoice 
 
![Screenshot 2022-06-10 at 7 09 43 PM](https://user-images.githubusercontent.com/45895007/173078698-73f9fe02-8b55-4617-893c-41a16cd0abff.png)

# Invoice Details
![Screenshot 2022-06-10 at 7 09 55 PM](https://user-images.githubusercontent.com/45895007/173078739-2b441712-4d8f-45a5-be40-773d1986af52.png)








