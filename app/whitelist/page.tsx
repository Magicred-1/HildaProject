"use client";

import React from "react";
import { SideBar } from "@/components/ui/sidebar";
import {
  // Calculator,
  // Calendar,
  // CreditCard,
  // Settings,
  Smile,
  // User,
  Bean,
  BicepsFlexed,
  Brain,
  Building2,
} from "lucide-react";
import { toast } from "sonner";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  // CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

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
  return (
    <div className="flex md:h-[100vh] h-full">
      {isMobile ? <Navbar /> : <SideBar />}
      <div className="h-full w-full md:border-l-2 md:border-t-2 md:rounded-tl-[2rem] md:mt-[0.25px] 
      mt-4
      flex items-center justify-center">
        <CommandDemo />
      </div>
    </div>
  );
}

const CommandDemo = () => {
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toast.success("Hello World");
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <div className="mt-12 w-full flex flex-col items-center md:text-4xl text-3xl font-bold">Whitelist
    <Command className="rounded-lg border shadow-md w-[90%] h-3/4 mt-8">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Whitelist an Investor">
          <CommandItem>
            <Bean className="mr-2 h-4 w-4" />
            <span>Benoit Martin</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Guénolé de Cadoudal</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Jhon Doe</span>
          </CommandItem>
          <CommandItem>
            <BicepsFlexed className="mr-2 h-4 w-4" />
            <span>Jean Nadaud</span>
          </CommandItem>
          <CommandItem>
            <Brain className="mr-2 h-4 w-4" />
            <span>Marcel Duchamp</span>
          </CommandItem>
          <CommandItem>
            <Building2 className="mr-2 h-4 w-4" />
            <span>Lucien Galtier</span>
            <CommandShortcut>⌘J</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
    </div>
  );
};
