import { useState, useEffect, createContext, useContext } from "react";
import { ethers } from "ethers";

// INTERNAL IMPORT
import {
  checkIfWalletIsConnected,
  connectWallet,
  connectingTOKENCONTRACT,
  connectingTOKEN_SELL_CONTRACT,
  getBalance,
} from "../Utils/index";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const TOKEN_ICO = "TOKEN SELL DAPP";
  return (
    <StateContext.Provider value={{ TOKEN_ICO }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);