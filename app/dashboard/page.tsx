"use client";

import { SideBar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-[100vh]">
      <SideBar />
      <div className="h-full w-full border-l-2 border-t-2 rounded-tl-[2rem] mt-[0.25px]">
        dashboard
        <Button>Click me</Button>
      </div>
    </div>
  );
}
