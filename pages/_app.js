import "../styles/globals.css";
import { StateContextProvider } from "../context/constants";
export default function App({ Component, pageProps }) {
  return (
    <>
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>
    </>
  );
}
