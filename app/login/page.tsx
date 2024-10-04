"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import Marquee from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <Header />
      <Hero />
      {/* <Marquee
        items={[
          "/logo.svg",
          "/ill1.svg",
          "/logo.svg",
          "/ill1.svg",
          "/logo.svg",
          "/ill1.svg",
          "/logo.svg",
          "/ill1.svg",
          "/logo.svg",
          "/ill1.svg",
        ]}
      /> */}
    </div>
  );
}

function Header() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime(); // Initial update
    const timerId = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center justify-between h-[8vh] border-b-2 w-[95vw]">
      <div className="text-4xl font-black flex items-center gap-2">
        <Image src={`/logo.svg`} alt="logo" width={35} height={35} />
        Hilda
      </div>
      <div className="flex gap-8 text-xl">
        <div>about</div>
        <div>contact</div>
        <div>team</div>
      </div>
      <div className=" items-center flex gap-1 justify-center ">
        <div>Vierzon</div>
        <div className="pt-2">*</div>
        <div>{currentTime}</div>
      </div>
    </div>
  );
}

function Hero() {
  const { setShowAuthFlow } = useDynamicContext();
  return (
    <div className="w-full h-[92vh] flex">
      <div className="w-full h-full relative">
        <div className="absolute top-1/2 left-24 flex items-center gap-8 -translate-y-1/2">
          <Image src={`/shape.svg`} alt="shape" width={65} height={65} />
          <div className="text-4xl">
            A new way to <br />
            <span className="font-black ml-8">Tokenize</span> assets
          </div>
        </div>
        <Button
          className="absolute bottom-48 left-48 text-2xl font-extrabold px-16 py-6"
          variant="reverse"
          onClick={() => setShowAuthFlow(true)}
        >
          Login
        </Button>
      </div>
      <div className="w-full h-full relative overflow-hidden">
        <Image
          src={`/ill1.svg`}
          alt="login"
          width={600}
          height={600}
          className="absolute top-16 right-10"
        />
      </div>
    </div>
  );
}
