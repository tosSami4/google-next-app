
import "../styles/globals.css";
import "../styles/login.css";

import { SessionProvider } from "next-auth/react";
import { StateProvider } from "../Store/Store";
import reducer,{ initialState } from "../redux/CartSlice";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    </SessionProvider>
  );
}