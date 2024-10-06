"use client";

import { SideBar } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/navbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FlightWidget from "@/components/animata/ticket";
import Status from "@/components/animata/status";

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
    <div className="flex md:h-[100vh] h-full">
      {!isMobile ? 
      <SideBar /> : <Navbar />}
      {!isMobile ? (
      <div className="h-full w-full border-l border-t rounded-tl-[2rem] mt-[0.25px] flex flex-col gap-4 items-center justify-center">


        <div className="w-[60vw] flex flex-col gap-4">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Bond</TableHead>
                <TableHead>Bond Issued</TableHead>
                <TableHead>Whitelisted Investors</TableHead>
                <TableHead>Bond Selled</TableHead>
                <TableHead className="text-right">Market Cap</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">$CDA</TableCell>
                <TableCell>250,000,000</TableCell>
                <TableCell>2560</TableCell>
                <TableCell>12,000,000</TableCell>
                <TableCell className="text-right">$35,000,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">$CDA.e</TableCell>
                <TableCell>90,000,000</TableCell>
                <TableCell>5490</TableCell>
                <TableCell>47,000,000</TableCell>
                <TableCell className="text-right">$23,000,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">$CDA.d</TableCell>
                <TableCell>120,000,000</TableCell>
                <TableCell>3560</TableCell>
                <TableCell>67,000,000</TableCell>
                <TableCell className="text-right">$90,000,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex gap-4 items-center justify-center">
            <FlightWidget
              logoSrc="/shapes/1.png"
              mainTitle="$CDA"
              whitelisted="2560"
              supply="250M"
              selled="12M"
              mc="$35M"
              maturity="05 Oct, 2025"
            />
            <FlightWidget
              logoSrc="/shapes/1.png"
              mainTitle="$CDA.e"
              whitelisted="5490"
              supply="90M"
              selled="47M"
              mc="$23M"
              maturity="07 Jan, 2026"
            />
            <FlightWidget
              logoSrc="/shapes/1.png"
              mainTitle="$CDA.d"
              whitelisted="3560"
              supply="120M"
              selled="67M"
              mc="$90M"
              maturity="23 Apr, 2025"
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Status
              status="Good"
              progress="80%"
              items={[
                {
                  className: "rounded-md bg-green-500",
                  label: "A",
                  progress: 34,
                },
                {
                  className: "rounded-md bg-red-500",
                  label: "B",
                  progress: 14,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "C",
                  progress: 34,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "D",
                  progress: 70,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "E",
                  progress: 52,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "F",
                  progress: 30,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "G",
                  progress: 37,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "H",
                  progress: 72,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "I",
                  progress: 42,
                },
              ]}
            />
            <Status
              status="Bad"
              progress="35%"
              items={[
                {
                  className: "rounded-md bg-red-500",
                  label: "A",
                  progress: 12,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "B",
                  progress: 24,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "C",
                  progress: 35,
                },
                {
                  className: "rounded-md bg-red-500",
                  label: "D",
                  progress: 14,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "E",
                  progress: 52,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "F",
                  progress: 60,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "G",
                  progress: 22,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "H",
                  progress: 39,
                },
                {
                  className: "rounded-md bg-red-500",
                  label: "I",
                  progress: 9,
                },
              ]}
            />
            <Status
              status="yes"
              progress="67%"
              items={[
                {
                  className: "rounded-md bg-green-500",
                  label: "A",
                  progress: 70,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "B",
                  progress: 32,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "C",
                  progress: 50,
                },
                {
                  className: "rounded-md bg-red-500",
                  label: "D",
                  progress: 2,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "E",
                  progress: 23,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "F",
                  progress: 90,
                },
                {
                  className: "rounded-md bg-red-500",
                  label: "G",
                  progress: 8,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "H",
                  progress: 30,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "I",
                  progress: 60,
                },
              ]}
            />
          </div>
        </div>
      </div>
      )
      : (
        <div className="h-full w-full mt-24 flex flex-col gap-4 items-center justify-center pb-28">

        <div className="text-2xl font-bold pl-2 pb-2">Recent Invoices</div>
        <div className="w-[90%] flex flex-col gap-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Bond</TableHead>
                <TableHead>Bond Issued</TableHead>
                <TableHead>Whitelisted Investors</TableHead>
                <TableHead>Bond Selled</TableHead>
                <TableHead className="text-right">Market Cap</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">$CDA</TableCell>
                <TableCell>250,000,000</TableCell>
                <TableCell>2560</TableCell>
                <TableCell>12,000,000</TableCell>
                <TableCell className="text-right">$35,000,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">$CDA.e</TableCell>
                <TableCell>90,000,000</TableCell>
                <TableCell>5490</TableCell>
                <TableCell>47,000,000</TableCell>
                <TableCell className="text-right">$23,000,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">$CDA.d</TableCell>
                <TableCell>120,000,000</TableCell>
                <TableCell>3560</TableCell>
                <TableCell>67,000,000</TableCell>
                <TableCell className="text-right">$90,000,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex flex-col gap-8 justify-center items-center mt-8">

            <div className="flex flex-col gap-2 justify-center items-center">

              <div className="-ml-16">
            <FlightWidget
              logoSrc="/shapes/1.png"
              mainTitle="$CDA"
              whitelisted="2560"
              supply="250M"
              selled="12M"
              mc="$35M"
              maturity="05 Oct, 2025"
            />
            </div>
            
            <div className="ml-16">
          <Status
              status="Good"
              progress="80%"
              items={[
                {
                  className: "rounded-md bg-green-500",
                  label: "A",
                  progress: 34,
                },
                {
                  className: "rounded-md bg-red-500",
                  label: "B",
                  progress: 14,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "C",
                  progress: 34,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "D",
                  progress: 70,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "E",
                  progress: 52,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "F",
                  progress: 30,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "G",
                  progress: 37,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "H",
                  progress: 72,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "I",
                  progress: 42,
                },
              ]}
            />
            </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">

            <div className="-ml-16">
            <FlightWidget
              logoSrc="/shapes/1.png"
              mainTitle="$CDA.e"
              whitelisted="5490"
              supply="90M"
              selled="47M"
              mc="$23M"
              maturity="07 Jan, 2026"
            />
            </div>

            <div className="ml-16">
            <Status
              status="Bad"
              progress="35%"
              items={[
                {
                  className: "rounded-md bg-red-500",
                  label: "A",
                  progress: 12,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "B",
                  progress: 24,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "C",
                  progress: 35,
                },
                {
                  className: "rounded-md bg-red-500",
                  label: "D",
                  progress: 14,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "E",
                  progress: 52,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "F",
                  progress: 60,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "G",
                  progress: 22,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "H",
                  progress: 39,
                },
                {
                  className: "rounded-md bg-red-500",
                  label: "I",
                  progress: 9,
                },
              ]}
            />
            </div>

            </div>

            <div className="flex flex-col gap-2 justify-center items-center">

            <div className="-ml-16">
            <FlightWidget
              logoSrc="/shapes/1.png"
              mainTitle="$CDA.d"
              whitelisted="3560"
              supply="120M"
              selled="67M"
              mc="$90M"
              maturity="23 Apr, 2025"
            />
            </div>

            <div className="ml-16"> 
            <Status
              status="yes"
              progress="67%"
              items={[
                {
                  className: "rounded-md bg-green-500",
                  label: "A",
                  progress: 70,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "B",
                  progress: 32,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "C",
                  progress: 50,
                },
                {
                  className: "rounded-md bg-red-500",
                  label: "D",
                  progress: 2,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "E",
                  progress: 23,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "F",
                  progress: 90,
                },
                {
                  className: "rounded-md bg-red-500",
                  label: "G",
                  progress: 8,
                },
                {
                  className: "rounded-md bg-yellow-500",
                  label: "H",
                  progress: 30,
                },
                {
                  className: "rounded-md bg-green-500",
                  label: "I",
                  progress: 60,
                },
              ]}
            />
            </div>

            </div>

          </div>

        </div>
      </div>
      )}
    </div>
  );
}
