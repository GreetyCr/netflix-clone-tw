// src/pages/_app.tsx

import { RecoilRoot } from "recoil";
import { AuthProvider } from "../../hooks/useAuth";
import "../app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;
