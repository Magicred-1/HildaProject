"use client";

import { SideBar } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/navbar";
import Eight from "@/components/ui/eight";
import RingChart from "@/components/ui/ring-chart";
import Progress from "@/components/ui/progress";
import GaugeChart from "@/components/ui/gauge";
import BarChart from "@/components/ui/bar-chart";

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
      <div className="h-full w-full border-l-2 border-t-2 rounded-tl-[2rem] mt-[0.25px] flex flex-col gap-4 items-center justify-center">
        <div>
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
        </div>
      </div>
    </div>
  );
}
