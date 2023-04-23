import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { ExternalProvider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: any; // ExternalProvider;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
