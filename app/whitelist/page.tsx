"use client";

import React, { useState, useEffect } from "react";
import { SideBar } from "@/components/ui/sidebar";
import {
  Smile,
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
  CommandShortcut,
} from "@/components/ui/command";
import Navbar from "@/components/ui/navbar";

// Email Sending Function
async function sendWhitelistEmail(email: string, tokenSymbol: string) {
  try {
    const response = await fetch('/api/send/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, tokenSymbol }),
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    toast.success(`Email sent to ${email} for ${tokenSymbol}`);
  } catch (error) {
    toast.error(`Failed to send email: ${error}`);
  }
}

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

export function CommandDemo() {
  const tokenSymbol = "CDA"; // This is the token symbol that will be included in the email

  return (
    <div className="mt-12 w-full flex flex-col items-center md:text-4xl text-3xl font-bold">Whitelist
    <Command className="rounded-lg border shadow-md w-[90%] h-3/4 mt-8">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Whitelist an Investor">
          <CommandItem onSelect={() => sendWhitelistEmail('djasongadiou@gmail.com', tokenSymbol)}>
            <Bean className="mr-2 h-4 w-4" />
            <span>Benoit Martin</span>
          </CommandItem>
          <CommandItem onSelect={() => sendWhitelistEmail('guenole.cadoudal@example.com', tokenSymbol)}>
            <Smile className="mr-2 h-4 w-4" />
            <span>Guénolé de Cadoudal</span>
          </CommandItem>
          <CommandItem onSelect={() => sendWhitelistEmail('jhon.doe@example.com', tokenSymbol)}>
            <Smile className="mr-2 h-4 w-4" />
            <span>Jhon Doe</span>
          </CommandItem>
          <CommandItem onSelect={() => sendWhitelistEmail('jean.nadaud@example.com', tokenSymbol)}>
            <BicepsFlexed className="mr-2 h-4 w-4" />
            <span>Jean Nadaud</span>
          </CommandItem>
          <CommandItem onSelect={() => sendWhitelistEmail('marcel.duchamp@example.com', tokenSymbol)}>
            <Brain className="mr-2 h-4 w-4" />
            <span>Marcel Duchamp</span>
          </CommandItem>
          <CommandItem onSelect={() => sendWhitelistEmail('lucien.galtier@example.com', tokenSymbol)}>
            <Building2 className="mr-2 h-4 w-4" />
            <span>Lucien Galtier</span>
            <CommandShortcut>⌘J</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
    </div>
  );
}
