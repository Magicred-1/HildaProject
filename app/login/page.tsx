"use client";
import Image from "next/image";

import { Button } from "@/components/ui/buttonn";

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useState, useEffect, useRef } from "react"; // Add useRef

export default function Login() {
  const videoRef = useRef<HTMLVideoElement>(null); // Add this line

  useEffect(() => {
    // Auto-play the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full absolute top-0 left-0 z-10">
        <Header />
        <Hero />
      </div>
      <video
        ref={videoRef}
        src="/video.mp4"
        className="absolute top-0 right-0 w-full h-full object-cover"
        loop
        muted
        playsInline
      />
    </>
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
      <div className="flex gap-8 text-xl"></div>
      <div className="flex gap-8 text-xl"></div>
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
  const videoRef = useRef<HTMLVideoElement>(null); // Add this line

  useEffect(() => {
    // Auto-play the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
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
    <div className="w-full h-full flex">
      {isMobile ? (
        <div className="w-full h-full relative px-6 top-1/2 bg-black/10 mt-12">
          <div className="absolute flex items-center gap-8">
            <Image src={`/shape.svg`} alt="shape" width={50} height={50} />
            <div className="text-3xl mt-12">
              A new way to <br />
              <span className="font-black">Tokenize</span> assets
            </div>
          </div>
          <Button
            className="text-2xl font-extrabold px-16 py-6 mt-44 ml-16"
            variant="reverse"
            onClick={() => setShowAuthFlow(true)}
          >
            Login
          </Button>
        </div>
      ) : (
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
      )}
    </div>
  );
}
