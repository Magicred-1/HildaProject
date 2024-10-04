"use client";

import { useRouter } from "next/navigation";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <DynamicContextProvider
      settings={{
        environmentId: "832a5743-3046-429c-b89d-8dd0b3496f9d",
        walletConnectors: [
          EthereumWalletConnectors,
          ZeroDevSmartWalletConnectors,
        ],
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
