"use client";

import { PrivyProvider } from "@privy-io/react-auth";

export default function Providers({ children }) {
    return (
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
                id: 1,
                name: "Ethereum Mainnet",
                rpcUrl: "https://rpc.ankr.com/eth",
                nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
              },
            }}
        >
            {children}
        </PrivyProvider>
    );
}
