/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { SideBar } from "@/components/ui/sidebar";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
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
      <div className="h-full md:w-full md:border-l-2 md:border-t-2 md:rounded-tl-[2rem] md:mt-[0.25px] 
      w-[80%] mx-auto rounded-xl mt-28 md:pb-0 pb-32
      flex justify-center items-center">
        <SignupFormDemo />
      </div>
    </div>
  );
}

const SignupFormDemo = () => {
  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: "Sonner" }), 2000)
    );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    toast.promise(promise, {
      loading: "Registering...",
      success: () => {
        return `Bond deployed successfully`;
      },
      error: "Error",
    });
  };
  return (
    <div className="max-w-md w-full mx-auto md:rounded-2xl rounded-xl p-8 md:p-8 shadow-input bg-black border border-neutral-400">
      <h2 className="font-bold text-xl  text-neutral-200">Create a new bond</h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 ">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="CACIB" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="isin">Issin</Label>
            <Input id="isin" placeholder="FR12.." type="text" />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 ">
          <LabelInputContainer>
            <Label htmlFor="supply">Supply</Label>
            <Input id="supply" placeholder="1,000,000" type="number" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="currency">Currency</Label>
            <Input id="currency" placeholder="EUR" type="text" />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 ">
          <LabelInputContainer>
            <Label htmlFor="unitval">Unit Value</Label>
            <Input id="unitval" placeholder="100" type="number" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="coupon">Coupon Rate</Label>
            <Input id="coupon" placeholder="" type="text" />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 ">
          <LabelInputContainer className="mb-8">
            <Label htmlFor="creation">Creation Date</Label>
            <DatePickerDemo />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="issuance">Issuance Date</Label>
            <DatePickerDemo />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 ">
          <LabelInputContainer className="mb-8">
            <Label htmlFor="maturity">Maturity Date</Label>
            <DatePickerDemo />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="cutoff">Cutoff Time</Label>
            <DatePickerDemo />
          </LabelInputContainer>
        </div>

        <button
          className="bg-gradient-to-br relative group/btn  from-zinc-900  to-neutral-600 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]
          md:mt-0 mt-10"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const DatePickerDemo = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[180px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
