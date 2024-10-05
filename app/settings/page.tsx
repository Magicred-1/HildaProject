"use client";

import { SideBar } from "@/components/ui/sidebar";
import Navbar from "@/components/ui/navbar";
import { useState, useEffect } from "react";

export default function Home() {
  
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
        <div>settings</div>
      </div>
    </div>
  );
}
