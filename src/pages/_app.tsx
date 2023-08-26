import LoadingContainer from "@/components/container/LoadingContainer";
import Layout from "@/components/layout/Layout";
import useIosVh from "@/hooks/useIosVh";
import "@/styles/globals.css";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  useIosVh();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Layout>
          <LoadingContainer>
            <Component {...pageProps} />
            <div id={"recaptcha-container"}></div>
          </LoadingContainer>
        </Layout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
