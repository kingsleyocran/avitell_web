import { AuthContextProvider } from "@/context/AuthContext";
import { ThemeProvider } from "next-themes";
import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import CookieConfirmationModal from "@/components/modals/CookieConfirmationModal";

export default function App({ Component, pageProps, router }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Provider store={store}>
      {typeof window !== "undefined" ? (
        <ThemeProvider defaultTheme="light"> 
          <AuthContextProvider>
            <AnimatePresence mode="wait">
              <Component key={router.route} {...pageProps} />
              {/* <CookieConfirmationModal /> */}
            </AnimatePresence>
            <Toaster />
          </AuthContextProvider>
        </ThemeProvider>
      ) : (
        <div></div>
      )}
    </Provider>
  );
}
