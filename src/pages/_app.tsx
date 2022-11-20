import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/templates/Layout";
import { theme } from "../chakra/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
  );
}
