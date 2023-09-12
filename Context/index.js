import { useState, useEffect, createContext, useContext } from "react";
import { ethers } from "ethers";

// INTERNAL IMPORT
import {
  checkIfWalletIsConnected,
  connectWallet,
  connectingTOKEN_CONTRACT,
  connectingTOKEN_SELL_CONTRACT,
  getBalance,
} from "../Utils/index";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const TOKEN_ICO = "TOKEN SELL DAPP";

  // STATE VARIABLE
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [nativeToken, setNativeToken] = useState("");
  const [tokenHolders, setTokenHolders] = useState([]);
  const [tokenSale, setTokenSale] = useState("");
  const [currentHolder, setCurrentHolder] = useState("");

  // FETCH CONTRACT DATA
  const fetchInitialData = async () => {
    try {
      // GET USER ACCOUNT
      const account = await checkIfWalletIsConnected();
      // GET USER BALANCE
      const balance = await getBalance();
      setBalance(ethers.utils.formatEther(balance.toString()));
      setAddress(account);

      // TOKEN CONTRACT
      const TOKEN_CONTRACT = await connectingTOKEN_CONTRACT();
      console.log(TOKEN_CONTRACT);
      let tokenBalance;
      if (account) {
        tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
      } else {
        tokenBalance = 0;
      }

      // GET ALL TOKEN DATA
      const tokenName = await TOKEN_CONTRACT.name();
      const tokenSymbol = await TOKEN_CONTRACT.symbol();
      const tokenTotalSupply = await TOKEN_CONTRACT.totalSupply();
      const tokenStanderd = await TOKEN_CONTRACT.standerd();
      const tokenHolders = await TOKEN_CONTRACT._userId();
      const tokenOwnerOfContract = await TOKEN_CONTRACT.ownerOfContract();
      const tokenAddress = await TOKEN_CONTRACT.address;

      const nativeToken = {
        tokenAddress: tokenAddress,

        tokenName: tokenName,
        tokenSymbol: tokenSymbol,
        tokenOwnerOfContract: tokenOwnerOfContract,
        tokenStanderd: tokenStanderd,
        tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()),
        tokenBalance: ethers.utils.formatEther(tokenBalance.toString()),
        tokenHolders: tokenHolders.toNumber(),
      };

      setNativeToken(nativeToken);

      // GETTING TOKEN HOLDER
      const getTokenHolder = await TOKEN_CONTRACT.getTokenHolder();
      setTokenHolders(getTokenHolder);

      // GETTING TOKEN HOLDERS DATA

      if (account) {
        const getTokenHolderData = await TOKEN_CONTRACT.getTokenHolderData(
          account
        );
        const currentHolder = {
          tokenId: getTokenHolderData[0].toNumber(),
          from: getTokenHolderData[1].toNumber(),
          to: getTokenHolderData[2].toNumber(),
          totalToken: ethers.utils.formatEther(
            getTokenHolderData[3].toString()
          ),
          totalHolder: getTokenHolderData[4].toNumber(),
        };

        setCurrentHolder(currentHolder);
      }

      // TOKEN SALE CONTRACT
      const TOKEN_SALE_CONTRACT = await connectingTOKEN_SELL_CONTRACT();
      const tokenPrice = await TOKEN_SALE_CONTRACT.tokenPrice();
      const tokenSold = await TOKEN_SALE_CONTRACT.tokensSold();
      const tokenSaleBalance = await TOKEN_CONTRACT.balanceOf(
        "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
      );

      const tokenSale = {
        tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
        tokenSold: tokenSold.toNumber(),
        tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString()),
      };
      setTokenSale(tokenSale);
      console.log(tokenSale);
      console.log(tokenHolders);
      console.log(nativeToken);
    } catch (error) {
      console.log(error);
    }

    useEffect(() => {
      fetchInitialData();
    }, []);
  };

  // Buy token
  const buyToken = async (nToken) => {
    try {
      const amount = ethers.utils.parseUnits(nToken.toString(), "ether");
      const contract = await connectingTOKEN_SELL_CONTRACT();

      const buying = await contract.buyToken(nToken, {
        value: amount.toString(),
      });

      await buying.wait();
      console.log(buying);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Native Token Transfer
  const transferNativeToken = async () => {
    try {
      const TOKEN_SALE_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const TOKEN_AMOUNT = 500;
      const tokens = TOKEN_AMOUNT.toString();
      const transferAmount = ethers.utils.parseEther(tokens);

      const contract = await connectingTOKEN_CONTRACT();
      const transaction = await contract.transfer(
        TOKEN_SALE_ADDRESS,
        transferAmount
      );
      console.log(contract);
      await transaction.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        transferNativeToken,
        buyToken,
        connectWallet,
        setAddress,
        TOKEN_ICO,

        currentHolder,
        tokenSale,
        tokenHolders,
        nativeToken,
        balance,
        address,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
