"use client";

import { CircleDollarSign } from "lucide-react";
import Image from "next/image";

interface CardProps {
  logoSrc: string;
  mainTitle: string;
  whitelisted: string;
  supply: string;
  selled: string;
  mc: string;
  maturity: string;
}

const App: React.FC<CardProps> = ({
  logoSrc,
  mainTitle,
  whitelisted,
  supply,
  selled,
  mc,
  maturity,
}) => {
  return (
    <div className="relative flex h-52 w-52 overflow-hidden rounded-3xl text-black">
      <div className="relative w-16 items-center justify-evenly overflow-hidden bg-gradient-to-b from-blue-100 to-blue-300">
        <div className="full absolute bottom-0 left-full flex h-16 w-52 origin-bottom-left -rotate-90 items-center justify-center gap-3 bg-pink-100">
          <div className="text-sm font-semibold tracking-widest text-red-700">
            Credit Agricole
          </div>
          <Image src={logoSrc} alt="logo" width={35} height={35} />
        </div>
      </div>
      <div className="relative h-full w-36 bg-gradient-to-b from-blue-100 to-teal-100 p-4 text-sm">
        <div className="absolute -left-2 -top-2 z-10 h-4 w-4 rounded-full bg-black" />
        <div className="flex justify-around pb-2">
          <div className="flex flex-col text-2xl font-bold items-start justify-start w-full">
            <p>{mainTitle}</p>
            <p>{supply}</p>
          </div>
          <div className="absolute top-6 right-2">
            <div className="mt-8 rounded-2xl bg-yellow-400 px-2 font-mono font-bold text-black/75">
              {whitelisted}
            </div>
          </div>
        </div>
        <div className="mt-2 font-bold tracking-tight text-teal-500">
          Bond Selled
        </div>
        <div className="flex items-center justify-between font-bold">
          <p>{selled}</p>
          <p className="flex pr-2 items-center">
            <CircleDollarSign className="w-4 h-4" /> {mc}
          </p>
        </div>
        <div className="mt-2 font-bold tracking-tight text-teal-500">
          Maturity Date
        </div>
        <div className="flex font-bold">
          <p>{maturity}</p>
        </div>
        {/* The background should match the container's background */}
        <div className="absolute -bottom-2 -left-2 z-10 h-4 w-4 rounded-full bg-black" />
      </div>
    </div>
  );
};
export default App;
