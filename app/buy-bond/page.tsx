"use client";
import { SideBar } from "@/components/ui/sidebar";
import React from "react";
import Card from "@/components/ui/card";

export default function Home() {
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
