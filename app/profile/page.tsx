"use client";

import Navbar from "@/components/ui/navbar";
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
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIfMobile = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);
    };
    checkIfMobile();
    console.log(isMobile);
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  return (
    <div className="flex h-[100vh]">
      {isMobile?<Navbar/>:<SideBar/>}
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
