import type { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Layout from "../components/templates/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Layout>
  );
}
