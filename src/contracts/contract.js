import AgreementContract from "../abi/AgreementContract.json";
import Agreement from "../abi/Agreement.json";

const AgreementAddress = "0x4F5ff6B9F76644FC630412409BEBaFC84621539C"; 
const AgreementContractAbi = AgreementContract.abi;
const AgreementAbi = Agreement.abi; 
const chainLinkPriceFeed = "0x149a76dD044b3C77fd2A8a193647Fd735Bcb4a0c";
const RandomNumberGeneratorContract =
  "0xd43030268316e36c55BA5F73C780d4bA02c2BF75"; 
const USDCx_Address = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";

export {
  AgreementAddress, 
  AgreementContractAbi,
  AgreementAbi, 
  chainLinkPriceFeed,
  RandomNumberGeneratorContract,
  USDCx_Address
};
