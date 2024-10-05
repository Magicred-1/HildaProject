"use client";

// import { Button } from "@/components/ui/button";
import { SideBar } from "@/components/ui/sidebar";
import {
  DynamicWidget,
  useDynamicContext,
  useUserWallets,
} from "@dynamic-labs/sdk-react-core";
import { useState, useEffect } from "react";

export default function Home() {
  const [balance, setBalance] = useState<string>("--.--");
  const { primaryWallet } = useDynamicContext();
  const userWallets = useUserWallets();
  const getBalance = async () => {
    const balance = await primaryWallet!.getBalance();
    setBalance(balance || "--.--");
    return balance;
  };
  useEffect(() => {
    getBalance();
  }, []);
  return (
    <div className="flex h-[100vh]">
      <SideBar />
      <div className="h-full w-full border-l-2 border-t-2 rounded-tl-[2rem] mt-[0.25px]">
        <div>
          <DynamicWidget />
        </div>

        {userWallets.map((wallet) => (
          <p key={wallet.id}>{wallet.address}</p>
        ))}
        <p>Balance: {balance}</p>
      </div>
    </div>
  );
}
