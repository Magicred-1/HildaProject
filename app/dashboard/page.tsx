"use client";

import { SideBar } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/navbar";
import Eight from "@/components/ui/eight";
import RingChart from "@/components/ui/ring-chart";
import Progress from "@/components/ui/progress";
import GaugeChart from "@/components/ui/gauge";
import BarChart from "@/components/ui/bar-chart";
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
    <div className="flex h-[100vh]">
      {isMobile ? <Navbar /> : <SideBar />}
      <div className="h-full w-full border-l border-t rounded-tl-[2rem] mt-[0.25px] flex flex-col gap-4 items-center justify-center">
        {/* <div>
          <div className="rounded-full bg-gray-900 px-8 py-6 mb-4">
            <strong className="font-normal text-gray-50">
              <strong>70%</strong> progress
            </strong>
            <div className=" w-96">
              <Progress progress={70} />
            </div>
          </div>
          <div className="flex items-center justify-center gap-8">
            <GaugeChart
              circleWidth={10}
              gap={100}
              progress={70}
              progressWidth={10}
              rounded
              showValue
              size={150}
            />
            <div>
              <strong className="text-blue-500">Bar chart</strong>
              <div className="group rounded border border-blue-100 bg-white p-2">
                <div className="border-bottom relative box-border h-12 w-52 border-zinc-300">
                  <BarChart
                    height={48}
                    items={[
                      {
                        className: "rounded-md bg-blue-600/45",
                        label: "A",
                        progress: 45,
                      },
                      {
                        className: "rounded-md bg-blue-600/25",
                        label: "B",
                        progress: 25,
                      },
                      {
                        className: "rounded-md bg-blue-600/15",
                        label: "C",
                        progress: 15,
                      },
                      {
                        className: "rounded-md bg-blue-600/20",
                        label: "B",
                        progress: 10,
                      },
                      {
                        className: "rounded-md bg-blue-600/15",
                        label: "C",
                        progress: 15,
                      },
                      {
                        className: "rounded-md bg-blue-600/30",
                        label: "D",
                        progress: 30,
                      },
                      {
                        className: "rounded-md bg-blue-600/70",
                        label: "E",
                        progress: 70,
                      },
                      {
                        className: "rounded-md bg-blue-600/45",
                        label: "A",
                        progress: 45,
                      },
                      {
                        className: "rounded-md bg-blue-600/20",
                        label: "B",
                        progress: 10,
                      },
                      {
                        className: "rounded-md bg-blue-600/15",
                        label: "C",
                        progress: 15,
                      },
                      {
                        className: "rounded-md bg-blue-600/20",
                        label: "B",
                        progress: 10,
                      },
                      {
                        className: "rounded-md bg-blue-600/20",
                        label: "B",
                        progress: 10,
                      },
                      {
                        className: "rounded-md bg-blue-600/20",
                        label: "B",
                        progress: 10,
                      },
                      {
                        className: "rounded-md bg-blue-600/85",
                        label: "C",
                        progress: 85,
                      },
                      {
                        className: "rounded-md bg-blue-600/90",
                        label: "D",
                        progress: 90,
                      },
                      {
                        className: "rounded-md bg-blue-600/15",
                        label: "E",
                        progress: 15,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center justify-center">
            <Eight />
          </div>

          <RingChart
            rings={[
              {
                progress: 60,
                progressClassName: "text-rose-600",
                trackClassName: "text-rose-600/10",
              },
              {
                progress: 50,
                progressClassName: "text-lime-500",
                trackClassName: "text-lime-500/20",
              },
              {
                progress: 40,
                progressClassName: "text-teal-400",
                trackClassName: "text-teal-400/30",
              },
            ]}
          />
        </div> */}

        <div className="w-[60vw flex flex-col gap-4">
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
    </div>
  );
}
