"use client";

import React from "react";
import { SideBar } from "@/components/ui/sidebar";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
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
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export default function Home() {
  return (
    <div className="flex h-[100vh]">
      <SideBar />
      <div className="h-full w-full border-l-2 border-t-2 rounded-tl-[2rem] mt-[0.25px] flex items-center justify-center">
        <CommandDemo />
      </div>
    </div>
  );
}

export function CommandDemo() {
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
    <Command className="rounded-lg border shadow-md w-1/2 h-3/4">
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
  );
}
