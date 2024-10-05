"use client";
import { SideBar } from "@/components/ui/sidebar";
import React from "react";
import Card from "@/components/ui/card";

// import Navbar from "@/components/ui/navbar";
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
      <SideBar />
      <div className="h-full w-full border-l-2 border-t-2 rounded-tl-[2rem] mt-[0.25px] grid grid-cols-2 transition-all duration-300 ease-in-out pt-4 px-24 gap-4">
        <Card
          logoSrc="/shapes/1.png"
          mainTitle="Bond"
          websiteUrl="https://www.google.com"
          lastUpdate="2024-02-01"
          cardImageSrc="/card.png"
        />
        <Card
          logoSrc="/shapes/2.png"
          mainTitle="Bond"
          websiteUrl="https://www.google.com"
          lastUpdate="2024-02-01"
          cardImageSrc="/card.png"
        />
        <Card
          logoSrc="/shapes/3.png"
          mainTitle="Bond"
          websiteUrl="https://www.google.com"
          lastUpdate="2024-02-01"
          cardImageSrc="/card.png"
        />
        <Card
          logoSrc="/shapes/4.png"
          mainTitle="Bond"
          websiteUrl="https://www.google.com"
          lastUpdate="2024-02-01"
          cardImageSrc="/card.png"
        />
      </div>
    </div>
  );
}
