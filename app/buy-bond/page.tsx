"use client";
import { SideBar } from "@/components/ui/sidebar";
import React from "react";
import Card from "@/components/ui/card";

// import Navbar from "@/components/ui/navbar";
import { useState, useEffect } from "react";
import Navbar from "@/components/ui/navbar";

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

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const handleOpen1 = () => {
    setIsOpen1(!isOpen1);
  };
  const handleOpen2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleOpen3 = () => {
    setIsOpen3(!isOpen3);
  };
  const handleOpen4 = () => {
    setIsOpen4(!isOpen4);
  };

  return (
    <div>
      {!isMobile ? (
        <div className="flex h-[100vh]">
          <SideBar />
          <div className="h-full w-full border-l border-t rounded-tl-[2rem] mt-[0.25px] grid grid-cols-2 transition-all duration-300 ease-in-out pt-4 px-24 gap-4">
            <Card
              logoSrc="/shapes/1.png"
              mainTitle="$CDA"
              websiteUrl="Crédit Agricole"
              lastUpdate="TVL: 22M / Yield: 3.45% / ESG: 83"
              cardImageSrc="/card.png"
            />
            <Card
              logoSrc="/shapes/2.png"
              mainTitle="$SG"
              websiteUrl="Société Générale"
              lastUpdate="TVL: 14M / Yield: 2.23% / ESG: 92"
              cardImageSrc="/card.png"
            />
            <Card
              logoSrc="/shapes/3.png"
              mainTitle="$LBP"
              websiteUrl="La Banque Postale"
              lastUpdate="TVL: 8.4M / Yield: 1.23% / ESG: 78"
              cardImageSrc="/card.png"
            />
            <Card
              logoSrc="/shapes/4.png"
              mainTitle="$BP"
              websiteUrl="Banque Populaire"
              lastUpdate="TVL: 2.5M / Yield: 4.1% / ESG: 67"
              cardImageSrc="/card.png"
            />
          </div>
        </div>
      ) : (
        <div className="flex h-full pb-32">
          <Navbar />
          <div
            className="h-full w-full mt-24 transition-all duration-300 ease-in-out
      flex flex-col gap-6 items-center"
          >
            <div
              className={`bg-white rounded-xl flex flex-col ${
                isOpen1 ? "h-[50vh] w-[85%]" : "h-[40vh] w-[80%]"
              }
          transition-all duration-300 ease-in-out`}
              onClick={handleOpen1}
            >
              <img
                className="m-2 rounded-xl bg-red-300 h-[50%]"
                src="/card.png"
                alt="bond"
              />

              <div className="text-black text-4xl font-normal px-4 py-4">
                $CDA
              </div>

              <div className="text-black text-md font-normal px-4 py-2">
                Crédit Agricole <br />
                TVL: 22M / Yield: 3.45% / ESG: 83
              </div>

              {isOpen1 ? (
                <button
                  className="text-white text-xl font-bold px-4 py-2
           bg-black rounded-xl w-[25%] self-end
           m-4"
                >
                  View
                </button>
              ) : (
                <div></div>
              )}
            </div>

            <div
              className={`bg-white rounded-xl flex flex-col ${
                isOpen2 ? "h-[50vh] w-[85%]" : "h-[40vh] w-[80%]"
              }
          transition-all duration-300 ease-in-out`}
              onClick={handleOpen2}
            >
              <img
                className="m-2 rounded-xl bg-red-300 h-[50%]"
                src="/card.png"
                alt="bond"
              />

              <div className="text-black text-4xl font-normal px-4 py-4">
                $SG
              </div>

              <div className="text-black text-md font-normal px-4 py-2">
                Société Générale <br />
                TVL: 14M / Yield: 2.23% / ESG: 92
              </div>

              {isOpen2 ? (
                <button
                  className="text-white text-xl font-bold px-4 py-2
           bg-black rounded-xl w-[25%] self-end
           m-4"
                >
                  View
                </button>
              ) : (
                <div></div>
              )}
            </div>

            <div
              className={`bg-white rounded-xl flex flex-col ${
                isOpen3 ? "h-[50vh] w-[85%]" : "h-[40vh] w-[80%]"
              }
          transition-all duration-300 ease-in-out`}
              onClick={handleOpen3}
            >
              <img
                className="m-2 rounded-xl bg-red-300 h-[50%]"
                src="/card.png"
                alt="bond"
              />

              <div className="text-black text-4xl font-normal px-4 py-4">
                $LBP
              </div>

              <div className="text-black text-md font-normal px-4 py-2">
                La Banque Postale <br />
                TVL: 8.4M / Yield: 1.23% / ESG: 78
              </div>

              {isOpen3 ? (
                <button
                  className="text-white text-xl font-bold px-4 py-2
           bg-black rounded-xl w-[25%] self-end
           m-4"
                >
                  View
                </button>
              ) : (
                <div></div>
              )}
            </div>

            <div
              className={`bg-white rounded-xl flex flex-col ${
                isOpen4 ? "h-[50vh] w-[85%]" : "h-[40vh] w-[80%]"
              }
          transition-all duration-300 ease-in-out`}
              onClick={handleOpen4}
            >
              <img
                className="m-2 rounded-xl bg-red-300 h-[50%]"
                src="/card.png"
                alt="bond"
              />

              <div className="text-black text-4xl font-normal px-4 py-4">
                $BP
              </div>

              <div className="text-black text-md font-normal px-4 py-2">
                Banque Populaire <br />
                TVL: 2.5M / Yield: 4.1% / ESG: 67
              </div>

              {isOpen4 ? (
                <button
                  className="text-white text-xl font-bold px-4 py-2
           bg-black rounded-xl w-[25%] self-end
           m-4"
                >
                  View
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
