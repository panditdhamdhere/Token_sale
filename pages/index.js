import React from "react";

// Internal imports

import { useStateContext } from "../context/index";
import {
  About,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Team,
  Timeline,
  Tokensale,
  Service,
} from "../Components/index";

const index = () => {
  const {
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
  } = useStateContext();
  return (
    <div className="v_dark">
      <Header
        address={address}
        setAddress={setAddress}
        connectWallet={connectWallet}
      />
      <Banner transferNativeToken={transferNativeToken} />
      <Service />
      <About />
      <Tokensale buyToken={buyToken} tokenSale={tokenSale} />
      <Distribution />
      <MobileApp />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
