"use client";

import { Button } from "@/components/ui/button";
import { SideBar } from "@/components/ui/sidebar";
import {
  DynamicWidget,
  useDynamicContext,
  useUserWallets,
} from "@dynamic-labs/sdk-react-core";

export default function Home() {
  const { primaryWallet } = useDynamicContext();
  const userWallets = useUserWallets();

  return (
    <div className="flex h-[100vh]">
      <SideBar />
      <div className="h-full w-full border-l-2 border-t-2 rounded-tl-[2rem] mt-[0.25px]"></div>
    </div>
  );
}
