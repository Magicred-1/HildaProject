"use client";

import { useRouter } from "next/navigation";

import { DynamicContextProvider, mergeNetworks } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const evmNetworks = [
  {
      blockExplorerUrls: ['https://testnet.snowtrace.io/'],
      chainId: 43113,
      chainName: 'Avalanche Fuji Testnet',
      iconUrls: ['https://app.dynamic.xyz/assets/networks/avax.svg'],
      name: 'Avalanche Fuji Testnet',
      nativeCurrency: {
        decimals: 18,
        name: 'AVAX',
        symbol: 'AVAX',
      },
      networkId: 43113,
      rpcUrls: ['https://avalanche-fuji-c-chain-rpc.publicnode.com'],
      vanityName: 'Avalanche Fuji Testnet',
    },
  ];

  return (
    <DynamicContextProvider
      settings={{
        environmentId: "6d869255-8971-474a-bf98-826918ac83e9",
        walletConnectors: [
          EthereumWalletConnectors,
          ZeroDevSmartWalletConnectors,
        ],
        overrides: {
          evmNetworks: (networks) => mergeNetworks(evmNetworks, networks),
        },
        events: {
          onAuthSuccess: () => {
            console.log("Auth success");
            router.push("/dashboard");
          },
          onLogout: () => {
            console.log("Login");
            router.push("/login");
          },
        },
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}
