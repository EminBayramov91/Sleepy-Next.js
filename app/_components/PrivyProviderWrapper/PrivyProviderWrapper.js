"use client";
import { PrivyProvider } from "@privy-io/react-auth";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/app/_lib/apolloClient";

export default function Providers({ children }) {
    return (
      <ApolloProvider client={client}>
          <PrivyProvider
            appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
            config={{
                appearance: {
                    theme: 'dark',
                },
                embeddedWallets: {
                    ethereum: {
                        createOnLogin: "users-without-wallets",
                    },
                },
                walletConnect: false,
                defaultChain: {
                    id: 42,
                    name: 'LUKSO',
                    rpcUrl: 'https://rpc.mainnet.lukso.network',
                    nativeCurrency: { name: 'LUKSO', symbol: 'LYX', decimals: 18 },
                },
            }}
          >
              {children}
          </PrivyProvider>
      </ApolloProvider>
    );
}
